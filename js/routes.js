import homePage from './pages/home-page.js';
import missKeep from './apps/miss-keep/pages/missKeep-app.cmp.js';
import aboutPage from './pages/about-page.js';
// import mrEmail from './apps/mister-email/pages/';
// import missBooks from './apps/mister-email/pages/';


const routes = [
    { path: '/', component: homePage },
    { path: '/miss-keep', component: missKeep },
    // { path: '/mr-email', component: mrEmail },
    // { path: '/miss-books', component: missBooks },
    { path: '/about', component: aboutPage },
]

export default routes;