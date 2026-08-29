function fibonacci(n:number){
    let a=1;
    let b=2;
    for(let i=3;i<=n;i++){
        let next=a+b;
        a=b;
        b=next
    }
return(b);
}console.log(fibonacci(5));
console.log(fibonacci(7));