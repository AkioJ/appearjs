function fromLeft($element){
    var position = $element.css("position");
    $element.css("position", "relative");
    
    var parentOverflow = $element.parent().css("overflow");
    $element.parent().css("overflow", "hidden");
    
    var finalValue = $element.position().left-$element.parent().css("marginLeft").replace('px', '')+"px";
    TweenMax.fromTo($element,1,
    {
        css:{
            left:-$element.width()*1.5
        }
    }, 
    {
        css:{
            left:finalValue, 
        },
        ease:Power2.easeOut,
        onComplete:function(){
            $element.parent().css("overflow", parentOverflow);
            $element.css("position", position);
        }
    });
}

function fromRight($element){
    var position = $element.css("position");
    $element.css("position", "relative");
    
    var parentOverflow = $element.parent().css("overflow");
    $element.parent().css("overflow", "hidden");
    
    var finalValue = $element.css("right");

    TweenMax.fromTo($element,1,
    {
        css:{
            right:-$element.width()*1.5
        }
    }, 
    {
        css:{
            right:finalValue, 
        },
        ease:Power2.easeOut,
        onComplete:function(){
            $element.parent().css("overflow", parentOverflow);
            $element.css("position", position);
        }
    });
}

function scaleFromCenter($element){
    TweenMax.fromTo($element,1,
    {
        css:{
            scale:0
        }
    }, 
    {
        css:{
            scale:1
        },
        ease:Power2.easeOut
    });
}