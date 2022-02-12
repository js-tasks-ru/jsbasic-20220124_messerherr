function camelize(str) {
    return str
        .split('-') // разделяем на отдельные слова
        .map(
            function(word, index) {
                return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
            }
        )
        .join('') // позволяет объединить слова
}
