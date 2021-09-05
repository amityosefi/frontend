import Main from "./Pages/MainPage.vue";

const routes = [{
    path: "/",
    name: "main",
    component: Main
},
{
    path: "/main",
    name: "main",
    component: Main
},
{
    path: "/FullImagePage",
    name: "FullImagePage",
    component: () =>
    import ("./Pages/FullImagePage.vue")
}
]

export default routes;