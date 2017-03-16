(function ($) {
  
    $(document).ready(function () {
        addElementOnAppearList($('.aBoxWillAppearFromLeft'), fromLeft);
        addElementOnAppearList($('.aBoxWillAppearFromRight'), fromRight);
        addElementOnAppearList($('.appearjs'), scaleFromCenter);
        
    
           
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
