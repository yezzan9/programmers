function solution(phone_number) {
    
    const last_number = phone_number.slice(-4);
    
    let answer='';
    
    for(i=0;i<phone_number.length-4;i++) {
        answer += '*';
    }
    
    answer += last_number;

    return answer;
    
}