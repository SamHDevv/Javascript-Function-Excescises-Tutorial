
   const rapid = (word) => {
    let vocals = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    let finalWord = "";
    for (let i = 0 ; i <word.length; i++) {
        if (vocals.includes(word[i])) {
            finalWord += "";
        } else {
            finalWord += word[i];
        }
    }
    return finalWord.toUpperCase();
   }
   
   let str = "John";
   console.log(rapid(str))