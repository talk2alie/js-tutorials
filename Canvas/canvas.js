window.onload = () => {
    loadTweets();

    let previewButton = document.getElementById('previewButton');
    previewButton.onclick = e => {
        e.preventDefault();
        let selectedShape = getSelectedValueFor('shapes');
        let selectedShapeColor = getSelectedValueFor('shapeColor');
        let selectedTweet = getSelectedValueFor('tweets');
        let selectedTextColor = getSelectedValueFor('textColor');

        let canvas = document.getElementById('lookWhatIDrew');
        let context = canvas.getContext('2d');
        clearCanvas(canvas, context);

        const maxShapes = 60;

        context.fillStyle = selectedShapeColor;
        if(selectedShape == 'squares') {
            for (let i = 0; i < maxShapes; i++) {
                drawRandomSquare(canvas, context);           
            }
        } else if (selectedShape == 'circles') {
            for (let i = 0; i < maxShapes; i++) {
                drawRandomCircle(canvas, context);                
            }
        }

        context.fillStyle = selectedTextColor;
        drawText(selectedTweet, canvas, context);
    };
};

function drawText(text, canvas, context) {

    context.textAlign = 'left';
    context.font = 'bold 1em Calibri';
    context.fillText('I saw this tweet:', 10, 20);

    
    context.textAlign = 'center';
    context.font = 'bold 2em Calibri';
    context.fillText(text, canvas.width / 2, canvas.height / 2, canvas.width - 40);

    context.textAlign = 'right';
    context.font = 'bold 1em Calibri';
    context.fillText('And all I got is this lousy t-shirt!', canvas.width - 10, canvas.height - 10);
}

function drawRandomCircle(canvas, context) {
    let xCoordinate = Math.floor(Math.random() * canvas.width);
    let yCoordinate = Math.floor(Math.random() * canvas.height);
    let radius = Math.floor(Math.random() * 8) + 4;

    context.beginPath();
    context.arc(xCoordinate, yCoordinate, radius, 0, 6.28318531);
    context.fill();
}

function clearCanvas(canvas, context) {
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawRandomSquare(canvas, context) {
    let xCoordinate = Math.floor(Math.random() * canvas.width);
    let yCoordinate = Math.floor(Math.random() * canvas.height);
    let size = Math.floor(Math.random() * 21) + 4;

    context.fillRect(xCoordinate, yCoordinate, size, size);
}

function loadTweets() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://localhost:5001/api/tweets");
    request.onload = () => {
        if (request.status == 200) {
            let tweetsSelect = document.getElementById('tweets');
            let tweets = JSON.parse(request.responseText);
            for (let i = 0; i < tweets.length; i++) {
                let tweet = tweets[i];
                let option = document.createElement('option');
                option.value = tweet.text;
                option.text = tweet.text;
                tweetsSelect.options.add(option);
            }
        }
    }
    request.send();
}

function getSelectedValueFor(id) {
    let select = document.getElementById(id);
    let selectedIndex = select.selectedIndex;
    return select[selectedIndex].value;
}