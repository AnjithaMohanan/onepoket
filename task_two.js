function sumArray(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
  
    // Initialize sum variable
    let sum = 0;
  
    // Iterate through the array and add each element to sum
    for (let i = 0; i < arr.length; i++) {
      // Check if the current element is an integer
      if (typeof arr[i] !== 'number' || !Number.isInteger(arr[i])) {
        throw new Error('Array must contain only integers');
      }
  
      sum += arr[i];
    }
  
    // Return the sum
    return sum;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  console.log(sumArray(numbers)); 
  