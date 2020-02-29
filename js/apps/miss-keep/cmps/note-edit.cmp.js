// import { noteService } from '../services/missKeep-service.js'
import { eventBus } from '../../../services/event-bus.service.js'

export default {
    template: `
    <div v-if="editing" class="edit-section">
        <input type="text" v-model="infoEdit"/>
         <a class="button fa fa-check fa-2x" @click="save"></a>
    </div>
    `,
    props: ['info', 'id', 'type'],
    data() {
        return {
            isClicked: false,
            hover: false,
            editing: false,
            infoEdit: null,
        }
    },
    methods: {
        save() {
            console.log('saved')
            eventBus.$emit('saved', { id: this.id, type: this.type, info: this.infoEdit })
            this.editing = !this.editing;
        },
        toggleEditing(inputNote) {
            if (this.type === inputNote.type &&
                this.id === inputNote.id) {
                this.editing = !this.editing;
            }
        }
    },
    computed: {
        text() {
            if (this.type === 'noteText')
                this.infoEdit = this.info.txt
            if (this.type === 'noteImg')
                this.infoEdit = this.info.url
            if (this.type === 'noteTodos')
                this.infoEdit = this.info.todos
            if (this.type === 'noteVideo')
                this.infoEdit = this.info.url
        },
    },
    created() {
        this.text
        eventBus.$on('edit', (noteForEdit) => {
            this.toggleEditing(noteForEdit)
        })
    }
}