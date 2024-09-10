import React from 'react';

const Calculation = (inputData : string): number | string => {

    try {
       const operator = inputData.split(/[\d.]+/).filter(Boolean);
       const numbers = inputData.split(/[-+*/]/).map(Number); 

       let result = numbers[0]

       operator.forEach()
    } catch (error) {
        
    }
}

export default Calculation;