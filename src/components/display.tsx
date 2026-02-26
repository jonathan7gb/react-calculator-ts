type DisplayProps = {
    value: string;
}

function Display({ value }: DisplayProps){
    return (
        <div className="bg-gray-700 text-white font-semibold text-3xl p-2 rounded w-full text-right">
            { value }
        </div>
    );
}

export default Display;