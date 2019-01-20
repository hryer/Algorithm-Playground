// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bin = N.toString(2);
    let temp =0;
    let start = false;
    let max=0;
    
    for(let i = 0 ; i < bin.length ; i++){
        if(bin[i] == 1){
            if(start == false){
                start =true;
            }else {
                start == false;

                if(max < temp){
                    max = temp;
                }  
                temp = 0;
                
            }           
        }else {
            temp++;        
        }
    }
    
    return max;
}