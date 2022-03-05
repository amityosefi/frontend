import HomePage from "./Pages/HomePage.vue";

const routes = [{
    path: "/",
    name: "HomePage",
    component: HomePage
},
{
    path: "/MainPage",
    name: "MainPage",
    component: () => import("./Pages/MainPage")
},
{
    path: "/register",
    name: "register",
    component: () => import("./Pages/RegisterPage")
},
{
    path: "/login",
    name: "login",
    component: () => import("./Pages/LoginPage")
},
{
    path: "/About",
    name: "About",
    component: () => import("./Pages/AboutPage")
},
{
    path: "/RatePage",
    name: "RatePage",
    component: () => import("./Pages/RatePage")
},
{
    path: "/FirstGamePage",
    name: "FirstGamePage",
    component: () => import("./Pages/FirstGamePage")
},
{
    path: "/SecondGamePage",
    name: "SecondGamePage",
    component: () => import("./Pages/SecondGamePage")
},
{
    path: "/StructionsFirstGame",
    name: "StructionsFirstGame",
    component: () => import("./Pages/StructionsFirstGame")
}, 
{
    path: "/AdminPage",
    name: "AdminPage",
    component: () => import("./Pages/AdminPage")
},
]

export default routes;