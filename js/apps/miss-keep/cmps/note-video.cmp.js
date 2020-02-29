import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus.service.js'

export default {
    template: `
    <section  class="note-video-cmp">
        <div class="note-content-container">
            <iframe v-if="info" width="420" height="315" :src="info.url"></iframe>
            <div class="control-btns">
                <a class="fa fa-film fa-2x"></a>
                <!-- <a class="button fa fa-paint-brush note-type fa-2x"></a> -->
                <a class="button fa fa fa-pencil note-type fa-2x"
                   @click="edit"
                   :class="{'editing' : editing}"></a>
                <a @click="$emit('remove', id)" class="button fa fa fa-trash-o fa-2x"></a>
            </div>
        </div>
    </section>
    `,
    props: ['info', 'id', 'type'],
    data() {
        return {
            editing: false,
            isClicked: false,
        }
    },
    methods: {
        edit() {
            eventBus.$emit('edit', { type: this.type, id: this.id, info: this.info })
            this.editing = !this.editing
        },
        saveNote() {
            noteService.updateNote(this.id)
        },
    },
}