import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
