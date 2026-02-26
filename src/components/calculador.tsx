import { useState } from "react";
import Display from "./display";
import Button from "./button";

function Calculator(){
    const [display, setDisplay] = useState<string>("0");

    const handleNumber = (num: string) => {
        setDisplay(display === "0" ? num : display + num);
    }

    return (
        <div className="flex flex-col items-center gap-4 mt-10 w-1/8 justify-self-center">
            <Display value={display} />

            <div className="grid grid-cols-3 gap-2 w-full">
                <Button label="1" onClick={ () => handleNumber("1")} />
                <Button label="2" onClick={ () => handleNumber("2")} />
                <Button label="3" onClick={ () => handleNumber("3")} />
                <Button label="4" onClick={ () => handleNumber("4")} />
                <Button label="5" onClick={ () => handleNumber("5")} />
                <Button label="6" onClick={ () => handleNumber("6")} />
                <Button label="7" onClick={ () => handleNumber("7")} />
                <Button label="8" onClick={ () => handleNumber("8")} />
                <Button label="9" onClick={ () => handleNumber("9")} />
                <Button label="0" onClick={ () => handleNumber("0")} />
            </div>

        </div>
    );
}

export default Calculator;