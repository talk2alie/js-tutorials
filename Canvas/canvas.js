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
        
        // clearCanvas(canvas, context);

        context.fillStyle = selectedShapeColor;
        drawRandomSquare(canvas, context);
    };
};

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