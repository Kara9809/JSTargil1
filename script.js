


function targil1() {
    // let userInput1 = +prompt("Please insert your guess number 1 - 100");
    // let userInput2 = parseInt(prompt("Please insert your guest number 1 - 100"));
    let userInput1 = Number(prompt("Please insert your guest number 1 - 100"));
    console.log(userInput1)
    if (userInput1 > 50) {
        alert("Big")
    } else if (userInput1 < 50) {
        alert("Small")
    } else {
        alert("Bingo")
    }
}

function targil2(){
    let userInput2 = Number(prompt("Please insert a year"));
    console.log(userInput2)
    if((userInput2 % 400 == 0) ||
       (userInput2 % 100 != 0) && 
       (userInput2 % 4 == 0))
    {
        alert(userInput2 + " is a leap year");
    }
    else
    {
        alert(userInput2 + " is not a leap year");
    }
}

function targil3(){
    let userMonth = Number(prompt("Please insert a month"));
    let userYear = Number(prompt("Please insert a Year"));
    console.log(userMonth, userYear)
    if (userMonth == 1 || userMonth == 3 || userMonth == 5 || userMonth == 7 || userMonth == 8 || userMonth == 10 || userMonth == 12) {
        alert("31 days");
    } else if (userMonth == 4 || userMonth == 6 || userMonth == 9 || userMonth == 11) {
        alert("30 days");
    } else if (userYear % 4 == 0 && userYear % 100 != 0 || userYear % 400 == 0) {
        alert("29 days");
    } else {
        alert("28 days");
    }
}

function targil4(){
    let userInputX = Number(prompt("Please insert a smaller number"));
    let userInputY = Number(prompt("Please insert second - a bigger number"));
    console.log(userInputX, userInputY)
    if(userInputY<userInputX || userInputX<0 || userInputY<0){
        alert("Invalid input, please try again.")
    }
    let numbers = []
    for (var i = userInputX; i <= userInputY; i++) {
        numbers.push(i);
      }
      alert(numbers)
}

function targil5(){
    let num = Math.floor(Math.random() * 100_001) // 0 - 100.000
    let origin=num;
    console.log(origin) 
    alert("Number :"+num);
    let opposite=0;
    while (num>1) {
        opposite = opposite * 10 + num % 10;
        num = parseInt(num / 10);
        }
    alert("opposite :"+parseInt(opposite));
    if (origin==opposite) {
        alert("Palindrome");
        }else{
        alert("Not a Palindrome");
}
}

function targil6(){
    let num = Math.floor(Math.random() * 100_001) // 0 - 100.000
    let origin = num;
    console.log(origin) 
    let count = 0;
    let sum = 0;
    let opposite = 0;
    let tempNum = num; // Store num in a temporary variable
    while (num>10) {
        num/=10;
    }
    alert("Number is: " + origin + " The right digit is : " + origin % 10 + " and the Left digit is: " + parseInt(num));
    while(tempNum > 0) {
        count++;
        sum += tempNum % 10;
        opposite = opposite * 10 + tempNum % 10;
        tempNum = parseInt(tempNum / 10);
    }
    alert("count: " + count);
    alert("sum: " + sum);
    alert("opposite: " + opposite);
    if (origin == opposite) {
        alert("Palindrome");
    } else {
        alert("Not a Palindrome");
    }
}

function targil7(){
    // Initialize array with the first 15 Fibonacci numbers
    let fibonacciArray = [0, 1];
    for (let i = 2; i < 15; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }

    alert("Fibonacci Array: [" + fibonacciArray + "]");

    let sumEven = 0;
    let sumOdd = 0;
    for (let num of fibonacciArray) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }

    alert("Sum of even numbers: " + sumEven);
    alert("Sum of odd numbers: " + sumOdd);

    if (sumEven > sumOdd) {
        alert("Sum of even numbers is greater.");
    } else if (sumOdd > sumEven) {
        alert("Sum of odd numbers is greater.");
    } else {
        alert("Sum of even and odd numbers are equal.");
    }
}

function targil8(){
    let arr = [1, 2, 5, 1, 6, 1, 5, 4, 8];
    alert("The array is: [" + arr + "]");
    let maxNum = arr[0]; // Initialize maxNum with the first element of the array
    let minNum = arr[0]; // Initialize minNum with the first element of the array
    let countOnes = 0; // Initialize countOnes to count the occurrences of the number 1

    for (let i = 0; i < arr.length; i++) {
        // Find the maximum number
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
        // Find the minimum number
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
        // Count the occurrences of the number 1
        if (arr[i] === 1) {
            countOnes++;
        }
    }

    alert ("After sorthing, the array is: [" + [maxNum, minNum, countOnes] + "]");
}

function targil9(){
    let userInputLength = Number(prompt("PLease insert a rows"));
    let squareString = '';
    console.log(userInputLength);
    for (let i = 0; i < userInputLength; i++) {
        let row = '';
        for (let j = 0; j < userInputLength; j++) {
            if (i === 0 || i === userInputLength - 1 || j === 0 || j === userInputLength - 1) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        squareString += row + '\n';
    }
    alert(squareString);
}

function targil10() {
    let now = new Date();
    
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    let timeString = hours + ':' + minutes + ':' + seconds;

    alert("Current time: " + timeString);
}

