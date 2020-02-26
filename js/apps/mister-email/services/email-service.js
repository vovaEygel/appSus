import {utilsService} from '../../../services/utils-service.js'

var emails = [
  _createEmail('Snoop Dog', 'snoop@gmail.com', 'Yo', 'Wassap', false),
  _createEmail('Evan You', 'evan.vue@gmail.com', 'Angublahhh', 'My Vue is better', true),
  _createEmail('Shahar Hason', 'mahaluz@gmail.com','Important Message', 'Shoshi!', false),
]

function getEmails() {
  return Promise.resolve(emails);
}

function _createEmail(from, fromEmail, subject, body, isRead) {
  return {
    id: utilsService.makeId(),
    from,
    fromEmail,
    subject,
    body,
    isRead,
    sentAt: moment().format('h:mm:ss A'),
    isExpended: false
  }
}

export const emailService = {
  getEmails
}

