export default {
  template: `
    <section class="navbar flex" :class="{'menu-open' : isMenuOpen}">
      <router-link exact to="/">
        <img class="logo" src="././img/appsuslogo.png"/>
      </router-link>
      <div class="nav-links flex align-center" :class="{'menu-open': isMenuOpen}">
        <router-link exact to="/" class="mobile-nav-logo">
          <img class="logo" src="././img/appsuslogo.png"/>
        </router-link>
        <router-link to="/mr-email" @click.native="closeMobileNav()">Mr Email</router-link>
        <router-link to="/miss-keep" @click.native="closeMobileNav()">Miss Keep</router-link>
        <router-link to="/about" @click.native="closeMobileNav()">About</router-link>
      </div>
        <img class="hamburger-menu" src="././img/hamburger.png" @click="toggleMenu">
    </section>
  `,

  data() {
    return {
      isMenuOpen: false
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMobileNav() {
      this.isMenuOpen = false
    }
  }
}
