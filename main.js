// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
console.log(buildMeUp += " " + theWordArray [i])

        // Print buildMeUp to the console
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)


// Excitement Exercise

const sentence = ['This', 'is', 'so', 'fun', 'learning', 'scope'];

const printWords = () => {
    let printWords = '';
    for (let i = 0; i < sentence.length; i++) {
        printWords += sentence[i] + ' ';
        console.log(printWords)
    }
}

// printWords()

const addSymbol = () => {
    let printWords = '';

    for (let i = 0; i < sentence.length; i++) {
        let count = i + 1;
        if (count % 3 === 0) {
            printWords += sentence[i] + '! '
        }
        else {
            printWords += sentence[i] + ' '
        }
        console.log(printWords)
    }
}
// addSymbol()