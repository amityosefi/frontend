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
    path: "/FullImagePage",
    name: "FullImagePage",
    component: () =>
    import ("./Pages/FullImagePage.vue")
}
]

export default routes;