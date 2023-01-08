function diffArray(arr1, arr2){
    let difference =[]
    for(var item of arr1){
        var itemExist = arr2.indexOf(item)
        if(itemExist === -1){
            difference.push(item)
        }
    }
    for(var item of arr2){
        var itemExist = arr1.indexOf(item)
        if(itemExist === -1){
            difference.push(item)
        }
    }
    return difference
}


var arr1 = [3,5,4,8]
var arr2 = [4,8,9,10]

console.log(diffArray(arr1, arr2))