// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';


export default function AuthBackground() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'absolute',
        filter: 'blur(18px)',
        zIndex: -1,
        bottom: 0,
        transform: 'inherit'
      }}
    >
    <img/>
    </Box>
  );
}
