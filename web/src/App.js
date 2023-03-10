import './App.css';
import Login from './components/login/login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/home';

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
