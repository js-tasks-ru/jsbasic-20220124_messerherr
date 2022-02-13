//список объектов переделываем в массив

function namify(users) {
    return users.map(function(item) { //используем метод map; он пробегается по всем объектам и ищет только ключ "имя" (item.name)
        //  или по users.map  в скобках написать (item => item.name)
        return item.name; // просим вернуть имена из заявленного списка и поставить в массив

        //return users.map(item => item.name) - либо более короткая стрелочная функция
    })
}