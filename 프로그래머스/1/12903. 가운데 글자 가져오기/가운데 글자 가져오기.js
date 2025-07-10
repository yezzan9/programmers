function solution(s) {
    
    const center = Math.floor(s.length/2); // 2
    
    let answer = s[center];
        
    if(s.length%2 == 0) answer = s[center-1] + answer;
    
    return answer;
}