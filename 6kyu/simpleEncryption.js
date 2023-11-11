//воплоти в жизнь псевдо шифровательный алгоритм который дает строку S и целое число N, соединяет все символы которые стоят на четном индексе строки S со всеми символами с нечетных
//идексов строки S. Этот процесс должен повторяться N раз.

//Вместе с шифровальной функцией ты должен также воплотить в жизнь расшифровательную функцию которая возвращает процесс.
//Если строка S пустая или целое число N не положительное, возвращай первый аргумент без изменений.

//Сначала нечетные/потом четные

function encrypt(text, n) {
    if (!text || n <= 0) {
      return text;
    }
    let cipher = text;
    while(n--) {
      const odd = []
      const even = []
      cipher.split('').map((n, i) => i % 2 === 0 ? even.push(n) : odd.push(n))
      cipher = odd.concat(even).join('') 
    }
    return cipher
  }

  function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) {
      return encryptedText;
    }
    let text = encryptedText.split("");
  
    while (n--) {
  
      let originalText = [];
      let startIndex = 0;
      const textLength = text.length;
  
      if (textLength % 2 === 0) {
        for (let i = textLength / 2; i < textLength; i++) {
          originalText.push(text[i]);
          originalText.push(text[startIndex]);
          startIndex += 1;
        }
      } else {
        for (let i = Math.floor(textLength / 2); i < textLength; i++) {
          if (i === textLength - 1) {
            originalText.push(text[i]);
          } else {
            originalText.push(text[i]);
            originalText.push(text[startIndex]);
            startIndex += 1;
          }
        }
      }
      text = originalText;
    }
  
    return text.join("");
  }
