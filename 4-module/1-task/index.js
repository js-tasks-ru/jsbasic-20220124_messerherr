function makeFriendsList(friends) {

    let ul = document.createElement('ul'); // Создание списика типа UL

    for (let item of friends) {
        let li = document.createElement('li'); // Создание элемента списка
        li.innerHTML = `${item.firstName} + ${item.lastName}`;
        ul.appendChild(li); //Добавляет node в конец дочерних элементов parentElem.
    }
    return ul;
}