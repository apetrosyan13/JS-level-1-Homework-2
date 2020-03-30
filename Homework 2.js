Ex.1.
function getBiggerItems(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        result.push(arr[i]);
      }
    }
      if (result.length === 0) {
        return "SUch values don't exist."
      }
    return result;
}
console.log(getBiggerItems([1, 1, 2, -3, 0, 8, 4, 0], 9));


Ex.2.
function getNestedEvens(num1, num2) {
    let result = [];
    if (num1 > num2) {
        let x = num1;
        num1 = num2;
        num2 = x;
    }
    for (let i = num1; i <= num2; i++) {
        let evenOrNot = true;
        i += "";
        for (let j = 0; j < i.length; j++) {
            if (+i[j] % 2 !== 0) {
                evenOrNot = false;
            }
        }
            if (evenOrNot === true) {
                result.push(+i);
            }
        +i;
    }
       if (result.length === 0) {
           return "Such values don't exist."
       }
     
    return result.join(",");
} 
console.log(getNestedEvens(99,199));


Ex.3.
function getViolatedOrderIndex (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return arr.indexOf(arr[i + 1]);
        }
    }
    return -1;
}
console.log(getViolatedOrderIndex([-9, -4, -4, 3, 12, 4, 5]));


Ex.4.
function getLargestProd (arr) {
    let result = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] * arr[i + 1] > result) {
          result = arr[i] * arr[i + 1];
      }
    }
    return result;
}
console.log(getLargestProd([-4,6,3,2,-8,9]));


Ex.5.
function missedElemCount (arr) {
  arr.sort(function(a,b) {
    return a - b;
  });
  return arr[arr.length - 1] - arr[0] - (arr.length - 1);
}
console.log(missedElemCount([1,2,3,4,5]));

//aveli karch lucum
//function missedElemCount (arr) {
//return Math.max(...arr) - Math.min(...arr) - (arr.length - 1);
//}
//console.log(missedElemCount([4,1]));



Ex.6.
function getArrOfSum (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        result.push(sum);
    }
    return result;
}
console.log(getArrOfSum([[1], [2], [3], [4]]));


Ex.7.
function getArrOfOdds (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
     for (let j = 0; j < result.length; j++) {
         result[j] = result[j] * result.length;
     }
    return result;
}
console.log(getArrOfOdds([]));
