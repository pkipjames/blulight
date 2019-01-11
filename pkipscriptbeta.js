function makeSlideShow(element,imageArray,interval){try{



var currentItem=0;
function slideShow(element,imageArray,interval){
if(currentItem>imageArray.length){currentItem=0;}
var url1=imageArray[currentItem];
element.style.backgroundImage="url(\""+url1+"\")";





currentItem+=1;
setTimeout(function(){slideShow(element,imageArray,interval);},interval);
}
setTimeout(function(){slideShow(element,imageArray,interval);},interval);
}catch(err){alert("makeSlideShow: "+err);}
}
