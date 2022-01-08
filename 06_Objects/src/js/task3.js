/*. Принимая массив объектов и случайную строку. У объектов может
быть ключ: «title» с разными значениями. Создайте алгоритм, который
фильтрует массив, заданный как первый параметр, и возвращает массив
объектов, которые содержат в своих заголовках заданную строку в
качестве второго параметра (без учета регистра).*/

function findTitle(array, str) {
    return array.filter((item) => {
        if ('title' in item) {
            if (item['title'].toLowerCase().indexOf(str.toLowerCase()) !== -1) {
                return true;
            }
        }
    });
}

module.exports = {findTitle}