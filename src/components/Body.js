import { useSelector } from 'react-redux';
import Main from './Main';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  const { isMenuOpen } = useSelector((state) => state.app);

  return (
    <div className='flex'>
      {isMenuOpen && <Sidebar />}
      <Outlet />
    </div>
  );
};
export default Body;
