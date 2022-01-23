const add = document.getElementById('add');
const notes = document.getElementById('notes');
const ns = document.querySelectorAll('.note');
const txts = document.querySelectorAll('textarea');
const edits = document.querySelectorAll('.fa-edit');
const removes = document.querySelectorAll('.fa-trash');

add.addEventListener('click', () => {
    let note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML =
        `<div class="bar">
        <i id="edit" class="fa fa-edit"></i>
        <i id="remove" class="fa fa-trash"></i>
    </div>
    <div class="txt">
        <textarea disabled name="note" id="notetxt" cols="30" rows="10"></textarea>
    </div>`;
    note.addEventListener('click', e => {
        if (e.target.id == 'edit') {
            var txt = note.lastElementChild.firstElementChild;
            if (txt.disabled) {
                txt.disabled = false;
                txt.classList.add('active');
                txt.focus();
            } else {
                txt.disabled = true;
                txt.classList.remove('active');
            }
        }
        if (e.target.id == 'remove') {
            console.log('?');
            note.remove();
        }
    })
    note.focus();
    notes.appendChild(note);
})
