function solution(d, budget) {
    
    d = d.sort((a,b) => a-b);
    let answer = 0;
    
    for(let i in d){
        budget -= d[i];
        if(budget >= 0) {
            answer++;
        }
    }
    
    return answer;
}