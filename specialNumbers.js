function specialNumbers(input) {
    let n = Number(input[0]);
    let printLine = "";
    for (let range = 1111; range <= 9999; range++) {
        let numOfRange = "" + range;
        let first = 0;
        let second = 0;
        let third = 0;
        let fourth = 0;

        for (let sym = 0; sym < numOfRange.length; sym++) {
            let y = numOfRange[sym];
            if (sym === 0) {
                first += Number(y);
                first = n % first
            } else if (sym === 1) {
                second += Number(y);
                second = n % second;
            } else if (sym === 2) {
                third += Number(y);
                third = n % third;
            } else if (sym === 3) {
                fourth += Number(y);
                fourth = n % fourth;
            }
        }
        if (first === 0 && second === 0 && third === 0 && fourth === 0) {
            printLine += `${range} `;
        }
        
    }
    console.log(printLine);
}
specialNumbers([16])