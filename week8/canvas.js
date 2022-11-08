var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    
    var img = new Image();
    img.src = "https://raw.githubusercontent.com/spbooks/htmlcss2/master/images/bike_sprite.png";
    img.onload = function() {
        var pattern = context.createPattern(img, "repeat"); 
        context.fillStyle = pattern;                        
        context.fillRect(10, 10, 100, 100);                  
        context.strokeRect(10, 10, 100, 100);
    };            
}

drawPattern();