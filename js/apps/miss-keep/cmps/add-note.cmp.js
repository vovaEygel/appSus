import { noteService } from '../services/missKeep-service.js'

export default {
    template: `
     <section class="note-add-cmp">
        <input type="text" :placeholder="placeHolder" v-model="inputText"/>
        <div class="note-type-selection-btns">
            <a @click="selectType('noteText')"
               class="button fa fa-font fa-2x" 
               :class="{'clicked': btnClicked && selectedType === 'noteText'}">
            </a>
            <a @click="selectType('noteImg')"
               class="button fa fa-image fa-2x"
               :class="{'clicked': btnClicked && selectedType === 'noteImg'}">
            </a>
            <a @click="selectType('noteTodos')" 
               class="button fa fa-list fa-2x"
               :class="{'clicked': btnClicked && selectedType === 'noteTodos'}">
            </a>
            <a @click="selectType('noteVideo')" 
               class="button fa fa-caret-square-o-right fa-2x"
               :class="{'clicked': selectedType === 'noteVideo'}">
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
            btnClicked: false,
            selectedType: null,
            inputText: null,
            dataFromMail: null

        }
    },
    methods: {
        selectType(type) {
            this.btnClicked = !this.btnClicked;
            this.selectedType = type;

        },
        unSelect() {
            if (this.btnClicked) {
                this.btnClicked = !this.btnClicked;
                this.inputText = null
            }
        },

        addNote() {
            console.log(this.info)
            let newNoteData = { type: this.selectedType, info: this.inputText }
            noteService.addNote(newNoteData)
            this.inputText = ''
            this.selectedType = null;
            this.note = null;
            this.info = null;
        },
        clearInput() {
            this.placeHolder;
        }
    },
    computed: {
        placeHolder() {
            if (this.selectedType === null)
                return 'What on your mind?'
            if (this.selectedType === 'noteText')
                return 'Add a note...';
            if (this.selectedType === 'noteImg')
                return 'Enter an image URL...';
            if (this.selectedType === 'noteTodos')
                return 'Enter a comma separated string...';
            if (this.selectedType === 'noteVideo')
                return 'Enter a video URL...';
        },
    },
}