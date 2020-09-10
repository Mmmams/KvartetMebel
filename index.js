$(document).ready(function (){
    let open_modal = $('.menu_btn');
    // let close = $('.nav_mobile');
    let menu = $('.nav_menu');
    let checker = true;
    open_modal.click(function (event){
        if(checker == true){
        menu.css('display', 'block').animate({opacity:1,right: '5%'},500);
        checker = false;
        }else if(checker == false){
            menu.animate({opacity: 0, right: '0%'}, 500);
            setTimeout(()=>menu.css('display', 'none'),500);
            checker = true;
        }
    })
    close.click(function (event){
        menu.animate({opacity: 0, right: '0%'}, 500);
       setTimeout(()=>menu.css('display', 'none'),500);
       checker = true;
    })
})

