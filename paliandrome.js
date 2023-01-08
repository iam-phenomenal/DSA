function diagonalDifference(arr){
    let firstDiag = 0
    let secondDiag = 0

    for(var i=0, j= arr[0].length-1; i <arr.length; i++, j--){
        firstDiag += arr[i][i]
        secondDiag += arr[i][j]
    }
    return Math.abs(firstDiag - secondDiag)
}
