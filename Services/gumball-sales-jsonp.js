function getSales(sales) {
    
    let salesTable = document.getElementById('sales');
    let salesTableBody = document.getElementById('salesTableBody');
    let errorParagraph = document.getElementById('error');

    errorParagraph.setAttribute('class', errorParagraph.getAttribute('class').replace('d-block', 'd-none'));
    salesTable.setAttribute('class', salesTable.getAttribute('class').replace('d-none', ''));
    
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