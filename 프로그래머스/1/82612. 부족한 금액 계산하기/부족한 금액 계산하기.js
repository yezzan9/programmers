function solution(price, money, count) {
    
    for(let i=1 ; i <= count ; i++){
        money -= price*i;  
    }
    
    if(money >= 0) return 0;
    else return money*-1;

}