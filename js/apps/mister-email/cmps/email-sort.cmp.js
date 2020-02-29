export default {
  template: `
    <section class="email-sort">
      <input type="radio" name="sort-option" value="date" @click="emitSort('date')"/>
      <label for="date">Date</label>
      <input type="radio" name="sort-option" value="subject" @click="emitSort('subject')"/>
      <label for="subject">Subject</label>
    </section>
  `,

  methods: {
    emitSort(val) {
      this.$emit('emailsSort',val)
    }
  },
}