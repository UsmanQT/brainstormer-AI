import './App.css';
import DrawingTool from './components/WhiteBoard/DrawingTool';
import Penciltool from './components/WhiteBoard/PencilTool';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Penciltool/>
      </header>
    </div>
  );
}

export default App;
