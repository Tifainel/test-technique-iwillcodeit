export function createNumbersArray(arraySize) {
    const nbArray = [];

    for (let i = 0; i < arraySize / 2; i++) {
      nbArray.push(i, i);
    }
    
    return nbArray;
}