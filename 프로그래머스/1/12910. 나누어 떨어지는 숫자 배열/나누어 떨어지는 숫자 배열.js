function solution(arr, divisor) {
    
    let answer = [];

    for(let i in arr){
        if(arr[i] % divisor == 0) answer.push(arr[i]);
    }
    
    if(answer.length == 0) return [-1];
    
    answer = answer.sort((a,b) => (a-b));
    
    return answer;
}