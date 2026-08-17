let str="Hello World";//str.trim removes spaces from the begining and end//split break a sentence there is a space
let word=str.split(" ");//["hello", "world"]
let lastword=word[word.length-1];
console.log(lastword);
console.log(lastword.length);




let str1= "   fly me   to   the moon  ";
let str2=str1.trim();
let words=str2.split(" ");
let lastwords=words[words.length-1];
console.log(lastwords);
console.log(lastwords.length);
