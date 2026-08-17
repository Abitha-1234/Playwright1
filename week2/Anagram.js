const { log } = require("node:console");//split-->sort---->join--->compare
let str="listen";
let str1="silent";
function isAnagram(str,str1){
    let arr1=str.split("");         
    let arr2=str1.split("");
arr1.sort();
arr2.sort();

let word1=arr1.join("");
let word2=arr2.join("");
if(word1===word2){
    console.log("It is anagram");
    
}else{
    console.log("It is not anagram");
}

}isAnagram(str,str1);
