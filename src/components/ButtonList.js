import Button from './Button';

const list = [
  'All',
  'Gaming',
  'Live',
  'Cricket',
  'Soccer',
  'Cooking',
  'Valentines',
];

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};
export default ButtonList;
