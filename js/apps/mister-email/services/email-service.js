import {utilsService} from '../../../services/utils-service.js'
import {storageService} from '../../../services/storage-service.js';

const EMAILS_KEY = 'emails'

var emails = _createEmails();
var readCount = 0;

function _createEmails() {
  var emails = storageService.load(EMAILS_KEY)
  if (!emails || !emails.length) {
      emails = [
        _createEmail('Snoop Dog', 'snoop@gmail.com', 'Yo', false),
        _createEmail('Evan You', 'evan.vue@gmail.com', 'Angublahhh', false),
        _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
        _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
        _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
        _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
        _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
        _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
        _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
        _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
        _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
        _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
        _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
        _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message', false),
      ]
      storageService.store(EMAILS_KEY, emails);
  }
  return emails;
}

function getEmails() {
  return Promise.resolve(emails);
}

function getEmail(id) {
  let currEmail = emails.find(email => email.id === id);
  return Promise.resolve(currEmail);
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

function deleteEmail(id) {
  let idx = emails.findIndex(email => email.id === id);
  if(idx === -1) return;
  emails.splice(idx, 1);
  storageService.store(EMAILS_KEY, emails)
  return Promise.resolve('Email has been removed')
}

function increaseReadCount(currEmail) {
  if (currEmail.isRead) return;
  readCount++;
}

function decreaseReadCount() {
    if (readCount === 0) return;
    readCount--;
}

function getReadCount() {
  return readCount;
}

export const emailService = {
  getEmails,
  getEmail,
  deleteEmail,
  increaseReadCount,
  decreaseReadCount,
  getReadCount,
  readCount
}