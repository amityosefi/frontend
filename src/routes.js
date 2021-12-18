import Main from "./Pages/MainPage.vue";

const routes = [{
    path: "/",
    name: "main",
    component: Main
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
    path: "/FirstGame",
    name: "FirstGame",
    component: () => import("./Pages/FirstGamePage")
},
{
    path: "/SecondGamePage",
    name: "SecondGamePage",
    component: () => import("./Pages/SecondGamePage")
},
]

export default routes;