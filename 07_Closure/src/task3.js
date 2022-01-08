/*Создайте функцию, которая получает два аргумента: первый -
это массив объектов, второй - строка (имя автора). Ваша
функция должна возвращать количество сообщений с автором из
аргумента функции и комментариев с тем же автором. Пример
массива:*/

function getQuntityPostsByAuthor(listOfPosts, nameAuthor) {
    let countMessages = 0;
    let countComments = 0;

    listOfPosts.forEach((item) => {
        if (item['author'] === nameAuthor) {
            countMessages = countMessages + 1
        }
        if (item.hasOwnProperty('comments')) {
            item['comments'].forEach((elem) => {
                if (elem['author'] === nameAuthor) {
                    countComments = countComments + 1;
                }
            })
        }
    })
    return [countMessages, countComments];
}

module.exports ={getQuntityPostsByAuthor}
