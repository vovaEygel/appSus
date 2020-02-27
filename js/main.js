import routes from './routes.js'
import navbar from './cmps/navbar.cmp.js'

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    template: `
        <section class="my-app">
			<navbar></navbar>
			<router-view></router-view>
		</section>
  `,
    components: {
        navbar
    }
})