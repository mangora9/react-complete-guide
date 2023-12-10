import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from 'react-router-dom';
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootPage from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />} />
//     <Route path='/products' element={<Products />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    errorElement: <ErrorPage />, // 에러가 났을 경우 이동할 엘리먼트
    children: [
      {
        index: true,
        // path: '',
        element: <HomePage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/products/:productId',
        element: <ProductDetail />
      },
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
