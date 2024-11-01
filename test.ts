function countOccurrences(array: any[], element: any): number {
    let count = 0;
    for (const item of array) {
        if (item === element) {
            count++;
        }
    }
    return count;
}

// Example usage
const array = [1, 2, 3, 4, 1, 2, 1, 1];
const element = 1;
const occurrences = countOccurrences(array, element);

console.log(`The element ${element} appears ${occurrences} times in the array.`);
