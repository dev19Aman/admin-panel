// material-ui
import { useTheme } from '@mui/material/styles';
import avatar2 from 'assets/images/users/avatar-2.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
    
   <img src={avatar2} alt="Mantis" width="150" />
    </>
  );
};

export default Logo;
