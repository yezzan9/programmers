function solution(x, n) {
    
    let cnt = 0;
    const answer = [x,];
    
    while (1) {
        cnt++;
        if(cnt == n) break;
        answer.push(answer.at(-1) + x);
    }
  
    return answer;
}