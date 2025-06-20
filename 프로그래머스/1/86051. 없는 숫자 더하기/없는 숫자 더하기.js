function solution(numbers) {
    
    const cnt = [0,0,0,0,0,0,0,0,0,0];
    let answer = 0;
    
    for(i=0;i<numbers.length;i++) {
        for(j=0;j<=9;j++){
            if(numbers[i] == j)
               cnt[j] = 1;
        }
    }
    
    for(i=0;i<=9;i++){
        if(cnt[i] == 0){
            answer += i;
        }
    }
    
    // console.log(cnt)
    
    return answer;
}