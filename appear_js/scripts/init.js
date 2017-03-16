(function ($) {
  
    $(document).ready(function () {
        addElementOnAppearList($('.aBoxWillAppearFromLeft'), fromLeft, true);
        addElementOnAppearList($('.aBoxWillAppearFromRight'), fromRight, true);
        addElementOnAppearList($('.appearjs'), scaleFromCenter);
        
        $.each($(".list").children(),function(){
            addElementOnAppearList($(this), scaleFromCenter, true);
        });
        TweenMax.fromTo($("i"),1,
        {
            css:{scale:"0.8"}
        }, 
        {
            css:{scale:"1"}
            ,repeat: -1
            ,yoyo:true
            
        });
    });
    
})(jQuery);
