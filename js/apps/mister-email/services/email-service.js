import {utilsService, utilService} from '../../../services/utils-service.js'
import {storageService} from '../../../services/storage-service.js';

const EMAILS_KEY = 'emails'
const LOREM = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Esse nostrum repellat neque quia itaque exercitationem? Iure 
        laboriosam doloribus perspiciatis voluptates numquam necessitatibus 
        officia dolorum veritatis. Aliquam impedit praesentium nisi obcaecati.
      `;

var emails = _createEmails();

function _createEmails() {
  var emails = storageService.load(EMAILS_KEY)
  if (!emails || !emails.length) {
    emails = [
      _createEmail('Snoop Dog', 'snoop@gmail.com', 'Wazzaaaa'),
      _createEmail('Evan You', 'evan.vue@gmail.com', 'Angublahhh'),
      _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message'),
      _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message'),
      _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message'),
      _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message'),
      _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message'),
      _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message'),
      _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message'),
      _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message'),
      _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message'),
      _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message'),
      _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message'),
      _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Important Message'),
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

function _createEmail(from, fromEmail, subject, body = LOREM) {
  return {
    id: utilsService.makeId(),
    from,
    fromEmail,
    subject,
    body,
    timestamp: Date.now(),
    sentAt: utilsService.convertTimestamp(Date.now()),
    isRead: false,
    isExpended: false,
    replys: []
  }
}

function deleteEmail(id) {
  let idx = emails.findIndex(email => email.id === id);
  if (idx === -1) return;
  emails.splice(idx, 1);
  storageService.store(EMAILS_KEY, emails)
  return Promise.resolve('Email has been removed')
}

function getReadCount() {
  return readCount;
}

function receiveEmail(from, fromEmail, subject, body = LOREM) {
  let receivedEmail = _createEmail(from, fromEmail, subject, body);
  emails.push(receivedEmail);
  storageService.store(EMAILS_KEY, emails)
}

function saveEmails() {
  storageService.store(EMAILS_KEY, emails)
}

function emailsFilter(val) {
  if (val === 'all') return emails
  else if (val === 'read') return emails.filter(email => email.isRead)
  else return emails.filter(email => !email.isRead)
}

function emailsSearch(val) {
  val = val.toLowerCase();
  return emails.filter(email => {
    return email.subject.toLowerCase().includes(val);
  });
}

function emailsSort(val) {
  val === 'subject' 
    ? emails.sort(sortBySubject)
    : emails.sort((a, b) => a.timestamp - b.timestamp)
}

function sortBySubject(a, b) {
  const emailA = a.subject.toUpperCase();
  const emailB = b.subject.toUpperCase();
  let comparison = 0;
  if (emailA > emailB) comparison = 1;
  else if (emailA < emailB) comparison = -1;
  return comparison;
}

export const emailService = {
  getEmails,
  getEmail,
  deleteEmail,
  getReadCount,
  receiveEmail,
  saveEmails,
  emailsFilter,
  emailsSearch,
  emailsSort
}