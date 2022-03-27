function toggleText() {
    let clickBtn = document.querySelector(".toggle-text-button"); // ссылаемся на кнопку, которую нам нужно нажать
    let text = document.querySelector("#text"); // ссылаемся на текст, который должен исчезнуть

    clickBtn.addEventListener("click", handler);

    function handler() {
        text.hidden = !text.hidden;
    }
}