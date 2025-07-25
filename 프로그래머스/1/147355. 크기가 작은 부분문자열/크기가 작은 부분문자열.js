function solution(t, p) {
    
    const n = p.length;
    let cnt = 0;
    
    for(let i = 0 ; i <= t.length-n ; i++) {
        if(t.substr(i,n) <= p) cnt++;
    }
    
    return cnt;
}