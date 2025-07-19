function solution(arr)
{
    const answer = [];
    let i = 0;
    
    while(i < arr.length) {
        if(arr[i] !== arr[i+1] || i == arr.length){
            answer.push(arr[i]);
        }
        i++
    }
        
    return answer;
}