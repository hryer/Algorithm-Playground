// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)

    
    let bina = N.toString(2);
    
    let start=false;
    let gapMax = 0;
    let temp =0;
    
    let idx=0;
    for(let i = 0 ; i < bina.length ;i++){
    
        if(bina[i]==1){
            if(temp>gapMax){
                gapMax = temp;
            }
            temp = 0;
            start = true;
        }else if(start===true){
                temp++;
        }   
            
    }
    

    
    return gapMax;
}