export default {
  template: `
    <section class="navbar flex" :class="{'menu-open' : isMenuOpen}">
      <router-link exact to="/">
        <img class="logo" src="../../img/AppsusLogo.png"/>
      </router-link>
      <div class="nav-links flex flex-column align-center" :class="{'menu-open': isMenuOpen}">
        <router-link exact to="/" v-if="isMenuOpen">
          <img class="logo" src="../../img/AppsusLogo.png"/>
        </router-link>
        <!-- <router-link exact to="/"></router-link> -->
        <router-link to="/mr-email">Mr Email</router-link>
        <router-link to="/miss-keep">Miss Keep</router-link>
        <router-link to="/about">About</router-link>
      </div>
        <img class="hamburger-menu" src="../../img/hamburger.png" @click="toggleMenu">
    </section>
  `,

  data() {
    return {
      isMenuOpen: false
    }
  },

  computed: {

  },

  methods: {
    toggleMenu() {
      console.log('open menu')
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}