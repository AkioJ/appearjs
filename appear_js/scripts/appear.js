(function ($) { 
    $(document).ready(function () {
        setInterval( loop, 1000/25 );
    });
})(jQuery);

var appearlist = [];
var disappearlist = [];

function onAppear($element){
    if($element.isAppear == undefined) {
        $element.isAppear = false;
        $element.css("opacity", "0");
    }
    
    if($element.isAppear || !$element.isActionEnd) return;
    
    var topOfElement = $element.position().top + (($element.css("position")=="absolute"||$element.parent().css("position")=="relative")?$element.parent().position().top:0);
 
    if($(this).scrollTop()+window.innerHeight >= topOfElement){
        if($element.callback!=undefined)
            $element.callback($element);
        $element.css("opacity", "1");
        $element.isAppear = true;
    }
}

function onDisappear($element){
    
    if(!$element.isAppear || !$element.isActionEnd) return;
    
    var topOfElement = $element.position().top + (($element.css("position")=="absolute"||$element.parent().css("position")=="relative")?$element.parent().position().top:0);
    
    if($(this).scrollTop()+window.innerHeight < topOfElement){
        if($element.callback!=undefined)
            $element.callback($element);
        $element.css("opacity", "0");
        $element.isAppear = false;
    }
}

function addElementOnAppearList($element, callback, haveToReplay){
    haveToReplay = haveToReplay || false;
    $element.isActionEnd = true;
    $element.callback = callback;
    $element.isAppear = undefined;
    appearlist.push($element);
    
    if(haveToReplay)
        disappearlist.push($element);
}

function loop(){
    
    $.each(appearlist, function(index){
        onAppear(appearlist[index]);
    });
    
    $.each(disappearlist, function(index){
        onDisappear(disappearlist[index]);
    });
}

function onComplete($element){
    if($element==undefined)return;
    
    $element.isActionEnd = true;
}