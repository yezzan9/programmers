function solution(s) {
    
    const str = [...s];
    
    return str.sort().reverse().join('');
}