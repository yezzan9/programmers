function solution(arr) {
        
    const min = Math.min(...arr);
    arr.splice(arr.indexOf(min),1);
    
    return arr.length == 0 ? [-1] : arr;
}