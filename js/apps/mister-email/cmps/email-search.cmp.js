export default {
  template: `
    <section class="email-search">
      <input type="text" ref="searchfield" class="emails-search" placeholder="Search mail" v-model="emailSearchVal"/>
      <button class="emails-search-btn" @click="emitSearch()">Search</button>
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
      this.$refs.searchfield.value = ''
    }
  }
}