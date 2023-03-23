import './App.css';
import Login from './scenes/login/login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './scenes/home/home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    }
])

const App = () => {
    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
