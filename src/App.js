import './css/App.css';
import Routes from './config/routes';
import Login from './containers/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
        <Routes />
    </div>
  );
}
export default App;
