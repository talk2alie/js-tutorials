window.onload = function () {
    getSales();

    setInterval(getSales, 3000);
}

const withBaseUrl = 'https://localhost:5001/api/sales/';
const httpGet = 'GET';

function getSales() {
    let request = new XMLHttpRequest();
    request.open(httpGet, withBaseUrl);
    request.onload = (e) => {
        let salesTable = document.getElementById('sales');
        let salesTableBody = document.getElementById('salesTableBody');
        while (salesTableBody.firstChild) {
            salesTableBody.firstChild.remove();
        }
       
        let errorParagraph = document.getElementById('error');
        
        if (request.status == 200) {
            errorParagraph.setAttribute('class', errorParagraph.getAttribute('class').replace('d-block', 'd-none'));
            salesTable.setAttribute('class', salesTable.getAttribute('class').replace('d-none', ''));
            let sales = JSON.parse(request.responseText);
            sales.forEach(sale => {
                let row = document.createElement('tr');

                let nameColumn = document.createElement('td');
                nameColumn.innerHTML = sale.name;

                let timeColumn = document.createElement('td');
                timeColumn.innerHTML = `${sale.time} (ms)`;

                let salesColumn = document.createElement('td');
                salesColumn.innerHTML = sale.sales;

                row.appendChild(nameColumn);
                row.appendChild(timeColumn);
                row.appendChild(salesColumn);

                salesTableBody.appendChild(row);
            });
        }
        else {
            errorParagraph.innerHTML += `: ${request.status} ${request.statusText}`;
            errorParagraph.setAttribute('class', errorParagraph.getAttribute('class').replace('d-none', 'd-block'));
            salesTable.setAttribute('class', salesTable.getAttribute('class') + ' d-none');
        }
    }
    request.send();
}