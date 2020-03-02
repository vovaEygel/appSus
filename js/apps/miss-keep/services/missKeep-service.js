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
            url: 'https://www.youtube.com/watch?v=9emXNzqCKyg',
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
            url: "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-15/e35/73512722_151886826189384_7162721487760428238_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=41gaVFLJpY4AX8L36F0&oh=02c25ddd31079c4ae6f6668fd6902a23&oe=5E8D2966",
        },
        style: {
            backgroundColor: "#ecb390"
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
            backgroundColor: "#e7b2a5"
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
            backgroundColor: "#ecdfc8"
        }
    },
    {
        id: 'mf20asff',
        type: "noteImg",
        isPinned: true,
        info: {
            url: 'https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-15/e35/40648086_1126924317471631_6227268562863202437_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=bjYRo-RfN4kAX8M86O8&oh=5f61b55ee3f93d22b173d1f36c128dd3&oe=5E86C20E',
        },
        style: {
            backgroundColor: "#3C153B"
        }
    },
    {
        id: 'megf3207840',
        type: "noteVideo",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/watch?v=pXRviuL6vMY',
        },
        style: {
            backgroundColor: "#8B1E3F"
        }
    },
    {
        id: 'segf32jh40',
        type: "noteVideo",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/watch?v=e4393i2-OWk',
        },
        style: {
            backgroundColor: "#3E6990"
        }
    },
    {
        id: 'segf32jh40',
        type: "noteImg",
        isPinned: true,
        info: {
            url: 'https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-15/e35/22710664_138813613511109_2562871865299173376_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=MofO2eJEljYAX_HRzqY&oh=c1487bc23eafadfd731d32257d1775b7&oe=5E8D222C',
        },
        style: {
            backgroundColor: "#3E6990"
        }
    },
    {
        id: '322vf240',
        type: "noteImg",
        isPinned: true,
        info: {
            url: 'https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-15/e35/22793887_181446519073954_804023710376787968_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=1tz2TA0-szkAX8j2Xbj&oh=3d82d25c90b9a2a30362fbf96fe529af&oe=5E8FD59E',
        },
        style: {
            backgroundColor: "#89BD9E"
        }
    },
    {
        id: '322vf240',
        type: "noteVideo",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/watch?v=O7M7BoJGRNc',
        },
        style: {
            backgroundColor: "#89BD9E"
        }
    },
    {
        id: 'se221gf3240',
        type: "noteImg",
        isPinned: true,
        info: {
            url: 'https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-15/e35/22794049_123962188277697_7813450319299346432_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=gSHXkKjtU7UAX81-pg3&oh=50a8153f05c4572bc3dcf5c55177caa4&oe=5E8D9212',
        },
        style: {
            backgroundColor: "#89BD9E"
        }
    },
    {
        id: 'segf368240',
        type: "noteVideo",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/watch?v=ymlbGb0cDxc',
        },
        style: {
            backgroundColor: "#89BD9E"
        }
    },
    {
        id: 'ag4328P3T',
        type: "noteTodos",
        isPinned: true,
        info: {
            todos: [
                { txt: "Do that  adipisci ducimus?", doneAt: null, isDone: false },
                { txt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Voluptatum, minus! Ipsam, eum!", doneAt: 187111111, isDone: false },
                { txt: " commodi quia odit exercitationem deleniti ab nostrum! Doloremque illo autem repudiandae eius..", doneAt: 187111111, isDone: false },
                { txt: "Natus eveniet eius obcaecati modi aliquam,.", doneAt: 187111111, isDone: false },
                { txt: "amet consectetur adipisicing elit. Minus.", doneAt: 187111111, isDone: false },
                { txt: "Lorem ipsum dolor sit  consequatur quam minima doloribus.", doneAt: 187111111, isDone: false },
                { txt: "consectetur adipisicing elit. Magni, reprehenderit.", doneAt: 187111111, isDone: false }
            ]
        },
        style: {
            backgroundColor: "#a8e6cf"
        }
    },
    {
        id: 'segf368240',
        type: "noteVideo",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/watch?v=Pw-0pbY9JeU',
        },
        style: {
            backgroundColor: "#89BD9E"
        }
    },
    {
        id: 'seg23f3240',
        type: "noteVideo",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/watch?v=F09POwrBn-M&list=RDF09POwrBn-M&start_radio=1',
        },
        style: {
            backgroundColor: "#89BD9E"
        }
    },
    {
        id: 'segf3240',
        type: "noteVideo",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/watch?v=_MzbLQBeR9Y',
        },
        style: {
            backgroundColor: "#89BD9E"
        }
    },
    {
        id: 'segf3240',
        type: "noteImg",
        isPinned: true,
        info: {
            url: 'https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-15/e35/80634309_607383710087615_3292294156991756060_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=zG7xZPMYRCIAX_lEfPP&oh=5234dbb403ab430150c069f262f38860&oe=5E87A51A',
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
            backgroundColor: utilsService.getRandomColor()
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
        // console.log(note)
    if (note.style === null)
        newNote.style = note.style;
    // console.log(newNote)
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
                // console.log(newNote.info)
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