// Task 2: Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed.
// Preserve the original order of elements.

function removeDuplicates(arr: number[]): number[]{
    let newArr : number[] = [];
    let temp = 0;
    let dup : number[] = [];

    for(let i = 0; i < arr.length; i++){
        temp = arr[i];
        let valid = true;
        //to check if the element was already checked or not
        for(let k = 0; k < dup.length; k++){
            if(arr[i] == arr[dup[k]]){
                valid = false;
            }
        }
        //to find out the duplicate elements index number and put it through the dup array if there is any
        if(valid == true){
            for(let j = 0; j < arr.length; j++){
                if(i == j) continue
                else if(arr[j] == temp){
                    dup[j] = j;
                }
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        if(i == dup[i]){
            continue
        }
        else newArr.push(arr[i]);
    }
    
    console.log(newArr)

    return newArr;

}

// Sample Input:
// removeDuplicates([1, -1, 1, -1, 2])