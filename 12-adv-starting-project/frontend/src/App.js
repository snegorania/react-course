import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, {EventsLoader} from "./pages/EventsPage";
import EventDetailPage, { singleEventLoader } from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";
import EventLayout from "./pages/EventLayout";
import { formAction } from "./components/EventForm";
import { deleteAction } from "./pages/EventDetailPage";
import NewsLetterPage from "./pages/NewsLetterPage";
import Authentication from './pages/Authentication';
import { authAction } from "./pages/Authentication";
import ErrorPage from './pages/Error';
import { logoutAction } from "./pages/Logout";
import { authLoader } from "./util/getAuthToken";
import { checkAuthLoader } from "./util/getAuthToken";
import { newsAction } from "./pages/NewsLetterPage";
import getAuthToken from "./util/getAuthToken";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: authLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventLayout/>,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: EventsLoader
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: formAction,
            loader: checkAuthLoader
          },
          {
            path: ':id',
            id: 'singleEvent',
            loader: singleEventLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteAction
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: formAction,
                loader: checkAuthLoader
              },
            ]
          }
        ]
      },
      {
        path: 'newsletter',
        element: <NewsLetterPage />,
        action: newsAction
      },
      {
        path: '/auth',
        element: <Authentication />,
        action: authAction
      },
      {
        path: '/logout',
        action: logoutAction
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
