import { ThemeContext } from '../context/Themes';
import { useContext } from 'react';
import Box from '../elements/Box';

import Text from '../elements/Text';
import Content from '../elements/Content';


const SettingsPage = () => {

    const {changeColor, theme} = useContext(ThemeContext);

    return (
            <Content>
                <Box Name="box">
                    <Text Color={theme.text}>Yo you made it to settings, this is where i can play with the thems and stuff, have fun</Text>
                </Box>
                
                <Box Name="box">
                <button style={{ backgroundColor: theme.button}}>This is a test button, its just to display what a button will look like</button>
                </Box>
                <Box className="box">=
                    <select className="ThemeItems" onChange={(e) => { changeColor(e.target.value) }}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="neit">Neit</option>
                    </select>
                </Box>
            </Content>
    );
}


export default SettingsPage;