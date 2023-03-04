// sharti:2 massvida bir xil kelgan 1chi elementni chiqaring ikkisi ham sort qilingan
// muamo: vaqtini kamaytirish kk
var getCommon = function (nums1, nums2) {
    let loop=nums1
    nums1 = nums1[0] > nums2[0] ? nums1 : nums2
    nums2 = loop[0] > nums2[0] ? nums2 : loop
    console.log(nums1,nums2);
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            return nums1[i]
            break
        }
    }
};

console.log(getCommon([6, 13, 18, 18, 28, 34, 37, 39, 46, 50, 52, 54, 62, 63, 65, 66, 75, 80, 97, 98]
    , [10, 13, 13, 19, 27, 33, 40, 41, 43, 46, 56, 61, 69, 72, 78, 79, 82, 88, 91, 94]
));

// 1
var getCommon = function(nums1, nums2) {
    const set = new Set(nums1);
    const common = nums2.filter(n => set.has(n)).sort((a,b) => a - b)[0];
    
    return common !== undefined ? common : -1;
}

// 2
var getCommon = function(nums1, nums2) {
    // Initialize pointers for both arrays
    let i = 0;
    let j = 0;

    // Iterate through both arrays
    while (i < nums1.length && j < nums2.length) {
        // If the current element in nums1 is less than nums2, move the pointer for nums1
        if (nums1[i] < nums2[j]) {
            i++;
        }
        // If the current element in nums2 is less than nums1, move the pointer for nums2
        else if (nums1[i] > nums2[j]) {
            j++;
        }
        // If the current elements are equal, return the element (it is common to both arrays)
        else {
            return nums1[i];
        }
    }

    // If no common elements were found, return -1
    return -1;
};