import {useState} from 'react';

function App(){
    
    const [calc,setCalc]=useState("");
    const [result,setResult]=useState("");

    const ops=['/','*','+','.',];

    const updateCalc= value =>{
        if(
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ){
            return;
        }

        if(!ops.includes(value)){
            setResult(eval(calc+value).toString());
        }
        setCalc(calc + value);
    }

    const calcu=()=>
    {
        setCalc(eval(calc).toString());
    }


    const deletelast=() =>{
        if(calc === ''){
            return;
        }

        const value =calc.slice(0,-1);
        setCalc(value);
    }
    const createDigits=()=>{
        const digits=[];

        for(let i=1;i<10;i++){

            digits.push(
                <button  onClick={()=> updateCalc(i.toString())}
                key={i}>{i}</button>
            )
        }

        return digits;
    }


    return(
        <div className="App">
            <div className="calculator">
                <div className="display">
                     {result ? <span>({result})</span> : ' '}
                     {calc || "0"}
                </div>
           
            
                <div className="operators">
                <buttons onClick={()=>updateCalc("/")}> /</buttons>
                <buttons onClick={()=>updateCalc("*")}>*</buttons>
                <buttons onClick={()=>updateCalc("+")}>+</buttons>
                <buttons onClick={()=>updateCalc("-")}>-</buttons>

                <buttons onClick={deletelast}>DEL</buttons>

                </div>

                <div className="digits">
                {createDigits()}
                </div>
                <div className="digi">
                <buttons onClick={()=>updateCalc("0") }>0</buttons>
                <buttons onClick={()=>updateCalc(".")}>.</buttons>
                <buttons onClick={calcu}>=</buttons>

                </div>
            </div>
        </div>
    );
}

export default App;