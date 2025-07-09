function solution(a, b) {
    const day = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    const month = [,31,29,31,30,31,30,31,31,30,31,30,31];
    
    let answer = b;
        
    for(let i = 1; i < a ; i++){
        answer += month[i];
    }
    
    return day[answer%7];
}