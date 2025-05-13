import { ThemeContext } from '../context/Themes';
import { useContext } from 'react';
import Box from '../elements/Box';
import Text from '../elements/Text';
import Content from '../elements/Content';
const SettingsPage = () => {

    const { changeColor, theme } = useContext(ThemeContext);
    const themeName = localStorage.getItem('theme') || 'light';


    return (
        <Content BackGroundColor={theme.mainBackground} Name="content content-heightLarge">
            <Box Name="box box-w-m" BackGroundColor={theme.box} Border={theme.testBorder}>
                <Text Color={theme.text}>Yo you made it to settings, this is where i can play with the thems and stuff, have fun</Text>
            </Box>
            <Box Name="box box-w-m" BackGroundColor={theme.box}>
                <Text Color={theme.text}>Select you Theme</Text>
                <Box BackGroundColor={theme.box} Border={theme.box}>
                    <select className="ThemeItems" onChange={(e) => { changeColor(e.target.value) }} value={themeName}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="neit">Neit</option>
                        <option value="ocean">Ocean</option>
                        <option value="forest">Forest</option>
                    </select>
                </Box>
            </Box>
        </Content>
    );
}


export default SettingsPage;