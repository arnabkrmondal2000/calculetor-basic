//import { log } from "console";


const calculetion = ( input : string ): number | string => {
    console.log('input are ==>',input)

    try {
        const operators = input.split(/[\d.]+/).filter(Boolean);
        console.log('operators are==>', operators);
        const numbers = input.split(/[-+*/]/).map(Number);
        console.log('numbers are =>', numbers);

        let result = numbers[0];

        operators.forEach((operator, index) => {
            const nextNumber = numbers[index+1]
            switch (operator) {
                case '+':
                    result += nextNumber;
                    break;
                case '-':
                    result -= nextNumber;
                    break;
                case '*':
                    result *= nextNumber;
                    break;
                case '/':
                    if(nextNumber === 0) {
                        throw new Error ('Can not divide by zero');
                        //return 'Can not divide by zero';
                        // console.log('Can not divide by zero');
                    }  else {
                      result /= nextNumber;
                    //   console.log(result);
                    //   break;
                    }
                    break;
                default:
                    alert('invalid operator');
                    break;
            }
        });
        return result;
    } catch (error:any) {
        if(error.message === 'Can not divide by zero') {
            return 'Can not divide by zero';
        }
        return 'Error';
    }
}

export default calculetion;