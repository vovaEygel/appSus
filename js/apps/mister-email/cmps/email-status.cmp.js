export default {
  template: `
    <section class="email-status">
      <p v-if="emailStatus">
        <span class="fa fa-check"></span>
        {{emailStatus.readsCount}}/{{emailStatus.emailsCount}} Emails
      </p>
    </section>
  `,
  
  props: ['emailStatus']
}