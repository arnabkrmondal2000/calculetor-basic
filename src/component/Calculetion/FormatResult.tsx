const formatResult = (result : number | string): string => {
    //console.log('number 1 ===>', result);
    if (typeof result === 'number') {
        // Handle very large or small numbers by using scientific notation
        if (result > 1e10 || result < -1e10) {
            //console.log('result 3 ===>', result);
            return result.toExponential(5); // Converts to scientific notation with 5 decimal points
        }

        // Handle floating-point view, limit to 5 decimal places
        if (result % 1 !== 0) {
            console.log('result 2 ===>', result);
            return result.toFixed(5); // Limits to 5 decimal places
        }
        //console.log('result1 ===>', result);
        // Return result as a string
        return result.toString();
    }

    // If result is already a string, just return it
    return result;
};

export default formatResult;