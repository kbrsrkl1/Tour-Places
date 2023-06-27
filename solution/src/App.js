import './App.scss';
import Navbar from './component/Navbar/navbar';
import Header from './component/Header/header';
import Main from './component/Main/main';


const App = () => {
  return(
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div> 
  )
}



export default App;