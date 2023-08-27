
import './App.css';
import LoginPage from './component/loginPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './component/signUP';
import Navbar from './component/navbar';
import HomePage from './component/homePage';
import AddBooks from './component/addBooks';
import Books from './component/book';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/book' element={<Books/>}/>

        <Route path='/add-book' element={<AddBooks/>}/>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
