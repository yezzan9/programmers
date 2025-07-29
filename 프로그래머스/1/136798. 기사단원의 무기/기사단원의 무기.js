function getMeasure(num) {
    const measure = [];

    for (let i = 1; i <= num; i++) {
        let cnt = 0;
        const sqrt = Math.floor(Math.sqrt(i));

        for (let j = 1; j <= sqrt; j++) {
            if (i % j === 0) cnt += (j * j === i) ? 1 : 2
        }
        measure.push(cnt);
    }
    
    return measure;
}

function solution(number, limit, power) {
    
    const measure = getMeasure(number);
    
    let sum = 0;
    
    for(let i in measure) {
        if(measure[i] > limit) sum += power;
        else sum += measure[i];
    }
    
    return sum;
}