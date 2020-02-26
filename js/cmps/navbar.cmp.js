export default {
    template: `
    <section class="navbar">
      <span><img class="nav-img" src=""/></span>
      <router-link exact to="/">
        <h1 class="navbar-title">Appsus</h1>
      </router-link>
      <div class="nav-links">
        <router-link exact to="/"></router-link>
        <router-link to="/mr-email">Mr Email</router-link>
        <router-link to="/miss-keep">Miss Keep</router-link>
        <router-link to="/miss-books">Miss Books</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </section>
  `,
}