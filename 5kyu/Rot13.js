//Рот13 это простой шифр с заменой букв который меняет букву другой буквой через 13 букв после нее в алфавите. Рот13 это пример цифра Цезаря. 
//Создайте функцию которая получает строку и возвращает зашифрованную рот13 строку. Если есть число или спецсимвол включенный в строке, он  должны быть возвращены как они есть. Только буквы из латинского/английского алфавита должны быть зашифрованы, как в оригинальной реализации рот13. 

function rot13(message){
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, letter => cipher[alphabet.indexOf(letter)])
  }

const rot132 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));