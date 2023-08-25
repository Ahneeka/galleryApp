
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';



function App() {
  return (
    <div>
      <Navbar title='Gallery.'/>
    <div className="App">
      <Header title="Welcome to my Gallery" />
      < Content />
      <Footer />
    </div>
    </div>
  );
}

export default App;
