let testExecutionSummary={
    suiteName: 'Test',
    totalTests: 6,
     passedTests:4,
      failedTests:2,
      executionTime: 50000

} ;
console.log(testExecutionSummary.suiteName);
console.log(testExecutionSummary.totalTests);
console.log(testExecutionSummary.passedTests);
console.log(testExecutionSummary.failedTests);
console.log(testExecutionSummary.executionTime);
let passPercentage=(testExecutionSummary.passedTests / testExecutionSummary.totalTests)*100
console.log("Pass Percentage:"+passPercentage + "%");
if(testExecutionSummary.failedTests===0){
    console.log("Execution Successful");
    }else{
        console.log("Execution Completed with Failures");
        
    }



