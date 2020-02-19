let tID;

function animateScript() {
    // we will navigate the sprite sheet using positionx and position y
    let positionx = 0;
    let positiony = 0;
    const interval = 100;
    const scale = 3; // the sprite sheet I am currently using is 1710 by 960 == (3*570) by (3*320)
    const nrows = 7; // number of frames in one column of sprite sheet
    const ncols = 6; // number of frames in one row of the sprite sheet
    const width = 570; // the width of the original sprite sheet I drew
    const height = 320; // height of the original sprite sheet I drew
    tID = setInterval( () => {
    document.getElementById("sprite").style.backgroundPosition = 
    `-${positionx}px -${positiony}px`;
    if (positionx < width*(ncols-1)*scale)
    { positionx += width*scale;} // traversing a row
    else if (positiony < height*(nrows - 1)*scale)
    {positionx = 0; positiony += height*scale;} // end of row (we're at the last column); rollover to next row
    else
    {
        // TODO: The smallest measure of time I could be possibly interested in is second; this has NO REASON
        // whatsoever to be repeated every 100 ms. Will need to put it in its own setInterval.
        let date = new Date();
        colorBits(date, "minute", 6); // six minute bits, since 2^6 - 1 = 63 > 60 (number of minutes);
        colorBits(date, "day", 3); // 3 day bits, since 2^3 - 1 = 7 == 7 (number of days in week);
        colorBits(date, "hour", 5); // 5 hour bits since 2^5 - 1 == 31 > 24 (number of hours in day);
    }
    }
    , interval ); //end of setInterval
} //end of animateScript()

function colorBits(date, bitType, numBits) {
    let defaultColor = "#006400"; // motherboard green
    let timeElem = 0;
    let color = defaultColor;
    switch (bitType) {
        case "day":
            timeElem = date.getDay();
            color = "blue";
            break;
        case "hour":
            timeElem = date.getHours();
            color = "red";
            break;
        case "minute":
            timeElem = date.getMinutes();
            color = "purple";
            break;
        default:
            timeElem = 0;
            color = "#006400";
    }
    for (let i = 0; i < numBits; i++) {
        document.getElementById(`${bitType}${i}`).style.backgroundColor = 1 & (timeElem >> i) ? color : defaultColor;
    }
}