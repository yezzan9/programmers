function solution(n) {
    arr = [...String(n)];
    console.log(arr);
    arr.sort((a,b) => b-a);
    
    answer = arr.join('');
    return Number(answer);
}