export default {
  template: `
    <section class="email-search">
      <input type="text" class="search" placeholder="Search mail" v-model="emailSearchVal"/>
      <button class="search" @click="emitSearch()">Search</button>
    </section>
  `,

  data() {
    return {
      emailSearchVal: null
    }
  },

  methods: {
    emitSearch() {
      this.$emit('searchFilter', this.emailSearchVal)
    }
  }
}