import { noteService } from '../services/missKeep-service.js'

export default {
    template: `
     <section class="note-add-cmp">
        <input type="text" :placeholder="placeHolder" v-model="info" />
        <div class="note-type-selection-btns">
            <a @click="selectType('noteText')"
               class="button fa fa-font fa-2x" >
            </a>
            <a @click="selectType('noteImg')"
               class="button fa fa-image fa-2x">
            </a>
            <a @click="selectType('noteTodos')" 
               class="button fa fa-list fa-2x">
            </a>
            <a @click="selectType('noteVideo')" 
               class="button fa fa-caret-square-o-right fa-2x">
            </a>
            <a @click="addNote()"
               class="button fa fa-plus fa-2x">
            </a>
        </div>
     </section>
    `,
    data() {
        return {
            note: null,
            info: null,
            selectedType: 'Add note...',
        }
    },
    methods: {
        selectType(type) {
            this.selectedType = type;
        },
        addNote() {
            let newNoteData = { type: this.selectedType, info: this.info }
            noteService.addNote(newNoteData)
            this.selectedType = null;
            this.note = null;
            this.info = null;
        }
    },
    computed: {
        placeHolder() {
            if (this.selectedType === 'noteText')
                return 'Add note...';
            if (this.selectedType === 'noteImg')
                return 'Enter image URL...';
            if (this.selectedType === 'noteTodos')
                return 'Enter comma separated list...';
            if (this.selectedType === 'noteVideo')
                return 'Enter video URL...';
        },
        buttonHover() {
            return {

            }
        }
    },
    watch: {
        info() {
            // console.log(this.info)
            // console.log(this.selectedType)
        }
    },
}