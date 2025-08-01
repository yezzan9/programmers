function getPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num%i == 0) return 0;
    }
    return 1;
}

function solution(n) {
    
    let primes = Array.from({length: n+1}, () => true);
    primes[0] = primes[1] = false;
    
    for(let i = 2; i <= n ; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }
    
    // console.log(primes);
    
    return primes.filter(Boolean).length;
}