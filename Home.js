// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import {findBirthday, reset} from 'public/mind-reading-bgg.js';
let birthdayInput = $w('#birthdayInput');
let birthmonthInput = $w('#birthmonthInput');
let ans = $w('#answer');

$w('#findBirthday').onClick(() => {
    let answer = findBirthday(birthdayInput, birthmonthInput);
    ans.text = answer;
});

$w('#reset').onClick(() => {
    reset(birthdayInput, birthmonthInput, ans);
});
