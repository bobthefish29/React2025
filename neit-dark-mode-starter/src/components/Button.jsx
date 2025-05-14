import { ThemeContext, themes } from '../context/ThemeContext';
import { useContext } from 'react';

const Button = ({ label, onClick }) => {
  const context  = useContext(ThemeContext);
  const theme = context?.theme || themes.light;

  return (
    <div className={theme === themes.dark ? 'button-dark' : 'button'} onClick={onClick}>
      {label}
    </div>
  );
};

export default Button;
