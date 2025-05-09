import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  // this is the navagation, thats what all this is
  const navigate = useNavigate();
  const changeProductPage = () => {
    navigate('product');
  };

  return (
      <div className="App">
        <div>
          This is the home page, its very beerbatter bones
        </div>
        <div>
          Do you want to check out our Product's?
          <br />
          <button onClick={() => { changeProductPage() }}>Check Here</button>
        </div>
        {/* this tells it where to load the children */}
        {/* <Outlet /> */}
      </div>
  );
}

export default App;
