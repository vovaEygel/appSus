import homePage from './pages/home-page.js'
import missKeep from './apps/miss-keep/pages/missKeep-app.cmp.js'
import aboutPage from './pages/about-page.js'
import mrEmail from './apps/mister-email/pages/email-app.js'
import emailDetails from './apps/mister-email/pages/email-details.js'
import emailNavbar from './apps/mister-email/pages/email-navbar.js'


const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/miss-keep',
        component: missKeep
    },
    {
        path: '/mr-email',
        component: mrEmail,
        children: [{
            path: '',
            component: emailNavbar
        }]
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/email-details/:emailId?',
        component: emailDetails,
        children: [{
            path: '',
            component: emailNavbar
        }]
    },
]

export default routes