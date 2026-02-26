type ButtonProps = {
    label: string;
    onClick: () => void;
}

function ButtonNumber({ label, onClick }: ButtonProps){
    return(
        <button 
        className="bg-green-500 hover:bg-green-600 rounded p-4 transition text-white font-medium text-lg"
        onClick={onClick}
        >
            {label}
        </button>
    );
}

function ButtonOperation({label, onClick}: ButtonProps){
    return (
        <button 
        className="bg-green-700 hover:bg-green-800 rounded p-4 transition text-white font-medium text-xl"
        onClick={onClick}
        >
            {label}
        </button>
    )
}

export default ButtonNumber;
export { ButtonOperation };