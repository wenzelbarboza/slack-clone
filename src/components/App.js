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

function App() {
  const [user, setUser] = useState(true)

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
