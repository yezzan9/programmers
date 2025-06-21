function solution(food) {
    
    let foodlist = [];
    
    for(i=1; i<food.length; i++) {
        for(j=1; j<=food[i]/2; j++) {
            foodlist.push(i);
        }
    }
    
    let left = foodlist.join('');
    foodlist.reverse();   
    let right = foodlist.join('');
    
    const answer = left + 0 + right;
    return answer;
}