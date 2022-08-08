import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App">
      <h1>working1</h1>
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
