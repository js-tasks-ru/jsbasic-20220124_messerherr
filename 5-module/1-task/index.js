function hideSelf() {
    let button = document.querySelector('.hide-self-button'); // сначала обращаемся  кнужному элементу дерева и выбираем нашу кнопку

    button.onclick = function() {
            button.hidden = true;
        }
        // либо короткий вариант записи через стрелочную функцию
        //button.onclick = () => {
        //button.hidden = true;

}