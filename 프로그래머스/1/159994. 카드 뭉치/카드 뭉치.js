function solution(cards1, cards2, goal) {
    let j = 0, k = 0;
    
    for (let word of goal) {
        if (cards1[j] === word) {
            j++;
        } else if (cards2[k] === word) {
            k++;
        } else {
            return "No";
        }
    }

    return "Yes";
}