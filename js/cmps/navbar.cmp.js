export default {
    template: `
    <section class="navbar" :class="{'menu-open' : isMenuOpen}">
      <span><img class="nav-img" src=""/></span>
      <router-link exact to="/">
      <h1 class="navbar-title">Appsu$</h1>
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