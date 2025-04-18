const Video = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-64 shadow-sm rounded-lg cursor-pointer hover:shadow-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail' />
      <ul>
        <li className='font-bold py-2'>{title.slice(0, 25)}...</li>
        <li className='text-gray-500'>{channelTitle}</li>
        <li className='text-gray-500'>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className='p-1 m-1 border border-red-900'>
      <Video info={info} />
    </div>
  );
};

export default Video;
