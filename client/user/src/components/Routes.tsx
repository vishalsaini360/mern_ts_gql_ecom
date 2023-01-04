import HomeWrapper from "./Home/HomeWrapper";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

export const routes=[
    {path:"/",element:<HomeWrapper/>},
    {path:"/signup",element:<Signup/>},
    {path:"/login",element:<Login/>},
]