function getConcatenation(nums: number[]): number[] {
    console.log(nums)
    let i:number = 0;
    let idx:number = 0;
    let res:number[] = [];
    
    for(i; i< nums.length*2; i++){
        if(i === nums.length || i === 0){
            idx = 0
        }else {
            idx++;
        }
        console.log(idx);
        res.push(nums[idx]);
    }
    i = 0;
    return res;
};
