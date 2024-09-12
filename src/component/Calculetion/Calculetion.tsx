

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
                    result /= nextNumber;
                    break;
                default:
                    alert('invalid operator');
                    break;
            }
        });
        return result;
    } catch (error) {
        return 'Error';
    }
}

export default calculetion;