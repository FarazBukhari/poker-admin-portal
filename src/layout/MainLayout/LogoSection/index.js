import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';

// project imports
import { DASHBOARD_PATH } from 'config';
import { Typography } from '@mui/material';
// import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <Link component={RouterLink} to={DASHBOARD_PATH} aria-label="Poker Admin logo" sx={{ textDecoration: 'none' }}>
        {/* <Logo /> */}
        <Typography variant="h2">Poker Admin</Typography>
    </Link>
);

export default LogoSection;
