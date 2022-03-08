/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let n=nums.length;
    let obj={};
    for(let i=0;i<n;i++){
        let value=target-nums[i];
        if(obj[nums[i]]>=0){
            return [obj[nums[i]],i]
        } else {
            obj[value]=i
        }
    }
   
    
};