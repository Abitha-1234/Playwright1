let pal="malayalam";
function revStr(){
let pal1=pal.split(""); 
let rev="";
for(let i=pal1.length-1; i>=0;i--){
    rev=rev+pal1[i];
}console.log(rev);
return rev;
}
function isPalindrome(){
    let rev=revStr();
    if(rev===pal){
        console.log('It is palindrome ');
        ;
    }else{
        console.log(('It is not palindrom'));
        ;
    }
    }isPalindrome()





