function equalSumsEvenOddPosition(input) {
    let start = input[0];
    let end = input[1];
    let printLine = "";

    for(let startNum = start; startNum <= end; startNum++) {
        startNum = "" + startNum;
        let evenNum = 0;
        let oddNum = 0;
        for(let i = 0; i <= 5; i++) {
            let nums = Number(startNum[i]);
            if(i % 2 === 0) {
                evenNum += nums;
            } else {
                oddNum += nums
            }
        }
        if(evenNum === oddNum) {
            printLine += `${startNum} ` ;
        } 
    }
    console.log(printLine);
}
equalSumsEvenOddPosition(["100000",
"100050"]);
