import noteImg from '../cmps/note-img.cmp.js'
import noteVideo from '../cmps/note-video.cmp.js'
import noteText from '../cmps/note-txt.cmp.js'
import noteTodos from '../cmps/note-todos.cmp.js'
import addNote from '../cmps/add-note.cmp.js'
import noteSearch from '../cmps/note-search.cmp.js'
import noteEdit from '../cmps/note-edit.cmp.js'
import { noteService } from '../services/missKeep-service.js'
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus.service.js'


//=========================================================================================>

export default {
    template: `
        <section class="notes">
            <!-- <note-search></note-search> -->
            <add-note></add-note>
            <div class="notes-container">
                <ul class="flex flex-row flex-wrap">
                    <li v-if="notes" v-for="(note, id) in notes">
                        <section class="note">
                            <note-edit 
                            :id="note.id"
                            :type="note.type"
                            :info="note.info"
                            ></note-edit>
                            <component
                                :is="note.type"
                                :info="note.info"
                                :id="note.id"
                                :type="note.type"
                                @remove="removeNote"
                                @click="edit">
                         </component>
                        </section>
                    </li>
                </ul>
            </div>
        </section>
`,
    data() {
        return {
            notes: null,
        }
    },
    created() {
        noteService.getNotes()
            .then(notes => this.notes = notes)
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
        noteSearch,
        noteEdit
    }
}