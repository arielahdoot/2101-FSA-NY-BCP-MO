/*
* takes a string, translates it into leetCode, returns the leetCode of that string
   * write a function leetTranslator that takes a str as param
   * create a leetCodex obj as defined in the readMe
   * convert the str into a lowercase string
   * create a result variable and initialize it with an empty string
   * loop over the str 
    * will grab each char of the str, find its corresponding leetCode in leetCodex obj and add that to the result var
   * return the result
*/

function leetTranslator (str) {
    let leetCodex = {};
    for (let i = 0; i < letters.length; i++) {
      let char = letters[i]
      leetCodex[char] = leetChars[i]
    }
    str = str.toLowerCase();
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      result += leetCodex[char];
    }
    return result;
  }
  