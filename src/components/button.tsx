type ButtonProps = {
    label: string;
    onClick: () => void;
}

function Button({ label, onClick }: ButtonProps){
    return(
        <button 
        className="bg-green-600 hover:bg-green-700 rounded p-4 transition text-white"
        onClick={onClick}
        >
            {label}
        </button>
    );
}

export default Button;