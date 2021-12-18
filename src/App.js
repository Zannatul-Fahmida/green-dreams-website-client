import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPlants from './pages/Dashboard/AddPlants/AddPlants';
import AllOrders from './pages/Dashboard/AllOrders/AllOrders';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import Reviews from './pages/Dashboard/Reviews/Reviews';
import Home from './pages/Home/Home/Home';
import PlantDetails from './pages/Home/PlantDetails/PlantDetails';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Signup from './pages/Login/Signup/Signup';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details/:plantId" element={<PlantDetails />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route path="/dashboard/reviews" element={<Reviews />}>
          </Route>
          <Route path="/dashboard/myOrders" element={<MyOrders />}>
          </Route>
          <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>}>
          </Route>
          <Route path="/dashboard/addPlants" element={<AdminRoute><AddPlants /></AdminRoute>}>
          </Route>
          <Route path="/dashboard/allOrders" element={<AdminRoute><AllOrders /></AdminRoute>}>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
