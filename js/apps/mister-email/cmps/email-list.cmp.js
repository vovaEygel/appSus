import emailPreview from './email-preview.cmp.js'

export default {
  template: `
    <section class="email-list">
      <h1>Email List</h1>
      <email-preview></email-preview>
    </section>
  `,
  
  components: {
    emailPreview
  }
}