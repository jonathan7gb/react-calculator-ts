import Calculator from './components/calculador'
import Header from './components/header';

function App() {
  return (
    <div className="w-full">
      <Header />

      <div className="w-full flex flex-col justify-center items-center">

        <div className="lg:w-1/6 flex flex-col justify-center">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App
