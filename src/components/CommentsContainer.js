const comments = [
  {
    name: 'Akshay Saini',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [
          {
            name: 'Akshay Saini',
            text: 'Lorem ipsum dolor sit amet, consectetur adip',
            replies: [],
          },
          {
            name: 'Akshay Saini',
            text: 'Lorem ipsum dolor sit amet, consectetur adip',
            replies: [],
          },
          {
            name: 'Akshay Saini',
            text: 'Lorem ipsum dolor sit amet, consectetur adip',
            replies: [],
          },
        ],
      },
      {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
      {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
    ],
  },
  {
    name: 'Akshay Saini',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
      {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
    ],
  },
  {
    name: 'Akshay Saini',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
      {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className='flex p-2 bg-gray-100 rounded-lg my-3'>
      <img
        className='w-12 h-10'
        alt='user'
        src='https://tse4.mm.bing.net/th?id=OIP.-Zanaodp4hv0ry2WpuuPfgHaEf&pid=Api&P=0&h=180'
      />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => {
    return (
      <div key={i}>
        <Comment data={comment} />
        <div className='pl-5 border border-l-black ml-5'>
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments: </h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
