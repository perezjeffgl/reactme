import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems';

function App() {
  console.log('App component rendered');
  return (
    <div className="App">
      <header className="App-header">
        It works Jeff!
        <img src={logo} className="App-logo" alt="logo" />
        <ListItems />
      </header>
    </div>
  );
}

export default App;
