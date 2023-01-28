// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

let ans = $w('#answer');
let birthdayCNo = $w('#birthdayCNo');
let birthmonthCNo = $w('#birthmonthCNo');

$w('#find').onClick(() => {
    let birthdayCNoValue = birthdayCNo.value;
    let birthmonthCNoValue = birthmonthCNo.value;
    if (birthdayCNoValue == "" || birthmonthCNoValue == "") {
        ans.text = "Please enter both values";
        return;
    }
    let dayPowers = birthdayCNoValue.split(" ");
    let birthday = 0;
    for (let i = 0; i < dayPowers.length; i++) {
        birthday += Math.pow(2, parseInt(dayPowers[i].trim()));
    }
    let monthPowers = birthmonthCNoValue.split(" ");
    let birthMonth = 0;
    for (let i = 0; i < monthPowers.length; i++) {
        birthMonth += Math.pow(2, parseInt(monthPowers[i].trim()));
    }
    switch (birthMonth) {
    case 1:
        if (birthday > 0 && birthday < 32) {
            ans.text = `Your birthday is on ${birthday} January`;
            // console.log(`Your birthday is on ${birthday} January`);
            break;
        } else {
            // console.log("Invalid date");
            ans.text = "Invalid date";
            break;
        }
    case 2:
        if (birthday > 0 && birthday < 29) {
            ans.text = `Your birthday is on ${birthday} February`;
            // console.log(`Your birthday is on ${birthday} February`);
            break;
        } else if (birthday == 29) {
            ans.text = `Your birthday is on ${birthday} February (Leap Year)`;
            // console.log(`Your birthday is on ${birthday} February (Leap Year)`);
            break;
        } else {
            ans.text = "Invalid date";
            // console.log("Invalid date");
            break;
        }
    case 3:
        if (birthday > 0 && birthday < 32) {
            ans.text = `Your birthday is on ${birthday} March`;
            // console.log(`Your birthday is on ${birthday} March`);
            break;
        } else {
            ans.text = "Invalid date";
            // console.log("Invalid date");
            break;
        }
    case 4:
        if (birthday > 0 && birthday < 31) {
            ans.text = `Your birthday is on ${birthday} April`;
            // console.log(`Your birthday is on ${birthday} April`);
            break;
        } else {
            ans.text = "Invalid date";
            // console.log("Invalid date");
            break;
        }
    case 5:
        if (birthday > 0 && birthday < 32) {
            ans.text = `Your birthday is on ${birthday} May`;
            // console.log(`Your birthday is on ${birthday} May`);
            break;
        } else {
            ans.text = "Invalid date";
            // console.log("Invalid date");
            break;
        }
    case 6:
        if (birthday > 0 && birthday < 31) {
            ans.text = `Your birthday is on ${birthday} June`;
            // console.log(`Your birthday is on ${birthday} June`);
            break;
        } else {
            ans.text = "Invalid date";
            // console.log("Invalid date");
            break;
        }
    case 7:
        if (birthday > 0 && birthday < 32) {
            ans.text = `Your birthday is on ${birthday} July`;
            // console.log(`Your birthday is on ${birthday} July`);
            break;
        } else {
            ans.text = "Invalid date";
            // console.log("Invalid date");
            break;
        }
    case 8:
        if (birthday > 0 && birthday < 32) {
            ans.text = `Your birthday is on ${birthday} August`;
            // console.log(`Your birthday is on ${birthday} August`);
            break;
        } else {
            ans.text = "Invalid date";
            // console.log("Invalid date");
            break;
        }
    case 9:
        if (birthday > 0 && birthday < 31) {
            ans.text = `Your birthday is on ${birthday} September`;
            // console.log(`Your birthday is on ${birthday} September`);
            break;
        } else {
            ans.text = "Invalid date";
            // console.log("Invalid date");
            break;
        }
    case 10:
        if (birthday > 0 && birthday < 32) {
            ans.text = `Your birthday is on ${birthday} October`;
            // console.log(`Your birthday is on ${birthday} October`);
            break;
        } else {
            ans.text = "Invalid date";
            // console.log("Invalid date");
            break;
        }
    case 11:
        if (birthday > 0 && birthday < 31) {
            ans.text = `Your birthday is on ${birthday} November`;
            // console.log(`Your birthday is on ${birthday} November`);
            break;
        } else {
            ans.text = "Invalid date";
            // console.log("Invalid date");
            break;
        }
    case 12:
        if (birthday > 0 && birthday < 32) {
            ans.text = `Your birthday is on ${birthday} December`;
            // console.log(`Your birthday is on ${birthday} December`);
            break;
        } else {
            ans.text = "Invalid date";
            // console.log("Invalid date");
            break;
        }
    default:
        ans.text = "Invalid month";
        // console.log("Invalid month");
        break;
    }
});

$w('#reset').onClick(() => {
    birthmonthCNo.value = "";
    birthdayCNo.value = "";
    ans.text = "Can I Guess Your Birthday?"
});
