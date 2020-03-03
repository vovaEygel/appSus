import {
    utilsService,
} from '../../../services/utils-service.js'
import {
    storageService
} from '../../../services/storage-service.js';

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
            _createEmail('Kyle Simpson ', 'jsMaster@gmail.com', `You Don't Know JS`),
            _createEmail('Son Goku', 'draball@gmail.com', 'Kamehameha'),
            _createEmail('Chuck Norris', 'boom@gmail.com', 'Run For Your Life'),
            _createEmail('Zlatan Ibrahimovic', 'huh@gmail.com', 'Norris Who?'),
            _createEmail('Shahar Hason', 'mahaluz@gmail.com', 'Shoshi!'),
            _createEmail('Jimmy Page', 'ledz@gmail.com', 'Too Many Stairs'),
            _createEmail('Jimi Hendrix', 'fender@gmail.com', 'My Guitar is on FIRE'),
            _createEmail('Bibi', 'v4@gmail.com', 'Get ready to roll again!'),
            _createEmail('Yair Lapid', 'kahl@gmail.com', 'Sha Rega'),
            _createEmail('Gantz', 'kahl@gmail.com', 'Yonit Yonit Yo Yo Yonit'),
            _createEmail('Snoop Dog', 'snoop@gmail.com', 'Im Gonna Sign this Guy'),
            _createEmail('Benet', 'yamina@gmail.com', 'Enough Already'),
            _createEmail('Shauli', 'parlam@gmail.com', 'Take Some Pita Al Agaz'),
            _createEmail('Reuven', 'parlam@gmail.com', `That's the Format`),
            _createEmail('Hector', 'parlam@gmail.com', `Our Shauli?`),
            _createEmail('Kyle Simpson', 'feMasters@gmail.com', `Hey Left Side`),
            _createEmail('Neta Barzilai', 'euvison@gmail.com', `Not Your Toy`),
            _createEmail('Big Brother', 'bigB@gmail.com', `Pam Pam, Pam Pam Pam`),
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

function _createEmail(from, fromEmail, subject, body = LOREM, isComposed = false) {
    return {
        id: utilsService.makeId(),
        from,
        fromEmail,
        subject,
        body,
        timestamp: Date.now(),
        sentAt: moment().calendar(),
        isRead: false,
        isExpended: false,
        isStarred: false,
        isComposed,
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

function receiveEmail(from, fromEmail, subject, body, isComposed) {
    let receivedEmail = _createEmail(from, fromEmail, subject, body, isComposed);
    emails.unshift(receivedEmail);
    storageService.store(EMAILS_KEY, emails);
}

function addReply(id, from, fromEmail, subject, body) {
    let currReply = {
        id: utilsService.makeId(),
        from,
        fromEmail,
        subject,
        body,
        timestamp: Date.now(),
        sentAt: Date.now(),
    }
    let currEmail = emails.find(email => email.id === id);
    currEmail.replys.unshift(currReply);
    storageService.store(EMAILS_KEY, emails)
}

function saveEmails() {
    storageService.store(EMAILS_KEY, emails);
}

function toggleEmailStar(id) {
    let currEmail = emails.find(email => email.id === id);
    currEmail.isStarred = !currEmail.isStarred;
    saveEmails();
    return currEmail
}

function starredEmails() {
    return emails.filter(email => email.isStarred)
}

function sentMail() {
    return emails.filter(email => email.isComposed)
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
    val === 'subject' ?
        emails.sort(sortBySubject) :
        emails.sort((a, b) => a.sentAt - b.sentAt)
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
    toggleEmailStar,
    starredEmails,
    emailsFilter,
    emailsSearch,
    emailsSort,
    addReply,
    sentMail
}