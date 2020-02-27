import { utilsService } from '../../../services/utils-service.js';
import { storageService } from '../../../services/storage-service.js'

const NOTES_KEY = 'notes';


// var notesArray = [{}]


var notesArray = [{
        type: "noteText",
        info: {
            txt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi quibusdam modi doloremque explicabo tenetur assumenda commodi dolorum magnam? Exercitationem, maxime architecto ut repudiandae odit explicabo quod veritatis voluptatibus minima eligendi esse nobis, obcaecati possimus rem, voluptate quisquam et distinctio tempore error cum ea officia beatae animi! Deleniti, facere cupiditate?",
        },
    },
    {
        type: "noteVideo",
        info: { url: "https://www.youtube.com/watch?v=ZNwz6wj1yRs" },
    },
    {
        type: "noteVideo",
        info: { url: "https://www.youtube.com/watch?v=tgI6PjEq0O8" },
    },
    {
        type: "noteImg",
        info: { url: "https://live.staticflickr.com/3239/3039406617_2360a8cbed_b.jpg" },
    }, {
        type: "noteImg",
        info: { url: "https://www.rd.com/wp-content/uploads/2019/05/american-curl-kitten.jpg" },
    }, {
        type: "noteImg",
        info: { url: "https://live.staticflickr.com/3239/3039406617_2360a8cbed_b.jpg" },
    }
]



var notes = _createNotes()

console.log(notesArray)

//move to utils
function convertYoutubeUrl(inputLink) {
    console.log(inputLink)
    if (!inputLink) return;
    let newLink = inputLink.url.split('v=')
    return 'https://www.youtube.com/embed/' + newLink[1];

    // if (typeof inputLink === 'string' && inputLink.includes('v=')) {
    // } else {
    //     console.log(inputLink.url)
    //     return inputLink.url;
    // }
    return inputLink
}

function _createNote(note) {

    const { type, info } = note

    switch (note.type) {
        case 'noteText':
            return {
                id: utilsService.makeId(),
                type: type,
                isPinned: true,
                info: { txt: info },
                style: {
                    backgroundColor: "#00d"
                }
            }
        case 'noteImg':
            return {
                id: utilsService.makeId(),
                type: type,
                isPinned: true,
                info: info,
                style: {
                    backgroundColor: "#00d"
                }
            }
        case 'noteTodos':
            return {
                id: utilsService.makeId(),
                type: type,
                isPinned: true,
                info: note.info,
                style: {
                    backgroundColor: "#00d"
                }
            }
        case 'noteVideo':
            // console.log(info)
            let newUrl = convertYoutubeUrl(note.info);
            return {
                id: utilsService.makeId(),
                type: type,
                isPinned: true,
                info: { url: newUrl },
                style: {
                    backgroundColor: "#00d"
                }
            }
        default:
            break;
    }
}

function _addNote(note) {
    notes.unshift(_createNote(note));
    storageService.store(NOTES_KEY, notes);
}

function getNotes() {
    storageService.load(NOTES_KEY)
    return Promise.resolve(notes);
}
export const noteService = {
    getNotes,
    _addNote
}

//============================================================================>>>>
//============================================================================>>>>
//============================================================================>>>>


function _createNotes() {
    var notes = storageService.load(NOTES_KEY)
    if (!notes) {
        if (!notesArray) return
        notes = notesArray.map(_createNote)
        storageService.store(NOTES_KEY, notes)
    }
    return notes;
}
// function _createNotes() {
//     var notes = storageService.load(NOTES_KEY)
//     if (!notes) {
//         notes = notesArray
//         storageService.store(NOTES_KEY, notes)
//     }
//     return notes;
// }
//============================================================================>>>>
//============================================================================>>>>
//============================================================================>>>>
// var notesArray = [{
//         id: "goOU4i8l",
//         type: "noteText",
//         isPinned: true,
//         info: { txt: "seths" },
//         style: { backgroundColor: "#00d" },
//     }, {
//         id: "K3pRGe7R",
//         type: "noteVideo",
//         isPinned: true,
//         info: {
//             url: "https://www.youtube.com/watch?v=OtLRQdjmFvs"
//         },
//         style: { backgroundColor: "#00d" },
//     },
//     {
//         id: "rT8Eo9rl",
//         type: "noteVideo",
//         isPinned: true,
//         info: { url: "https://www.youtube.com/watch?v=yYDJvnDfB2w" },
//         style: { backgroundColor: "#00d" },
//     },
//     {
//         id: "DL2MQkAe",
//         type: "noteVideo",
//         isPinned: true,
//         info: { url: "https://www.youtube.com/watch?v=ms20W9gYtUI&list=RDD3R1kISgcoo&index=4" },
//         style: { backgroundColor: "#00d" },
//     },
//     {
//         id: "JDJ59ibn",
//         type: "noteVideo",
//         isPinned: true,
//         info: { url: "https://www.youtube.com/watch?v=ZNwz6wj1yRs" },
//         style: { backgroundColor: "#00d" },
//     },
//     {
//         id: "UpZo5ALH",
//         type: "noteImg",
//         isPinned: true,
//         info: { url: "https://live.staticflickr.com/3239/3039406617_2360a8cbed_b.jpg" },
//         style: { backgroundColor: "#00d" },
//     },
//     {
//         id: "BAyngLkj",
//         type: "noteImg",
//         isPinned: true,
//         info: {
//             url: "https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
//         },
//         style: { backgroundColor: "#00d" },
//     },
//     {
//         id: "tGtmas9n",
//         type: "noteText",
//         isPinned: true,
//         style: { backgroundColor: "#00d" },
//     }
// ]



//============================================================================>>>>
//============================================================================>>>>
//============================================================================>>>>
// = {
//         id: 'agr293ha',
//         type: "noteText",
//         isPinned: true,
//         // title: "hello",
//         info: {
//             txt: "Fullstack Me Baby!"
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     }
// var notesArray = [{
//         id: 'agr293ha',
//         type: "noteText",
//         isPinned: true,
//         // title: "hello",
//         info: {
//             txt: "Fullstack Me Baby!"
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     },
//     {
//         id: 'JsF422dv',
//         type: 'noteImg',
//         isPinned: true,
//         // title: "hello",
//         info: {
//             url: "https://live.staticflickr.com/3239/3039406617_2360a8cbed_b.jpg",
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     },
//     {
//         id: 'ewgw892d',
//         type: "noteImg",
//         isPinned: true,
//         // title: "hello",
//         info: {
//             url: "https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
//         },
//         style: {
//             backgroundColor: "#00d"
//         }

//     },
//     {
//         id: 'FJ9P8P3T',
//         type: "noteTodos",
//         // title: "hello",
//         isPinned: true,
//         info: {
//             todos: [
//                 { txt: "Do that Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur quam minima doloribus adipisci ducimus?", doneAt: null, isDone: false },
//                 { txt: "consectetur adipisicing elit. Magni, reprehenderit.", doneAt: 187111111, isDone: false }
//             ]
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     },
//     {
//         id: 'mf20asff',
//         type: "noteVideo",
//         // title: "james bond",
//         isPinned: true,
//         info: {
//             url: 'https://www.youtube.com/watch?v=75NKedbGqSU',
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     },
//     {
//         id: 'fvj9834f',
//         type: "noteVideo",
//         // title: "james bond",
//         isPinned: true,
//         info: {
//             url: 'https://www.youtube.com/watch?v=k3JM9zoKGmw',
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     },
//     {
//         id: 'megf3240',
//         type: "noteVideo",
//         // title: "james bond",
//         isPinned: true,
//         info: {
//             url: 'https://www.youtube.com/watch?v=e4393i2-OWk',
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     }
// ];