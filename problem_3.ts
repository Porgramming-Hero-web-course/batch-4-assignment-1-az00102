//Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). 
//It should return the number of times the word appears in the sentence, case-insensitively.

function countWordOccurrences(sentence: string, word: string): number{
    let count: number = 0;
    let lword: string = word.toLowerCase();
    let lsentence: string = sentence.toLowerCase();
    // console.log(lsentence);

    let words: string[] = lsentence.split(/[\s.,!?;:()]+/);
    // console.log(words)

    for(let w of words){
        if(lword == w){
            // console.log(w)
            count+=1;
        }
    }

    return count;
}

// console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));