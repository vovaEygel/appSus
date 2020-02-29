export default {
  template: `
    <section class="email-filter">
      <select ref="options" class="emails-state" @click="emitFilter()">
        <option value="all" selected>All</option>
        <option value="read">Read</option>
        <option value="Unread">Unread</option>
      </select>
    </section>
  `,

  data() {
    return {
      selectedOption: null,
    }
  },

  methods: {
    emitFilter() {
      let elOptions = this.$refs.options
      this.selectedOption = elOptions.value
      this.$emit('setFilter', this.selectedOption)
    }
  },
}