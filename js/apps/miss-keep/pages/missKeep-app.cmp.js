import noteImg from '../cmps/note-img.cmp.js'
import noteVideo from '../cmps/note-video.cmp.js'
import noteText from '../cmps/note-txt.cmp.js'
import noteTodos from '../cmps/note-todos.cmp.js'
import addNote from '../cmps/add-note.cmp.js'
import noteEdit from '../cmps/note-edit.cmp.js'
import {
    noteService
} from '../services/missKeep-service.js'
import {
    eventBus,
    EVENT_SHOW_MSG
} from '../../../services/event-bus.service.js'

//=========================================================================================>

export default {
    template: `
        <section class="notes">
            <div class="notes-container">
                <add-note></add-note>
                <!-- <ul class="flex flex-row flex-wrap"> -->
                <ul>
                    <li v-if="notes" v-for="(note, id) in notes">
                        <section class="note" :style="note.style">
                        <!-- <section class="note" :class="[bg]"> -->
                            <component
                                :is="note.type"
                                :info="note.info"
                                :id="note.id"
                                :type="note.type"
                                
                                @remove="removeNote"
                                @click="edit">
                         </component>
                         <note-edit 
                            :id="note.id"
                            :type="note.type"
                            :info="note.info"
                            ></note-edit>
                        </section>
                    </li>
                </ul>
            </div>
        </section>`,
    data() {
        return {
            notes: null,
        }
    },
    created() {
        noteService.getNotes()
            .then(notes => {
                this.notes = notes
            });

        eventBus.$on('saved', (updatedNote) => {
            console.log(updatedNote);
            noteService.updateNote(updatedNote).then()
        })
    },
    methods: {
        removeNote(noteId) {
            noteService.removeNote(noteId)
                .then(() => {
                    console.log(`note ${noteId} deleted succesfully`);
                    eventBus.$emit(EVENT_SHOW_MSG, {
                        txt: `note ${noteId} deleted succesfully`,
                        type: 'success'
                    })
                })
        },
        edit(noteId) {
            console.log(noteId)
        },
    },
    components: {
        noteImg,
        noteVideo,
        noteText,
        noteTodos,
        addNote,
        noteEdit
    }
}