import {
  utilsService
} from '../../../services/utils-service.js'

var emails = [
  _createEmail('Snoop Dog', 'snoop@gmail.com', 'Yo', false),
  _createEmail('Evan You', 'evan.vue@gmail.com', 'Angublahhh', false),
  _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
]

function getEmails() {
  return Promise.resolve(emails);
}

function _createEmail(from, fromEmail, subject, isRead) {
  const lorem = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Esse nostrum repellat neque quia itaque exercitationem? Iure 
    laboriosam doloribus perspiciatis voluptates numquam necessitatibus 
    officia dolorum veritatis. Aliquam impedit praesentium nisi obcaecati.
  `;
  return {
    id: utilsService.makeId(),
    from,
    fromEmail,
    subject,
    body: lorem,
    isRead,
    sentAt: moment().format('h:mm:ss A'),
    isExpended: false
  }
}

export const emailService = {
  getEmails
}