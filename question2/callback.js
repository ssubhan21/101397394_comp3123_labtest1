// Method that resolves a message after 500ms
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({'message': 'delayed success!'});
        }, 500);
    });
};

// Method that rejects with an error message after 500ms
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'error': 'delayed exception!'});
        }, 500);
    });
};

// Call the resolvedPromise and handle the result
resolvedPromise()
    .then(result => {
        console.log('Resolved:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Call the rejectedPromise and handle the result
rejectedPromise()
    .then(result => {
        console.log('Resolved:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
