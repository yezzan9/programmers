function solution(array, commands) {
    
    let newArray;
    const answer = [];
    
    for (let i in commands){
        newArray = array.slice(commands[i][0]-1,commands[i][1]);
        newArray.sort((a,b) => (a-b));
        answer.push(newArray[commands[i][2]-1]);
    }
    
    return answer;
}