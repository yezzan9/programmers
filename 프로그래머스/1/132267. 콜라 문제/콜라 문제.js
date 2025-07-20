function solution(a, b, n) {
    
    // a: 빈병
    // b: 돌려주는
    // n: 가져다 준 병
    
    let coke = 0;
    let newCoke = 0;
    let remain = 0;
    
    while(1) {
        newCoke = Math.floor(n/a) * b;
        console.log("newcoke", newCoke);
        remain = n%a;
        console.log("remain", remain);
        coke += newCoke;
        n = newCoke + remain;
        
        console.log(n, coke);

        
        if(n < a) break;
    }

    return coke;
}