import { Provider } from 'react-redux';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
