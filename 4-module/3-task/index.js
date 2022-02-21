function highlight(table) {

    //Нужно правильно обратиться к необходимому разделу в HTML
    for (let row of table.tBodies[0].rows) {

        //Рассуждение:
        //В задаче есть условие "если......, то...."  Обращаемся к IF

        //Добавить класс можно через метод classList.add(),

        // Условие №1 Доступность перподавателя
        if (row.cells[3].dataset.available === "true") { // Отчет индекса ячейки также идет с 0   - потому cells[3] соответсвует ячейке "доустпе/недоступен"
            row.classList.add("available");
        } else if (row.cells[3].dataset.available === "false") {
            row.classList.add("unavailable");
        } else {
            row.hidden = true;
        }
        // Условие №2 ПОЛ
        if (row.cells[2].innerText === "m") {
            row.classList.add("male");
        } else if (row.cells[2].innerText === "f") {
            row.classList.add("female");
        }
        // Условие №3 Возрастной ценз
        //Функция parseInt преобразует первый переданный ей аргумент в строковый тип,
        //интерпретирует его и возвращает целое число или значение NaN.
        if (parseInt(row.cells[1].innerHTML) < 18) {
            //Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки.
            row.style.textDecoration = "line-through";
        }
    }
}