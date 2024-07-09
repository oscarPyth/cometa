import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home"
import Orders from "../pages/Orders";
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='bg-main_bg '>
      <Header />
      <div className="p-7 px-[6vw]">
        <Outlet />

      </div>
      
    </div>
  );
};



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
]);

const AppRoutes: React.FC = () => {
  return (
    
      <RouterProvider router={router} />
  );
};

export default AppRoutes;