module.exports = function check(str, bracketsConfig) {
  // если количество brackets нечетное - сразу false
  if (str.length % 2 != 0) {
    return false;
  }
  // создаем стек и начинаем перебор по str
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    // сверяем каждый элемент str с конфигом
    for (let j = 0; j < bracketsConfig.length; j++) {
      // если открывающий и закрывающий символы совпадают
      // если есть в стеке - поп, если нет - добавляем
      if (bracketsConfig[j][0] == str[i] && bracketsConfig[j][0] == bracketsConfig[j][1]) {
        if (bracketsConfig[j][0] === stack[stack.length - 1]) {
          stack.pop();
          break;
        }
        else {
          stack.push(str[i])
          break;
        }
      }
      // если символ однозначно открывающий добавляем его в стек
      else if (bracketsConfig[j][0] == str[i]) {
        stack.push(str[i])
        break;
      }
      // если символ однозначно закрывающий пытаемся закрыть последний элемент стека
      // если неудачно то можно сразу вернуть false 
      else if (bracketsConfig[j][1] == str[i]) {
        if (bracketsConfig[j][0] === stack[stack.length - 1]) {
          stack.pop();
          break;
        }
        else {
          return false;
        }
      }
    }
  }
  // если по итогу манипуляций стек остался пустой значит все ок
  if (stack.length == 0) {
    return true;
  }
  // иначе вернуть false
  else {
    return false;
  }
}
