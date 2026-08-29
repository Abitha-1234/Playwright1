function factorial(n:number){
    if(n<0){
        throw new Error("Factorial is new error")    
    }
    let result = 1;
    for(let i=2;i<=n;i++){
        result=result*i;
    }return result;                  /*easy remember function--->check negative-->result--->loop-->return*/
}console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(0));
console.log(factorial(-3));




