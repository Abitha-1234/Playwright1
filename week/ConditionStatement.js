function launchBrowers(browserName){
    
    if(browserName=='chrome'){
        console.log('launch chrome');
    }else{
        console.log('dont lunch it');
    }

}launchBrowers();
function runTest(){
    let testType='sanity';
    switch(testType){
        case testType='smoke':
            console.log('running smoke test');
            break;
            case testType='sanity':
                console.log('running sanity test');
                break;
                case testType='regression':
                    console.log('running regression test');
                    break;
                    default:
                        console.log('running smoke test');
                        break;

    }
    

}runTest();