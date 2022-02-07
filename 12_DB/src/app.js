import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1111',
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
  connection.query('CREATE DATABASE IF NOT EXISTS persons', (err) => {
    if (err) throw err;
    connection.query(
      'CREATE TABLE IF NOT EXISTS `persons`.`Street`' +
        ' (`Id` INT AUTO_INCREMENT PRIMARY KEY, `Name` VARCHAR(25))',
      (e) => {
        if (e) throw e;
      },
    );
    connection.query(
      'CREATE TABLE IF NOT EXISTS `persons`.`Person` ' +
        '(`Id` INT AUTO_INCREMENT PRIMARY KEY, `FirstName` VARCHAR(25), ' +
        '`LastName` VARCHAR(50), `Age` INT, `Id_Street` INT)',
      (e) => {
        if (e) throw e;
      },
    );
  });
});

// task 1 Вывести общее число жителей
// квери чейнинг билдер
function task1(connect) {
  const queryText = 'select count(1) as count from `persons`.`Person`';
  connect.query(queryText, (error, result) => {
    if (error) throw error;
    return result;
  });
}

// task 2 Вывести средний возраст жителей
function task2(connect) {
  const queryText = 'select avg(`persons`.`Person`.`age`) as avgAge from `persons`.`Person`';
  connect.query(queryText, (error, result) => {
    if (error) throw error;
    return result;
  });
}

// task 3 Вывести отсортированный по алфавиту список фамилий без повторений
function task3(connect) {
  const queryText =
    'select distinct `Person`.`LastName`  from `persons`.`Person` order by `Person`.`LastName` ASC';
  connect.query(queryText, (error, result) => {
    if (error) throw error;
    return result;
  });
}

// task 4 Вывести список фамилий, с указанием количества повторений этих фамилий в
// общем списке
function task4(connect) {
  const queryText =
    'select `Person`.`LastName`, count(1) as count from `persons`.`Person` group by `Person`.`LastName`';
  connect.query(queryText, (error, result) => {
    if (error) throw error;
    return result;
  });
}

// task 5 Вывести фамилии, которые содержат в середине букву «б»
function task5(connect) {
  const queryText =
    'select `Person`.`LastName` from `persons`.`Person` where `Person`.`LastName` like "%b%"';
  connect.query(queryText, (error, result) => {
    if (error) throw error;
    return result;
  });
}

// task 6 Вывести список «бомжей»
function task6(connect) {
  const queryText = 'select `LastName` from `persons`.`Person` where `Id_Street` is null';
  connect.query(queryText, (error, result) => {
    if (error) throw error;
    return result;
  });
}

// task 7 Вывести список несовершеннолетних, проживающих на проспекте Правды
function task7(connect) {
  const queryText =
    'select `LastName` from `persons`.`Person` ' +
    'inner join `persons`.`Street` on `persons`.`Person`.`Id_Street` = `persons`.`Street`.`Id` ' +
    'where `Age`<18 and `Name`="Pravdi"';
  connect.query(queryText, (error, result) => {
    if (error) throw error;
    return result;
  });
}

// task 8 Вывести упорядоченный по алфавиту список всех улиц с указанием, сколько
// жильцов живёт на улице
function task8(connect) {
  const queryText =
    ' from `persons`.`street` select `Name`, count(`LastName`) as CountPersons' +
    'inner join  `persons`.`Person` on `persons`.`street`.`Id` = `persons`.`Person`.`Id_Street`  ' +
    'group by `Name`';
  connect.query(queryText, (error, result) => {
    if (error) throw error;
    return result;
  });
}

// task 9 Вывести список улиц, название которых состоит из 6-ти букв
function task9(connect) {
  const queryText = 'select `Name` from `persons`.`street` where LENGTH(`Name`)=6';
  connect.query(queryText, (error, result) => {
    if (error) throw error;
    return result;
  });
}

// task 10. Вывести список улиц с количеством жильцов на них меньше 3.
function task10(connect) {
  const queryText =
    'select `Name` ' +
    ' from `persons`.`street` ' +
    'inner join  `persons`.`Person` on `persons`.`street`.`Id` = `persons`.`Person`.`Id_Street`  ' +
    'group by `Name`' +
    'having count(`LastName`)<3';
  connect.query(queryText, (error, result) => {
    if (error) throw error;
    return result;
  });
}
