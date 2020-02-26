import emailList from '../cmps/email-list.cmp.js'

export default {
  template: `
    <section class="email-app">
      <h1>EmailApp</h1>
      <email-list></email-list>
    </section>
  `,

  components: {
    emailList
  }
}