function fn(){
    var canvas = document.getElementById('content');
    var text = "I Love Javascript";
    var square = canvas.getContext("2d");
    square.fillStyle = "#F1DA4E";
    var img;
    img = new Image();
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png";
    square.drawImage(img, 50, 80, 135, 135);
    square.fillStyle = "#000000";
    square.font = "30px Tahoma";
    square.fillText(text, 10, 50, 220);

}