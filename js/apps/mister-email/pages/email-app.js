import {emailService} from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailSearch from '../cmps/email-search.cmp.js'
import emailSort from '../cmps/email-sort.cmp.js'
import { eventBus } from '../../../services/event-bus.service.js'


export default {
  template: `
    <section v-if="emailsToDisplay" class="email-app flex">
      <router-view class="child-navbar" @toggleCompose="toggleCompose" :emailsStatus="emailsStatus"></router-view>
      <div class="email-filters-list flex flex-column">
        <div class="filters flex justify-center">
          <email-filter @setFilter="setFilter"></email-filter>
          <email-search @searchFilter="searchFilter"></email-search>
          <email-sort @emailsSort="emailsSort"></email-sort>
        </div>
        <email-list :emails="emailsToDisplay"></email-list>
      </div>
    </section>
    `,
  
  components: {
    emailList,
    emailFilter,
    emailSearch,
    emailSort
  },

  data() {
    return {
      emails: null,
      isCompose: false,
      emailsStatus: {
        emailsCount: null,
        readsCount: null
      },
      emailsToDisplay: null,
    }
  },

  created() {
    emailService.getEmails()
      .then(emails => this.emails = emails)
      .then(() => this.emailsToDisplay = this.emails)
      .then(() => {
        this.emailsStatus.emailsCount = this.countEmails
        this.emailsStatus.readsCount = this.countReads
      })
    eventBus.$on('starredEmails', () => {
      this.emailsToDisplay = emailService.starredEmails()
    }),
    eventBus.$on('sentMail', () => {
      this.emailsToDisplay = emailService.sentMail()
    }),
    eventBus.$on('onIndexClick', () => {
      emailService.getEmails()
        .then(emails => this.emailsToDisplay = emails)
    })
  },

  methods: {
    toggleCompose(isCompose) {
      this.isCompose = isCompose
    },
    setFilter(selectedOption) {
      this.emailsToDisplay = emailService.emailsFilter(selectedOption)
    },
    searchFilter(val) {
      this.emailsToDisplay = emailService.emailsSearch(val)
    },
    emailsSort(val) {
      emailService.emailsSort(val);
    }
  },

  computed: {
    countEmails() {
      return this.emails.length
    },
    countReads() {
      let reads = 0
      this.emails.forEach(email => email.isRead ? reads++ : reads)
      return reads
    }
  },
}