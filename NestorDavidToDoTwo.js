var arr = [1,2,3,4];
console.log(arr);

function reverseArr(arr){
    var len = Math.floor(arr.length / 2);
    for(var i = 0; i < len; i++){
        var temp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(reverseArr(arr));

function rotateArr(arr, shiftBy){
    for(var i = 0; i < shiftBy; i++){
    var last = arr[arr.length - 1];
        for(var k = arr.length - 1; k > 0; k--){
            arr[k] = arr[k - 1]
        }
        arr[0] = last;
    }
    return arr;
}

console.log(rotateArr(arr, 1));
console.log(rotateArr(arr, 2));
console.log(rotateArr(arr, 5));

function filterArr(arr, min, max){
    var len = max - min + 1;
    var k = 0;
    for(var i = min; i <= max;i++){
        arr[k] = arr[i];
        k++;
    }
    arr.length = len;
    return arr;
}
var arr2 = [1,2,3,4,5,6,7,8,9]

console.log(filterArr(arr, 1, 2));
console.log(filterArr(arr2, 3, 6));

function concactArr(arr, arrtwo){
    var arrhybrid = [];
    for(var i = 0; i < arr.length; i++){
        arrhybrid.push(arr[i]);
    }
    for(var i = 0; i < arrtwo.length; i++){
        arrhybrid.push(arrtwo[i]);
    }
    return arrhybrid;
}

console.log(concactArr(arr, arr2));