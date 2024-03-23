var intersection = function(nums1, nums2) {
    const maxArray = nums1.length >= nums2.length ? nums1 : nums2
    const minArray = nums1.length < nums2.length ? nums1 : nums2
    let i=0;
    let tempArray = []
    while(i<maxArray.length){
        console.log(minArray.includes(maxArray[i]),!tempArray.includes(maxArray[i]))
        if(minArray.includes(maxArray[i]) && !tempArray.includes(maxArray[i])){
            tempArray.push(maxArray[i]);
        }
        i++;
    }
    return tempArray;
};
intersection([1,2,2,1],[2,2])