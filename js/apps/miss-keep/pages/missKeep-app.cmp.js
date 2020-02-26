import noteImg from '../cmps/note-img.cmp.js'
import noteVideo from '../cmps/note-video.cmp.js'
import noteTxt from '../cmps/note-txt.cmp.js'
import noteTodos from '../cmps/note-todos.cmp.js'

export default {
    template: `
        <section class="miss-keep-app">
            <h1>miss-keep-app</h1>
            <note-img></note-img>
            <note-txt></note-txt>
            <note-todos></note-todos>
        </section>
    `,
    components: {
        noteImg,
        noteVideo,
        noteTxt,
        noteTodos
    }
}