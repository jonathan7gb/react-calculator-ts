import { useState } from "react";
import Display from "./display";
import ButtonNumber, { ButtonOperation, ButtonCalculate, ButtonZero } from "./button";
import { evaluate } from 'mathjs';

function Calculator() {
    const [display, setDisplay] = useState<string>("0");
    const operators: string[] = ["+", "-", "/", "*", ".", "(", ")"]

    const handleNumber = (num: string) => {
        setDisplay(display === "0" ? num : display + num);
    }

    const handleOperation = (op: string) => {
        const lastChar = display.trim().slice(-1);
        if (operators.includes(lastChar)) {
            return;
        }

        setDisplay(display === "0" ? "0" : display + op);
    }

    const handleCalculate = (calc: string) => {
        setDisplay(String(Number(evaluate(calc).toFixed(3))))
    }

    const handleRemoveLastChar = (value: string) => {
        let newValue: string = value.slice(0, -1)
        if (newValue === "" || newValue === " ") {
            setDisplay("0")
        }else{
            setDisplay(newValue)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center gap-4 mt-10 w-full border rounded-lg p-8 shadow-xl">
            <Display value={display} />

            <div className="grid grid-cols-4 gap-2 w-full">
                <ButtonOperation label="+" onClick={() => handleOperation("+")} />
                <ButtonOperation label="-" onClick={() => handleOperation("-")} />
                <ButtonOperation label="X" onClick={() => handleOperation("*")} />
                <ButtonOperation label="/" onClick={() => handleOperation("/")} />
                <ButtonNumber label="1" onClick={() => handleNumber("1")} />
                <ButtonNumber label="2" onClick={() => handleNumber("2")} />
                <ButtonNumber label="3" onClick={() => handleNumber("3")} />
                <ButtonOperation label="C" onClick={() => setDisplay("0")} />
                <ButtonNumber label="4" onClick={() => handleNumber("4")} />
                <ButtonNumber label="5" onClick={() => handleNumber("5")} />
                <ButtonNumber label="6" onClick={() => handleNumber("6")} />
                <ButtonOperation label="<" onClick={() => handleRemoveLastChar(display)} />
                <ButtonNumber label="7" onClick={() => handleNumber("7")} />
                <ButtonNumber label="8" onClick={() => handleNumber("8")} />
                <ButtonNumber label="9" onClick={() => handleNumber("9")} />
                <ButtonCalculate label="=" onClick={() => handleCalculate(display)} />
                <ButtonNumber label="." onClick={() => handleNumber(".")} />
                <ButtonZero label="0" onClick={() => handleNumber("0")} />
            </div>

        </div>
    );
}

export default Calculator;