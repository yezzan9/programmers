function solution(name, yearning, photo) {
    
    let answer = Array.from({length: photo.length}, () => 0);
    let index;
    
    for(let i in photo) {
        for (let j = 0 ; j < photo[i].length ; j++) {
            index = name.findIndex((element) => element == photo[i][j]);
            if(index >= 0) answer[i] += yearning[index];
        }
    }

    return answer;
}