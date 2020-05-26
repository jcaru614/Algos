function merge(arr1, arr2) {
    let sortedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i])
            i++;
        } else {
            sortedArr.push(arr2[j])
            j++;
        }
    }
        while (i < arr1.length) {
            sortedArr.push(arr1[i]);
            i++
        }
        while (j < arr2.length) {
            sortedArr.push(arr2[j]);
            j++
        }

    return sortedArr;
}
console.log(merge([1, 4, 5, 9], [2, 3, 7, 10]))