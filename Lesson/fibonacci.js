/*
*
* Example Fibonacci Algorithm
*
*/

/* recursion solution 2^N time complexity */

let fiborecursion = (num) => {
    if(num===0) return 0;
    if(num===1) return 1;

    return fiborecursion(num-1) + fiborecursion(num-2);
}

/* DP using Memoization O(N) */

let fibomemoi = (num) => {
    memo = memo || {};

    if(memo[num]) return memo[num];
    if(num <= 1) return num;

    return memo[num] = fibomemoi(num-1,memo) + fibomemoi(num-2,memo);
}

/* using 1 loop best answer O(N) */

let fiboloop = (num) => {
    let a = 1,b=0,temp;

    while(num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}