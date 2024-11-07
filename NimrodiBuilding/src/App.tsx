import { createBrowserRouter, Navigate, replace, Route, RouterProvider, Routes } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";

const router = createBrowserRouter([
  //FILL HERE
  { path:"/floor" ,element:<Floor/> },
  { path:"/forbidden", element:<Forbidden/> },
  { path:"/reception", element:<Reception/> },
  { path:'/', element:<Navigate replace to="/reception"/>}
]);

function App() {
  return (
    <div>
      <Layout/>
    </div>
  );
}

export default App;
