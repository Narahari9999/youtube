import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import Video, { AdVideoCard } from './Video';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();

    setVideos(data.items);
  };

  return (
    <div className='flex flex-wrap'>
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <Video info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
