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
    for(i=0; i<uniqueSum.length; i++) {
        for(j=0; j<uniqueSum.length; j++) {
            let temp;
            if(uniqueSum[j]>uniqueSum[j+1]){
                temp = uniqueSum[j];
                uniqueSum[j] = uniqueSum[j+1];
                uniqueSum[j+1] = temp;
            }
        }
    }
    
    return uniqueSum;
}