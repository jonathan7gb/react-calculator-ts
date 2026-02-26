function Header () {
    return (
        <header className="flex flex-row p-8 justify-center items-center bg-green-600">
            <div className="flex flex-col gap-2 text-center text-white">
                <h1 className="text-3xl font-bold">Calculator React-TS</h1>
                <p>Using React, Typescript, Tailwind and Vite</p>
            </div>
        </header>
    );
}

export default Header;