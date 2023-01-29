// Filename: public/mind-reading-bgg.js
// Code written in public files is shared by your site's
// Backend, page code, and site code environments.
// The following code demonstrates how to call the add
// function from your site's page code or site code.
/*
import {add} from 'public/mind-reading-bgg.js'
$w.onReady(function () {
    let sum = add(6,7);
    console.log(sum);
});
*/
// This function takes selected input fields are arguments and returns a string having users birthday or INVALID DATE for wrong user INPUT
export function findBirthday(birthdayInput, birthmonthInput) {
    let birthdayCardNumbers = birthdayInput.value.trim();
    let birthmonthCardNumbers = birthmonthInput.value.trim();
    if (birthdayCardNumbers == "" || birthmonthCardNumbers == "") {
        return 'Please enter both values';
    }
    let dayPowers = birthdayCardNumbers.split(" ");
    let birthday = 0;
    for (let i = 0; i < dayPowers.length; i++) {
        birthday += Math.pow(2, parseInt(dayPowers[i].trim()));
    }
    let monthPowers = birthmonthCardNumbers.split(" ");
    let birthMonth = 0;
    for (let i = 0; i < monthPowers.length; i++) {
        birthMonth += Math.pow(2, parseInt(monthPowers[i].trim()));
    }
    switch (birthMonth) {
    case 1:
        if (birthday > 0 && birthday < 32) {
            return`Your birthday is on ${birthday} January`;
        } else {
            return "Invalid date";
        }
    case 2:
        if (birthday > 0 && birthday < 29) {
            return `Your birthday is on ${birthday} February`;
        } else if (birthday == 29) {
            return `Your birthday is on ${birthday} February (Leap Year)`;
        } else {
            return "Invalid date";
        }
    case 3:
        if (birthday > 0 && birthday < 32) {
            return `Your birthday is on ${birthday} March`;
        } else {
            return "Invalid date";
        }
    case 4:
        if (birthday > 0 && birthday < 31) {
            return `Your birthday is on ${birthday} April`;
        } else {
            return "Invalid date";
        }
    case 5:
        if (birthday > 0 && birthday < 32) {
            return `Your birthday is on ${birthday} May`;
        } else {
            return "Invalid date";
        }
    case 6:
        if (birthday > 0 && birthday < 31) {
            return `Your birthday is on ${birthday} June`;
        } else {
            return "Invalid date";
        }
    case 7:
        if (birthday > 0 && birthday < 32) {
            return `Your birthday is on ${birthday} July`;
        } else {
            return "Invalid date";
        }
    case 8:
        if (birthday > 0 && birthday < 32) {
            return `Your birthday is on ${birthday} August`;
        } else {
            return "Invalid date";
        }
    case 9:
        if (birthday > 0 && birthday < 31) {
            return `Your birthday is on ${birthday} September`;
        } else {
            return "Invalid date";
        }
    case 10:
        if (birthday > 0 && birthday < 32) {
            return `Your birthday is on ${birthday} October`;
        } else {
            return "Invalid date";
        }
    case 11:
        if (birthday > 0 && birthday < 31) {
            return `Your birthday is on ${birthday} November`;
        } else {
            return "Invalid date";
        }
    case 12:
        if (birthday > 0 && birthday < 32) {
            return `Your birthday is on ${birthday} December`;
        } else {
            return "Invalid date";
        }
    default:
        return "Invalid month"
    }
}

// This function resets the values of the input fields and the answer
export function reset(birthdayInput, birthmonthInput, answer) {
    birthdayInput.value = '';
    birthmonthInput.value = '';
    answer.text = 'Can I Guess Your Birthday?';
}
