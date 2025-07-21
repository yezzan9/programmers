const NUMBER = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
}


function solution(s) {
    
    const condition = Object.keys(NUMBER).join('|');
    const regex = new RegExp(condition, "g");

    return parseInt(s.replace(regex, (num) => NUMBER[num]));
}