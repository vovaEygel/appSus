import { noteService } from '../services/missKeep-service.js'

export default {
    template: `
     <section class="note-add-cmp">
        <input type="text" :placeholder="placeHolder" v-model="info" />
        <div class="note-type-selection-btns">
            <a @click="selectType('noteText')" class="button fa fa-font fa-2x" ></a>
            <a @click="selectType('noteImg')" class="button fa fa-image fa-2x"></a>
            <a @click="selectType('noteTodo')" class="button fa fa-list fa-2x"></a>
            <a @click="selectType('noteVideo')" class="button fa fa-caret-square-o-right fa-2x"></a>
            <a @click="addNote()" class="button fa fa-plus fa-2x"></a>
        </div>
     </section>
    `,
    data() {
        return {
            note: null,
            info: null,
            selectedType: null
        }
    },
    methods: {
        selectType(type) {
            this.selectedType = type;
        },
        addNote() {
            console.log(this.info)
            noteService._addNote({ type: this.selectedType, info: this.info })
            this.selectedType = null;
            this.note = null;
            this.info = null;
        }
    },
    computed: {
        placeHolder() {
            if (this.selectedType === 'noteText')
                return 'add note...';
            if (this.selectedType === 'noteImg')
                return 'Enter image URL...';
            if (this.selectedType === 'noteTodo')
                return 'Enter comma separated list...';
            if (this.selectedType === 'noteVideo')
                return 'Enter video URL...';
        }
    },
    watch: {
        info() {
            // console.log(this.info)
            // console.log(this.selectedType)
        }
    }
}