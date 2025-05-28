import { useContext } from 'react';
import { ThemeContext } from '../context/themes.jsx';
import '../css/settingsPage.css';
const SettingsPage = () =>{
    const { changeColor, theme } = useContext(ThemeContext);
    return(
        <div className="settingsPage" style={{backgroundColor: theme.mainBackground, color:theme.text}}>
            Dark Mode
            <input type="checkbox" onChange={changeColor} />
        </div>
    )
}
export default SettingsPage;