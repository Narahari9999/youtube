import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='p-5 w-48'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};
export default Sidebar;
