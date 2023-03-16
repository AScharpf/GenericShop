import logo from './logo.svg';
import './App.css';
import Navbar from './presentational-components/Navbar';
import SingularArticle from './presentational-components/SingularArticle';

function App() {
  return (
    <div className="App">
    <Navbar />
    <SingularArticle />
    </div>
  );
}

export default App;
