import { ThemeContext, themes } from '../context/ThemeContext';
import { useContext } from 'react';

// this is one way to do it, its very messey with sintax but
// const Card = ({ children, style }) => {
//   return (
//     <ThemeContext.Consumer>
//       {({ theme }) => (
//         <div className="card">
//           <div className="card-container" style={(style, { backgroundColor: theme.background })}>
//             {children}
//           </div>
//         </div>
//       )}
//     </ThemeContext.Consumer>
//   );
// };

// export default Card;

const Card = ({ children, style }) => {
  const context  = useContext(ThemeContext);
  const theme = context?.theme || themes.light;
  return (
    <div className="card" style={{ backgroundColor: theme.background, color: theme.foreground }}>
      <div className="card-container" style={style}>
        {children}
      </div>
    </div>
  );
};

export default Card;
