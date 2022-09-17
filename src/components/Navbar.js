import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

// class Navbar extends React.Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => {
//           return (
//             <ThemeContext.Consumer>
//               {(themeContext) => {
//                 const { isDarkTheme, darkTheme, lightTheme } = themeContext;
//                 const { isLoggedIn, changeAuthStatus } = authContext;
//                 const theme = isDarkTheme ? darkTheme : lightTheme;
//                 return (
//                   <nav
//                     style={{
//                       background: theme.background,
//                       color: theme.text,
//                       height: '120px',
//                     }}
//                   >
//                     <h2 style={{ textAlign: 'center' }}>
//                       Benjamin's React Learning Time
//                     </h2>
//                     <p
//                       onClick={changeAuthStatus}
//                       style={{ textAlign: 'center' }}
//                     >
//                       The user is logged {isLoggedIn ? 'in' : 'out'}
//                     </p>
//                     <div className='ui three buttons'>
//                       <button className='ui button'>Books</button>
//                       <button className='ui button'>TV/Movies</button>
//                       <button className='ui button'>Musical Artists</button>
//                     </div>
//                   </nav>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

const Navbar = () => {
  const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <nav
      style={{
        background: theme.background,
        color: theme.text,
        height: '120px',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Benjamin's React Learning Time</h2>
      <p onClick={changeAuthStatus} style={{ textAlign: 'center' }}>
        The user is logged {isLoggedIn ? 'in' : 'out'}
      </p>
      <div className='ui three buttons'>
        <button className='ui button'>Books</button>
        <button className='ui button'>TV/Movies</button>
        <button className='ui button'>Musical Artists</button>
      </div>
    </nav>
  );
};

export default Navbar;
