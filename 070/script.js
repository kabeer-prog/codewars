// Sum of differences in array
// [2, 1, 10]  ->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 ( Nothing in Haskell ).
function sumOfDifferences(array) {
  
    if (array.length == 1) {
          return 0;
        } else if (array == []) {
          return [];
        } else
          for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
              if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
              }
            }
          }
        let newArray = [];
        for (let i = 0; i < array.length - 1; i++) {
          newArray[i] = array[i] - array[i + 1];
        }
        let sum = 0;
        for (let i = 0; i < newArray.length; i++) {
          sum += newArray[i];
        }
        // newArray.pop();
        return sum;
        // return array;
      }
  