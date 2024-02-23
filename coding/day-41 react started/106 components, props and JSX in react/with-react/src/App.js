import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card';
import Footer from './components/Footer'

function App() {
  return (
  <div className="1st project">
      <Navbar/> 
      <div className="cards"  style={{color:"blue"}}>
      <Card title="coding Image" desc="This is the description passed as a prop"/>
      <Card title="This is card 2" desc="This is the second description passed as a prop"/>
      <Card title="This is card 3" desc="This is the third description passed as a prop"/>
      </div>
      <Footer/>
  </div>
  );
}
export default App;
