function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            const result = mixedArray
                .filter(item => typeof item === 'string')  // Filter out non-strings
                .map(str => str.toLowerCase());           // Convert strings to lowercase
            resolve(result);                             // Resolve the promise with the result
        } catch (error) {
            reject("Error processing array.");           // Reject if there is an error
        }
    });
}

// Example usage
const mixedArray = ['Pizaa', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))   // Output: ['pizaa', 'wings']
    .catch(error => console.error(error));
