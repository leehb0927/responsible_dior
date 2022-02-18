$(function(){

    $(window).scroll(function(){
        $('header').addClass('scroll');
        if($(window).scrollTop() == 0){
            $('header').removeClass('scroll');
        }
        
    });
    $(".trigger").click(function(){
        $(".trigger").toggleClass('open');
        if( $(this).hasClass('open')){
            $('nav').fadeIn();
            $('body').css({"overflow":"hidden"});
        } else {
            $('nav').fadeOut();
            $('body').css({"overflow":"scroll"});
        }
    });
    $(window).resize(function(){
        if( $(window).width() > 767 ){      
            $('nav').removeAttr('style');
        }

    });





});

window.addEventListener("load",() => {
    const grid = new Isotope( "section", {
        // options
        itemSelector: 'article',
        colunmWidth:"article",
        transitionDuration: '0.5s' //화면 재배치시 요소가 움직이는 속도
    });




    //filter
    const btn = document.querySelectorAll('.btns li');
    
    
    for(let el of btn){
        el.addEventListener("click",e => {
            e.preventDefault();

            for(let el of btn){
                el.classList.remove('on');
            }

            e.currentTarget.classList.add('on');

            const sort = e.currentTarget.querySelector('a').getAttribute('href');
            console.log(sort);


            grid.arrange({
                filter: sort
            })
        });
    }

});

