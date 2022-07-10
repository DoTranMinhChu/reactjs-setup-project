import logo from '../assets/images/logo.svg';
import { Init } from '../components/Init.component';
import { getInitValueSelector } from '../redux/selectors/initSelector';
import { useSelector } from 'react-redux';
import '../styles/App.css';

function App() {
  const value = useSelector(getInitValueSelector);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>

        <h1>{value}</h1>
        <Init initValue={value} />

      </header>

    </div>
  );
}

export default App;
