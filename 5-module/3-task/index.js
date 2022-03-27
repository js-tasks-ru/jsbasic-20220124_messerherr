function initCarousel() {


    // Задаем переменные
    let slideShow = 0;
    let carouselInner = document.querySelector(".carousel__inner"); // определяем ширину окна слайдера
    let sliderWidth = carouselInner.offsetWidth;
    let btnLeft = document.querySelector(".carousel__arrow_left");
    let btnRight = document.querySelector(".carousel__arrow_right");
    btnLeft.style.display = 'none';

    //

    btnRight.addEventListener("click", function() {
        slideShow++;
        carouselInner.style.transform = `translateX(-${sliderWidth*slideShow}px)`; // (-${sliderWidth*slideShow}) - для вычесления вставляем переменные
        if (slideShow === 3) {
            btnRight.style.display = 'none';
        } else {
            btnRight.style.display = '';
        }
    });

    btnLeft.addEventListener("click", function() {
        slideShow--;
        carouselInner.style.transform = `translateX(-${sliderWidth*slideShow}px)`; // (-${sliderWidth*slideShow}) - для вычесления вставляем переменные
        if (slideShow === 0) {
            btnLeft.style.display = 'none';
        } else {
            btnLeft.style.display = '';
        }
    });



}
