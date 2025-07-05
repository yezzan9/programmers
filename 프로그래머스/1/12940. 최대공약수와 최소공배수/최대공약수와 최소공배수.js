function solution(n, m) {
    
    max = Math.max(n,m);
    let lcm, gcd;
    
    for(let i = 1; i<max; i++) {
        if(n%i == 0 && m%i == 0) lcm = i;
    }
    
    gcd = n*m/lcm;
    
    return [lcm,gcd];
}