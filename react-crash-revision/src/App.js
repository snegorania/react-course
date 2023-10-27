import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";
import { postsLoader } from "./components/PostList";
import { postAction } from "./components/NewPost";
import PostDetails from "./components/PostDetails";
import { postDetailsLoader } from "./components/PostDetails";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: 'new-post',
            element: <NewPost />,
            action: postAction
          },
          {
            path: ':id',
            element: <PostDetails/>,
            loader: postDetailsLoader
          }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
