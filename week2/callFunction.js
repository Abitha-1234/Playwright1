function userProfile(name){
console.log("Hello, " + name +"!")

}userProfile("Abitha");

const double=(number)=>{ //arrow function
    return number *2;
};console.log(double(5));

setTimeout(function(){ //Anonymous function
    console.log("This message is delayed after 2 seconds");
    

},2000);

//callback Function

function getUserData(callback){
    setTimeout(function(){
        let user = {
            name: "Abitha",
            age: 34
        };
        callback(user);

    },2000);
}
    getUserData(function(user){
        console.log("Name:",user.name);
        console.log("Age:",user.age);
        
    });
    

