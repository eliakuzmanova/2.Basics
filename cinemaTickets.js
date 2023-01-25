function cinemaTickets(input) {

    let index = 0;
    let command = input[index];

    let kidCounter = 0;
    let studentCounter = 0;
    let standardCounter = 0;
    let fullSumOfTickets = 0;

    while (command !== "Finish") {
        command = input[index];
        index++;
        let freeSpace = Number(input[index]);
        index++;
        let numOfFreeSpace = freeSpace;
        let allTickets = 0;
        let tickets = input[index];
        while ( tickets !== "End") {
            tickets = input[index];
            index++;
            switch (tickets) {
                case "kid":
                    kidCounter++;
                    break;
                case "student":
                    studentCounter++;
                    break;
                case "standard":
                    standardCounter++;
                    break;
            }
            if (tickets !== "End") {
                allTickets++;
            }
            numOfFreeSpace--;
            if (numOfFreeSpace === 0) {
                break;
            }
        }
        fullSumOfTickets += allTickets;
        let percentageFreeSpace = allTickets / freeSpace * 100;
        console.log(`${command} - ${percentageFreeSpace.toFixed(2)}% full.`);
        command = input[index];
    }
    console.log(`Total tickets: ${fullSumOfTickets}`);
    console.log(`${(studentCounter / fullSumOfTickets * 100).toFixed(2) }% student tickets.`);
    console.log(`${(standardCounter / fullSumOfTickets * 100).toFixed(2) }% standard tickets.`);
    console.log(`${(kidCounter / fullSumOfTickets * 100).toFixed(2) }% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

