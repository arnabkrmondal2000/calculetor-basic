import React, {useState} from 'react';
import './Calculetor.css';
import calculetion from '../Calculetion/Calculetion';

const Calculetor = () => {
    const [input,setInput] = useState<string>('');
    const [result, setResult] = useState<string | number>(0);

    let btnSet1 = ['1','2','3','+'];
    let btnSet2 = ['4','5','6','-'];
    let btnSet3 = ['7','8','9','*'];
    let btnSet4 = ['0','.','/','='];

    const handleClick = (btn:string) => {
        if(btn === '=') {
           
            try {
                const calculetionResult = calculetion(input);
                console.log(calculetionResult);
                setResult(calculetionResult);
            } catch (error) {
                setResult('error');
            }
        }
        else if(btn === 'c1') {
            setInput(input.slice(0,-1));
            if(result) {
                setResult(0);
            }
        }
        else if(btn === 'c') {
            setInput('');
            setResult(0);
        }
        else {
            setInput(input + btn);
            console.log('input field ===>',input);       
        }
    }
    return(
        <>
         <div className='calculetor'>
            <div className='displayField'>
                <input type="text" value={input} />
                <div className='result'>{result}</div>
            </div>
            <div className='buttonKey'>
                {btnSet1.map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                ))}

                {btnSet2.map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                ))}

                {btnSet3.map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                ))}

                {btnSet4.map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                ))}
                <button key={'c'} onClick={() => handleClick('c')}>C</button>
                <button key={''} onClick={() => handleClick('c1')}>R</button>
            </div>
         </div>
        </>
    )
}

export default Calculetor;