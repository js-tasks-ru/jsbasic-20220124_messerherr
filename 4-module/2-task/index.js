function makeDiagonalRed(table) {
    //Каждая новая окрашенная ячейка я ряду - это +1 по сравнению со старым рядом

    // для решения рекомендуется использовать свойства rows таблицы (элемент <table>) и cells элемента строки (элемент <tr>).
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];

        //для решения рекомендуется использовать свойства  cells элемента строки (элемент <tr>).
        row.cells[i].style.backgroundColor = "red";
    }
    return table;
}