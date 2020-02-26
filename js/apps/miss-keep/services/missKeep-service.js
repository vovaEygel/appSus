var notes = [{
        type: "noteText",
        isPinned: true,
        title: "hello",
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "noteImg",
        isPinned: true,
        title: "hello",
        info: {
            url: "https://live.staticflickr.com/3239/3039406617_2360a8cbed_b.jpg",
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "noteImg",
        isPinned: true,
        title: "hello",
        info: {
            url: "https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "noteTodos",
        title: "hello",
        isPinned: true,
        info: {
            todos: [
                { txt: "Do that", doneAt: null, isDone: false },
                { txt: "Do this", doneAt: 187111111, isDone: false }
            ]
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "noteVideo",
        title: "james bond",
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/embed/thW0RDsPVXM',
        },
        style: {
            backgroundColor: "#00d"
        }
    }
];

function saveNote() {

}

function addNote(note) {

}

function getNotes() {
    return Promise.resolve(notes);
}
export const noteService = {
    getNotes
}