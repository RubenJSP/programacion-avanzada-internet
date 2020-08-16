<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CANVAS</title>
        <style> 
            .contenido{
                background-color: #dbdbdb;
            }
        
        </style>
    </head>
    <body>
        <canvas class = "contenido" id = "canvas" width="600" height ="400"></canvas>
    </body>
    <script>
       var canvas = document.getElementById('canvas');
       var ctx = canvas.getContext('2d');

       //Rect
       /*ctx.fillStyle = "rgb(200,0,0)";  
       ctx.fillRect(10, 10, 70, 70);  
       ctx.fillStyle = "rgba(0,0,200,0.5)";  
       ctx.fillRect(30, 30, 70, 70);  */

       //Linea
       /*
       ctx.moveTo(0,0);
       ctx.lineTo(200,200);
       ctx.stroke();*/

       //Circulo
       /*ctx.beginPath();
       ctx.beginPath();
       ctx.arc(100, 75, 50, 0, 2 * Math.PI);
       ctx.stroke();*/

       //Fuente
       /*ctx.font = "30px Arial";
       ctx.strokeStyle = "#1ca7e8";
       ctx.strokeText("Hello World",100,100);*/

       //gradiante
       /*var grad = ctx.createLinearGradient(50,50,200,0);
       grad.addColorStop(0,"red");
       grad.addColorStop(1,"white");
       ctx.fillStyle = grad;
       ctx.fillRect(100,100,100,50);*/
       //Gradiante circular
      /* var grad =  ctx.createRadialGradient(200,150,5,200,150,150);
       grad.addColorStop(0,"red");
       grad.addColorStop(1,"white");
       ctx.fillStyle = grad;
       ctx.fillRect(100,100,200,100); */
        //Img
        var img = new Image();
        img.src = "img.jpg";
        ctx.drawImage(img,0,0);

     </script>
</html>




