console.log('hi this is js app')
showNotes()

let addBtn = document.getElementById('addBtn')
let text = document.getElementById('addTxt')
let Title = document.getElementById('tilTxt')

// let titletxt = document.getElementById('tilTxt')

// addBtn.setAttribute('disabled', 'disabled')


// // adding the disable function 
// addBtn.addEventListener('keyup', () => {
//     if (text.value.length == 0) {
//         addBtn.setAttribute('disabled', 'disabled')
//     } else {
//         addBtn.removeAttribute('disabled', 'disabled')
//     };
// });

// store the note data in localStorage 

addBtn.addEventListener('click', function (e) {

    // let newNotes = document.getElementById('newNotes')
    let note = localStorage.getItem('note')
    if (note == null) {
        noteObj = []

    }
    else {
        noteObj = JSON.parse(note)
    };
    let newObj ={
        MTitle : Title.value,
        Mtext : text.value
    }
    noteObj.push(newObj)
    localStorage.setItem('note', JSON.stringify(noteObj))
    text.value = "";
    Title.value = "";
    // console.log(noteObj)
    showNotes()
});



// show the data on the page 
function showNotes() {
    let newNotes = document.getElementById('newNotes')
    let note = localStorage.getItem('note')
    if (note == null) {
        noteObj = []

    }
    else {
        noteObj = JSON.parse(note)
    };
    let html = "";
    noteObj.forEach(function (element, intex) {
        html += `<div class="card my-3 mx-3 noteCards" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">${element.MTitle}-${intex + 1} </h5>
            <p class="card-text"> ${element.Mtext} </p>
            <button id="${intex}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div>`

    });

    if (noteObj.length != 0) {
        newNotes.innerHTML = html
    } else {
        newNotes.innerText = `Let's try the note manege your time!!`
    }

}

function deleteNote(intex) {
    let note = localStorage.getItem('note')
    if (note == null) {
        noteObj = []

    }
    else {
        noteObj = JSON.parse(note)
    };
    noteObj.splice(intex, 1)
    localStorage.setItem('note', JSON.stringify(noteObj))
    showNotes()
}

let seachTxt = document.getElementById('searchTxt')
seachTxt.addEventListener('input', function () {
    let inputVlu = seachTxt.value;
    // console.log(inputVlu)
    let noteCard = document.getElementsByClassName('noteCards');
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;

        if (cardTxt.includes(inputVlu)) {
            element.style.display = 'block'
        }
        // else if(cardTxt.){

        // }
        else {
            element.style.display = 'none'
        }
    })
})