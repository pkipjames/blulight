function makeSlideShow(element,imagearray,interval){



var currentItem=0;
function slideShow(element,imagearray,interval){
if(currentItem>imagearray.length){currentItem=0;}
var url1=imageArray[currentItem];
element.style.backgroundImage="url(\""+url1+"\")";





currentItem+=1;
setTimeout(slideShow(element,imagearray,interval));
}
setTimeout(slideShow(element,imagearray,interval));
}
