import Category from "./Components/Category/Category";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Product from "./Components/Product/Product";
import SubCategory from "./Components/SubCategory/SubCategory";


export const Routes  = [
    {path:"/",element:<Login/>},
    {path:"/admin",element:<Login/>},
    {path:"/admin/dashboard",element:<Dashboard/>},
    {path:"/admin/category",element:<Category/>},
    {path:"/admin/subCategory",element:<SubCategory/>},
    {path:"/admin/product",element:<Product/>},
    {path:"*",element:<Login/>},
] 