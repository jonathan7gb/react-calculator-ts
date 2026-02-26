import { useState } from "react";
import Display from "./display";
import ButtonNumber, { ButtonOperation } from "./button";

function Calculator(){
    const [display, setDisplay] = useState<string>("0");

    const handleNumber = (num: string) => {
        setDisplay(display === "0" ? num : display + num);
    }

    const handleOperation = (op: string) => {
        setDisplay(display === "0" ? "0" : display + op)
    }
    
    return (
        <div className="flex flex-col items-center gap-4 mt-10 w-1/8 justify-self-center">
            <Display value={display} />

            <div className="grid grid-cols-4 gap-2 w-full">
                <ButtonNumber label="1" onClick={ () => handleNumber("1")} />
                <ButtonNumber label="2" onClick={ () => handleNumber("2")} />
                <ButtonNumber label="3" onClick={ () => handleNumber("3")} />
                <ButtonOperation label="C" onClick={ () => setDisplay("0")} />
                <ButtonNumber label="4" onClick={ () => handleNumber("4")} />
                <ButtonNumber label="5" onClick={ () => handleNumber("5")} />
                <ButtonNumber label="6" onClick={ () => handleNumber("6")} />
                <ButtonOperation label="+" onClick={ () => handleOperation(" + ")} />
                <ButtonNumber label="7" onClick={ () => handleNumber("7")} />
                <ButtonNumber label="8" onClick={ () => handleNumber("8")} />
                <ButtonNumber label="9" onClick={ () => handleNumber("9")} />
                <ButtonOperation label="-" onClick={ () => handleOperation(" - ")} />
                <ButtonNumber label="." onClick={ () => handleNumber(".")} />
                <ButtonNumber label="0" onClick={ () => handleNumber("0")} />
                <ButtonOperation label="/" onClick={ () => handleOperation(" / ")} />
                <ButtonOperation label="X" onClick={ () => handleOperation(" *" )} />
            </div>

        </div>
    );
}

export default Calculator;