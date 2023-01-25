function trainTheTrainers(input) {

    let index = 0;
    let jurys = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let tempAvgGrade = 0;
    let counterGrade = 0;

    while (command !== "Finish") {
        let avgGrade = 0;
        for (let n = 0; n < jurys; n++) {
            let grade = Number(input[index]);
            index++;
            avgGrade += grade;
            tempAvgGrade += grade;
            counterGrade++;
        }
        console.log(`${command} - ${(avgGrade / jurys).toFixed(2)}.`);
        command = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(tempAvgGrade / counterGrade).toFixed(2)}.`);
}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

