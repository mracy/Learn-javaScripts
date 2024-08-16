function mobileBanking(message){
    console.log(`This is notification: ${message}`);
}

function incomming(){
    mobileBanking("My account is credited");
}

function outgoing(){
    mobileBanking("Bill is paid");
}

incomming();
outgoing();

/////


let value = 1;

function doSomething(callBack){
    callBack();
}

doSomething(() =>{
    value = 2;
});

console.log(value);

