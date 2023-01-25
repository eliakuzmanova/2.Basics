function numberPyramid(input) {

    let num = Number(input[0]);
    let curNum = 0;
    let isFound = false

    for(let row = 1; row <= num; row++) {
        let printLine = "";
        for (let i = 1; i <= row; i++) {
            curNum++;
            printLine += `${curNum} `
            if (curNum === num) {
                isFound = true;
                break;
            }
        }
        console.log(printLine);
        if(isFound === true) {
            break;
        }
    }
} 
numberPyramid([7]);