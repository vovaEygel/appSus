import { utilsService } from '../../../services/utils-service.js';
import { storageService } from '../../../services/storage-service.js'

const NOTES_KEY = 'notes';

var notesArray = [{
        id: 'agr293ha',
        type: "noteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#14FF7D"
        }
    },
    {
        id: 'fvj9834f',
        type: "noteVideo",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/watch?v=O7M7BoJGRNc',
        },
        style: {
            backgroundColor: "#00B268"
        }
    },
    {
        id: 'JsF422dv',
        type: 'noteImg',
        isPinned: true,
        info: {
            url: "https://live.staticflickr.com/3239/3039406617_2360a8cbed_b.jpg",
        },
        style: {
            backgroundColor: "#1B95A0"
        }
    },
    {
        id: 'JscaF422dv',
        type: 'noteImg',
        isPinned: true,
        info: {
            url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo14.jpeg",
        },
        style: {
            backgroundColor: "#046B64"
        }
    },
    {
        id: 'ewgw892d',
        type: "noteImg",
        isPinned: true,
        info: {
            url: "https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
        },
        style: {
            backgroundColor: "#2F4F4F"
        }
    },
    {
        id: 'FJ9P8P3T',
        type: "noteTodos",
        isPinned: true,
        info: {
            todos: [
                { txt: "Do that Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur quam minima doloribus adipisci ducimus?", doneAt: null, isDone: false },
                { txt: "consectetur adipisicing elit. Magni, reprehenderit.", doneAt: 187111111, isDone: false }
            ]
        },
        style: {
            backgroundColor: "#381D2A"
        }
    },
    {
        id: 'mf20asff',
        type: "noteVideo",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/watch?v=vmIUvp0e1bw&t=130s',
        },
        style: {
            backgroundColor: "#3C153B"
        }
    },
    {
        id: 'megf3240',
        type: "noteVideo",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/watch?v=UgBUkn2S2So',
        },
        style: {
            backgroundColor: "#8B1E3F"
        }
    },
    {
        id: 'segf3240',
        type: "noteVideo",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/watch?v=e4393i2-OWk',
        },
        style: {
            backgroundColor: "3E6990"
        }
    },
    {
        id: 'segf3240',
        type: "noteVideo",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/watch?v=A9sOb_r6Hy0',
        },
        style: {
            backgroundColor: "#89BD9E"
        }
    }
];

var notes = _createNotes()

function getEmptyNote() {
    return {
        // id: utilsService.makeId(),
        id: null,
        type: null,
        isPinned: true,
        info: null,
        style: {
            backgroundColor: '#ffffff'
        }
    }
}

function getNotes() {
    notes = storageService.load(NOTES_KEY)
    return Promise.resolve(notes);
}
//============================================================>>>
function updateNote(newNoteData) {
    console.log(newNoteData);
    const note = notes.find(note => note.id === newNoteData.id)
    const idx = notes.findIndex(note => note.id == newNoteData.id)
    let newNote = _createNote({ type: newNoteData.type, info: newNoteData.info })
    newNote.id = newNoteData.id; //bad move, fix later.
    console.log(newNote)
    notes.splice(idx, 1, newNote);
    storageService.store(NOTES_KEY, notes);
    return Promise.resolve('note updated');
}

// function getNoteById(noteId) {
//     const note = notes.find(note => note.id === noteId)
//     console.log(note)
//     return Promise.resolve(note)
// }
//============================================================>>>
function addNote(note) {
    notes.unshift(_createNote(note));
    storageService.store(NOTES_KEY, notes);
}

function removeNote(noteId) {
    const idx = notes.findIndex(note => note.id == noteId)
    notes.splice(idx, 1);
    if (idx === -1) return Promise.reject('did not remove note.');
    storageService.store(NOTES_KEY, notes);
    return Promise.resolve('note removed');
}

function _getEmptyTodo(todoTxt) {
    return {
        txt: todoTxt,
        doneAt: Date.now(),
        isDone: false
    }
}

function _createNote(note) {
    let newNote = getEmptyNote()
    if (newNote.id === null)
        newNote.id = utilsService.makeId()
    newNote.style = note.style;
    console.log(newNote)
    console.log(note)


    //text note
    //====================================================>
    if (note.type === 'noteText') {
        newNote.type = note.type;
        if (typeof note.info === 'string')
            newNote.info = { txt: note.info }
        else
            newNote.info = note.info;
        return newNote;
    }
    //image note
    //====================================================>
    if (note.type === 'noteImg') {
        newNote.type = note.type;
        if (typeof note.info === 'string')
            newNote.info = { url: note.info }
        else
            newNote.info = note.info;
        return newNote;
    }
    //todos note
    //====================================================>
    if (note.type === 'noteTodos') {
        newNote.type = note.type;
        if (typeof note.info === 'string') {
            let todosArray = note.info;
            todosArray = todosArray.split(',');
            newNote.info = { todos: todosArray.map(todo => _getEmptyTodo(todo)) }
            console.log(newNote.info)
        } else {
            newNote.info = note.info;
        }
        return newNote;
    }
    //video note
    //====================================================>
    if (note.type === 'noteVideo') {
        newNote.type = note.type;
        if (typeof note.info === 'string') {
            newNote.info = { url: convertYoutubeUrl(note.info) }
        } else {
            newNote.info = { url: convertYoutubeUrl(note.info.url) };
        }
        return newNote;
    }
}

function _createNotes() {
    var notes = storageService.load(NOTES_KEY)
    if (!notes) {
        if (!notesArray) return
        notes = notesArray.map(_createNote)
        storageService.store(NOTES_KEY, notes)
    }
    return notes;
}

export const noteService = {
    getNotes,
    addNote,
    removeNote,
    updateNote,
    getEmptyNote,
}

function convertYoutubeUrl(inputLink) {
    let videoId = inputLink.split('v=')[1];
    return 'https://www.youtube.com/embed/' + videoId;
}