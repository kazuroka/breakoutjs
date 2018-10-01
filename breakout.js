var canvas = document.getElementById("gameCanvas");
var gameWnd = canvas.getContext("2d");

gameWnd.beginPath();
gameWnd.rect(20, 40, 50, 50);
gameWnd.fillStyle = "#FF0000";
gameWnd.fill();
gameWnd.closePath();

