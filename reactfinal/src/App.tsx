import './css/App.css';
import { useContext } from 'react';
import { ThemeContext } from './context/themes.jsx';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="App" style={{backgroundColor: theme.mainBackground, color:theme.text, height: "100%", alignItems: "center", justifyContent: "center", display: "flex"}}>
      Welcome to my pet adoption website!!!
      <br />
      Are you ready to find a new friend?
    </div>
  );
}

export default App;
