import React, {useState,useEffect, useRef, ChangeEvent} from 'react';
import './Calculetor.css';
import calculetion from '../Calculetion/Calculetion';
import formatResult from '../Calculetion/FormatResult';

const Calculetor = () => {
    const [input,setInput] = useState<string>('');
    const [result, setResult] = useState<string | number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    let btnSet1 = ['1','2','3','+'];
    let btnSet2 = ['4','5','6','-'];
    let btnSet3 = ['7','8','9','*'];
    let btnSet4 = ['0','.','/','='];


    //scroll the input field

    useEffect(() => {
        if(inputRef.current) {
           console.log('ref is ===> ',inputRef.current)
           inputRef.current.scrollLeft = inputRef.current.scrollWidth;
        }
    },[input]);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    const handleClick = (btn:string) => {
        if(btn === '=') {
            if(/[\+\-\*\/]$/.test(input)) {
                alert("Invalid expression end!");
                return; // prevent evaluation
            }
            try {
                const calculetionResult= calculetion(input);
                console.log(calculetionResult);
                const formatResultOutput = formatResult(calculetionResult);
                console.log('formatResult ===> ', formatResultOutput); 
                setResult(formatResultOutput);
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
            if (/[\+\-\*\/]$/.test(input) && /[\+\-\*\/]/.test(btn)) {
                alert("Consecutive operators not allowed!");
                return;
            }
            if (input.length === 0 && /[\*\/]/.test(btn)) {
                alert("Cannot start with this operator!");
                return;
            }
            setInput(input + btn);
            console.log('input field ===>',input);       
        }
    }
    

    return(
        <>
         <div className='calculetor'>
            <div className='displayField'>
                <input type="text" value={input} onChange={handleChange} ref={inputRef}/>
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