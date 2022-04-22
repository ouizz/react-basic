import { Route, Routes } from "react-router-dom";
import Forgotpassword from "./pages/forgotpassword/Forgotpassword";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Pagenotfound from './pages/pagenotfound/Pagenotfound';
import Dashboard from "./pages/backend/dashboard/Dashboard";
import Product from "./pages/backend/product/Product";

const routes = (
    <Routes>

        {/* Frontend */}
        <Route path="/" exact={true} element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgotpassword" element={<Forgotpassword/>} />

        {/* Backend */}
        <Route path="/backend/dashboard" exact={true} element={<Dashboard/>} />
        <Route path="/backend/product" element={<Product />} />
        
        <Route path="*" element={<Pagenotfound/>} /> {/* ไม่ระบุบ path จะวิ่งมาที่ 404  */}

    </Routes>
)

export default routes
