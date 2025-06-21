function solution(numbers) {
    
    // 반복해서 모든 경우의 수를 만들고
    let sum = [];
    
    for(i=0; i<numbers.length; i++) {
        for(j=i+1; j<numbers.length; j++) {
            sum.push(numbers[i] + numbers[j]);            
        }
    }

    // 중복 제거
    const uniqueSum = [...new Set(sum)];    

    // 정렬
    const answer = uniqueSum.sort((a, b) => a - b);
    
    return answer;
}