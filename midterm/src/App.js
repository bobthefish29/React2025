import './App.css';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './context/Themes';
import { useContext } from 'react';
import Content from './elements/Content';
import Button from './elements/Button';
import Box from './elements/Box'
import Text from './elements/Text';

function App() {
  // this is the navagation, thats what all this is
  const navigate = useNavigate();
  const changeProductPage = () => {
    navigate('product');
  };

  const { theme } = useContext(ThemeContext);

  return (

    
      <Content Name="App content-heightLarge" BackGroundColor={theme.mainBackground}>
        <Box Border={theme.mainBackground}>
          <Text Color={theme.text}>This is the home page, its very beerbattered bones</Text>
        </Box>
        <Box Border={theme.mainBackground} >
          <Text Color={theme.text}>Do you want to check out our Product's?</Text>
          <br />
          <Button Click={() => { changeProductPage() }} BackGround={theme.buttonBackground} FontColor={theme.text}>Check Here</Button>
        </Box>
        {/* this tells it where to load the children */}
        {/* <Outlet /> */}
      </Content>
  );
}

export default App;
