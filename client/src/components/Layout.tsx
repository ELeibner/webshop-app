import { Container } from '@mui/system';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Container></Container>
            <Outlet />
        </>
    );
};
