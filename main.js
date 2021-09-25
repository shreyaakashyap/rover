canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width  = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

rover_image = "rover.png";
background_image = "mars.jpg";

function add() {
    background_image_tag = new Image();
    background_image_tag.onload = uploadbackground;
    background_image_tag.src = background_image;

    rover_image_tag = new Image();
    rover_image_tag.onload = uploadrover;
    rover_image_tag.src = rover_image;
}

function uploadbackground() {
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyvalue = e.keyCode;

    console.log(keyvalue);

    if (keyvalue == '38') {
        up();
        console.log('up');
    }

    if (keyvalue == '40') {
        down();
        console.log('down');
    }

    if (keyvalue == '39') {
        right();
        console.log('right');
    }

    if (keyvalue == '37') {
        left();
        console.log('left');
    }
}

function up() {

    if (rover_y >= 0) {

        rover_y -=10;
        console.log("When up arrow key is pressed x= " + rover_x + "y="+ rover_y );

        uploadbackground();
        uploadrover();
    }
}


function down() {

    if (rover_y <= 550) {
        
        rover_y +=10;
        console.log("When down arrow key is pressed, x= " + rover_x + "y=" + rover_y );

        uploadbackground();
        uploadrover();
    }
}

function right() {

    if (rover_x <= 700) {
        
        rover_x +=10;
        console.log("When right arrow key is pressed, x= " + rover_x + "|y=" + rover_y );

        uploadbackground();
        uploadrover();
    }
}

function left() {

    if (rover_x >= 0) {
        
        rover_x -=10;
        console.log("When left arrow key is pressed, x= " + rover_x + "|y=" + rover_y );

        uploadbackground();
        uploadrover();
    }
}
