import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./store/appStore";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Head />
          <Body />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        ,
        {
          path: "/search",
          element: <SearchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter}>
          <Head />
        </RouterProvider>
      </div>
    </Provider>
  );
};

export default App;
