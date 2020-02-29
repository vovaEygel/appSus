import noteImg from '../cmps/note-img.cmp.js'
import noteVideo from '../cmps/note-video.cmp.js'
import noteText from '../cmps/note-txt.cmp.js'
import noteTodos from '../cmps/note-todos.cmp.js'
import addNote from '../cmps/add-note.cmp.js'
import noteSearch from '../cmps/note-search.cmp.js'
import { noteService } from '../services/missKeep-service.js'

//=========================================================================================>

export default {
    template: `
        <section class="notes">
            <!-- <note-search></note-search> -->
            <add-note></add-note>
            <div class="notes-container">
                <ul class="flex flex-row flex-wrap ">
                    <li v-if="notes" v-for="(note, id) in notes">
                        <component
                            :is="note.type"
                            :info="note.info"
                            :id="note.id"
                            @remove="removeNote">
                        </component>
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
        noteService.getNotes().then(notes => this.notes = notes)
    },
    methods: {
        setAns(idx, ans) {
            this.results.splice(idx, 1, ans)
        },
        removeNote(noteId) {
        }
    },
    components: {
        noteImg,
        noteVideo,
        noteText,
        noteTodos,
        addNote,
        noteSearch
    }
}