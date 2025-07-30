function solution(s) {
    
    const word = s.split('');
    let j = 0;
    let formattedWord = '';
    
    for(let i in word) {
        console.log(j, word[i]);
        if(word[i] == " ") {
            j = 0;
            console.log('j=0?', j);
            formattedWord += " ";
            continue;
        }
        
        if(j%2==0) formattedWord += word[i].toUpperCase();
        else formattedWord += word[i].toLowerCase();
        j++;
    }
    
    return formattedWord;
}