function solution(ingredient) {

    let hambuger=0;
    let stack=[];
    
    for(i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if(
            stack[stack.length-4] === 1 &&
            stack[stack.length-3] === 2 &&
            stack[stack.length-2] === 3 &&
            stack[stack.length-1] === 1
        ) {
            stack.splice(stack.length-4, 4);
            hambuger++;
        }
    }
    
    return hambuger;
}