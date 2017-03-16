(function ($) { 
    $(document).ready(function () {
        $(document).on('scroll', onScroll)
    });
})(jQuery);

var list = [];

function onAppear($element, callback){
    
    if($element.isAppear == undefined) {
        $element.isAppear = false;
        $element.css("opacity", "0");
    }
    
    if($element.isAppear) return;
    
    var topOfElement = $element.position().top + (($element.css("position")=="absolute"||$element.parent().css("position")=="relative")?$element.parent().position().top:0);
 
    if($(this).scrollTop()+window.innerHeight >= topOfElement){
        if(callback!=undefined)
            callback($element);
        $element.css("opacity", "1");
        $element.isAppear = true;
    }
}

function addElementOnAppearList($element, callback){
    list.push({
        element:$element,
        callback:callback
    });
}

function onScroll(){
    $.each(list, function(index){
        onAppear(list[index].element, list[index].callback);
    });
}