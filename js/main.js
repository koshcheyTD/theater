$(document).ready(function () {
    
$('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,

    prevArrow: '<button class="btn btn_slider btn_prev "><img src="/img/prev.svg" alt="prev_arrow"></button>',
    nextArrow: '<button class="btn btn_slider btn_next"><img src="./img/next.svg" alt="next_arrow"></button>',
    })

$('.part_logo').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    
    prevArrow: '<button class="btn btn_slider_part btn_prev_part "><img src="./img/prev_part.svg" alt="prev_arrow"></button>',
    nextArrow: '<button class="btn btn_slider_part btn_next_part"><img src="./img/next_part.svg" alt="next_arrow"></button>',
})
})


const
iconMenu=document.querySelector('.nav_icon_menu');
iconBtn=document.querySelector('.icon_menu');
navMenu=document.querySelector('.nav_menu');


//icon menu
iconBtn.addEventListener('click', () =>{
    if(iconMenu.classList.contains('disp')==true){
        iconMenu.classList.remove('disp');
    } else{
        iconMenu.classList.add('disp');
    }
})

navMenu.addEventListener('click', menuClose)
    function menuClose(){
        if(iconMenu.classList.add('disp')==true){
            iconMenu.classList.remove('disp');
        } 
    }

iconBtn.addEventListener('click', menuTransform)
function menuTransform(e) {
    if (e.preventDefault() !== 'undefined'){};
    iconBtn.classList.toggle('active');
    }
