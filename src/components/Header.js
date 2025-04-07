import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { addToCache } from '../utils/searchSlice';

const Header = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[query]) {
        setSuggestions(searchCache[query]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  const getSearchSuggestions = async () => {
    const res = await fetch(`${YOUTUBE_SEARCH_API}${query}`);
    const data = await res.json();
    setSuggestions(data[1]);

    dispatch(
      addToCache({
        [query]: data[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 gap-2'>
        <img
          onClick={toggleMenuHandler}
          className='h-10 cursor-pointer'
          src='https://tse4.mm.bing.net/th?id=OIP.9kksv3x3Tk_A7y0qNOg6dAHaHa&pid=Api&P=0&h=180'
          alt='menu-icon'
        />

        <img
          className='h-10'
          src='https://tse1.mm.bing.net/th?id=OIP.sCtdNjphAin-gugu0MNptAHaEK&pid=Api&P=0&h=180'
          alt='youtube-logo'
        />
      </div>
      <div className='col-span-10 px-10'>
        <div>
          <input
            type='text'
            className='w-1/2 border border-gray-400 px-5 py-2 rounded-l-full'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className='fixed bg-white py-2 px-2 w-[32rem] border border-gray-100'>
            <ul>
              {suggestions.map((s) => (
                <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className='h-10'
          src='https://tse4.mm.bing.net/th?id=OIP.-Zanaodp4hv0ry2WpuuPfgHaEf&pid=Api&P=0&h=180'
          alt='user-icon'
        />
      </div>
    </div>
  );
};
export default Header;
