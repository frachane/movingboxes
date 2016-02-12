console.log("hi from chewie");

var chewie = function(chewie){



chewie.Button = function(width, height,color,hoverColor,label,
  labelStyle,labelColor,hoverLabel,radius ) {

    this.Container_constructor();

  console.log("hi from button");

  var that = this;

  if (width == null) width = 100;
  if (height == null) height = 30;
  if (color == null) color = "black";
  if (hoverColor == null) hoverColor = "white";
  if (label == null) label = "BUTTON";
  if (labelStyle == null) labelStyle = "20px Arial";
  if (labelColor == null) labelColor = "white";
  if (hoverLabel == null) hoverLabel = "black";
  if (radius == null) radius = 10;



  var buttonShape = new createjs.Shape();
  buttonShape.graphics.f(color).drawRoundRect(0, 0, width, height, radius);

  this.regX = width/2;
  this.regY = height/2;

  var text =  new createjs.Text(label, labelStyle , labelColor);
  text.x = width/2;
  text.y = height/2;
  text.textAlign = "center";
	text.textBaseline = "middle";


  this.addChild(buttonShape, text);

  this.hover = function (){
    buttonShape.addEventListener("mouseover", function(){
    buttonShape.graphics.f(hoverColor).drawRoundRect(0, 0, width, height, radius);
    text.color = hoverLabel;
      if (that.stage) that.stage.update();
  });
    buttonShape.addEventListener("mouseout", function(){
    buttonShape.graphics.f(color).drawRoundRect(0, 0, width, height, radius);
    text.color = labelColor;
    if (that.stage) that.stage.update(); });

  }();

}

createjs.extend(chewie.Button, createjs.Container);
createjs.promote(chewie.Button, "Container");

chewie.Rect = function(width,height,color,strokeColor,strokeSize){

  var that = this;

  this.Container_constructor();


  if (width == null) width = 100;
  if (height == null) height = 100;
  if (color == null) color = "red";
  if (strokeColor == null) strokeColor = null;
  if (strokeSize == null) strokeSize = 1;

  var rectangle = new createjs.Shape();
  rectangle.graphics.f(color).beginStroke(strokeColor).setStrokeStyle(strokeSize).drawRect(0, 0, width, height);

  this.regX = width/2;
  this.regY = height/2;

  this.addChild(rectangle);

}


createjs.extend(chewie.Rect, createjs.Container);
createjs.promote(chewie.Rect, "Container");



return chewie;


}(chewie || {});
