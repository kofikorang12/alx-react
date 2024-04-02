import './App.css';
import logo from './Holberton-logo.jpg'
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt=""/>
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form className="form">
          <div className="form-email">
            <label htmlFor="email">
              Email
            </label>
            <input type="email" id="email" className="email-input input"/>
          </div>
          <div className="form-password">
            <label htmlFor="password">
              Password
            </label>
            <input type="password" id="password" className="password-input input" />
          </div>
          <button type="submit" className="form-btn">OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
