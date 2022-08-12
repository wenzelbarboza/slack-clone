import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Chat from './Chat';
import { useState } from 'react';
import Login from './Login';
import { useStateValue } from '../context/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()
  console.log("working")

  return (
    <BrowserRouter>
      <div className="App">
        {!user ?
          <Login /> :
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path='/room/:roomId' element={<Chat />} ></Route>
                {/* <Route path='/' element={ } ></Route> */}
              </Routes>
            </div>
          </>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
