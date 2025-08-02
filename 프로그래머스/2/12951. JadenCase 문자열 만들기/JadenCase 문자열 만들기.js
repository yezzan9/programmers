function solution(s) {
    
    const word = s.toLowerCase().split('');
    let isFirst = true;
    
    for(let i in word) {
        if(isFirst) {
            word[i] = word[i].toUpperCase();
            isFirst = false;
        }
        if(word[i] == ' ') isFirst = true;
    }
    
    return word.join('');
}