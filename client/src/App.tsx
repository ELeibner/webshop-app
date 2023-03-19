import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import Cart from './features/Cart';
import Error from './features/Error';
import Home from './features/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
