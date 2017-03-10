function getStyle(obj,attr) {
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }else {
    return getComputedStyle(obj,false)[attr];
  }
}

function startMove(obj,attr,iTarget){
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
    var iCur=0;
    if(attr == 'opacity'){
      iCur = parseInt(parseFloat(getStyle(obj, attr))*100);
    }else {
      iCur = parseInt(getStyle(obj, attr));
    }

    var speed = (iTarget - iCur)/8;
    speed = speed>0?Math.ceil(speed):Math.floor(speed);
    if(iTarget == iCur){
      clearInterval(obj.timer);
    }else {
      if(attr == 'opacity') {
        obj.style.filter = "alpha(opacity:"+(iCur + speed)+")" ;
        obj.style.opacity = (iCur + speed)/100;

      }else {
        obj.style[attr] = iCur + speed + 'px';
      }
    }
  },30)
}
