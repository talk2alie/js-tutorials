function show() {
    let café = 'Midtown Lounge';
    alert(café);
    café = 'Newtown Cafe\u{301}';
    alert(café);
}

function convertToNumber(text) {
    let number = new Number(text);
    text = number.toFixed(3);
    alert(text);
}

function doItAgain(count) {
    let counter = 0;
    while(counter < count) {
        document.writeln('<p>Another scoop!</p>');
        counter++;
    }
}

countBottles = () => {
    var word = "bottles";
    var count = 99;
    while (count > 0) 
    {    
        console.log(count + " " + word + " of beer on the wall");    
        console.log(count + " " + word + " of beer,");    
        console.log("Take one down, pass it around,");    
        count = count - 1;    
        if (count > 0) 
        {        
            console.log(count + " " + word + " of beer on the wall.");    
        } 
        else 
        {       
            console.log("No more " + word + " of beer on the wall.");    
        }
    }
}

function variableName() {
    let $yahoo = 'Yahoo, Inc.';
}