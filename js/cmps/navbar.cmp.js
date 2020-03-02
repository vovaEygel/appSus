export default {
    template: `
    <section class="navbar" :class="{'menu-open' : isMenuOpen}">
      <router-link exact to="/">
      <img class="logo" src="././img/appsuslogo.png"/>
    </router-link>
    <div class="nav-links">
      <router-link exact to="/"></router-link>
      <router-link to="/mr-email">Mr Email</router-link>
      <router-link to="/miss-keep">Miss Keep</router-link>
      <!-- <router-link to="/miss-books">Miss Books</router-link> -->
      <router-link to="/about">About</router-link>
      <button class="side-menu-btn" @click="toggleMenu">☰</button>
      </div>
    </section>
  `,
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            console.log('open menu')
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}