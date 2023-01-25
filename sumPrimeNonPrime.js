function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
 
    let counterPrime = 0;
    let counterNonPrime = 0;
 
 
    while (command !== "stop") {
        let num = Number(input[index]);
        let isPrime = false;
        if (num < 0) {
            console.log(`Number is negative.`)
        }
        for (let n = 2; n < num; n++) {
            if (num % n === 0){
                counterNonPrime += num;
                isPrime = true;
                break;
            } 
        }
        if(!isPrime && num >= 0) {
            counterPrime += num;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${counterPrime}`);
    console.log(`Sum of all non prime numbers is: ${counterNonPrime}`);
}
sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])



