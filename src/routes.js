import Main from "./Pages/MainPage.vue";

const routes = [{
    path: "/",
    name: "Main",
    component: Main
},
{
    path: "/HomePage",
    name: "HomePage",
    component: () => import("./Pages/HomePage")
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