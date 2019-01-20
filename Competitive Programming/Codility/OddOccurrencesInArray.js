// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let temp = [];
    
    for(const el of A){
        if(!temp.includes(el)){
            temp.push(el);
        }else {
            let index = temp.indexOf(el);
            
            if(index != null){
                temp.splice(index,1);
            }
        }
    }
    
    return temp[0];
}