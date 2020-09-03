var imgs = [];
imgs[0] = new Image("assets/1.png");
function animate(){
    window.requestAnimationFrame(animate);
    paint(context);
}
function paint(context){
    context.drawImage(imgs[0],200,200);
}