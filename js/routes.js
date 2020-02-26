import homePage from './pages/home-page.js'
import mrEmail from './apps/mister-email/pages/email-app.cmp.js'
import aboutPage from './pages/about-page.js'

const routes = [
  {
    path: '/',
    component: homePage
  },
  {
    path: '/mr-email',
    component: mrEmail
  },
  {
    path: '/miss-keep',
    component: missKeep
  },
  {
    path: '/miss-book',
    component: missBook
  },
  {
    path: '/about',
    component: aboutPage
  },
]

export default routes
