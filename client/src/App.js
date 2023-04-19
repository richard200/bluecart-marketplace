
import './App.css';
import GameList from './components/Games';
import PhoneList from './components/Phones';

function App() {
  return (
    <div className="App">
  <h1>My Phone Store</h1>
  <p className='open'>Look for and compare products based on price, 
    rating and find which store is best to visit for the product you are looking for</p>
    <br></br>
      <PhoneList />
    </div>
  );
}

export default App;
