function StudentScore(inputscore){
    let score=inputscore;
    switch(true){
        case score>=90:
            console.log("Grade A");
            break;
            case score>=80:
            console.log("Grade B");
            break;
            case score>=70:
                console.log("Grade c");
                break;
                default:
                    console.log("Fail");

        

    }

}StudentScore(85);