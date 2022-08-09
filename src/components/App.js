import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Chat from './Chat';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path='/room/:roomId' element={<Chat />} ></Route>
            {/* <Route path='/' element={ } ></Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
