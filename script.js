console.log('notes');
showNotes();


//add button action and to store in local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e)=>{
    let addTxt = document.getElementById('addTxt');
   
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value='';
    showNotes();



})

//funtion to display notes
function showNotes(){

    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html = '';
    notesObj.forEach((element,index) => {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id='${index}' onclick=deleteNote(${index}) class="btn btn-primary">Delete</button>
        </div>
    </div>`;
        
    });

    let notesElm = document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerText = "Nope..nothing's here"
    }



     
}

//function to delete node
function  deleteNote(index){
    console.log('deleting', index);
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}

let search = document.getElementById('searchTxt');
search.addEventListener('input', ()=>{
    

    let inputval = search.value.toLowerCase();
    //console.log(inputval);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach((element)=>{

        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display = 'block';

        }
        else{
            element.style.display="none";
        }

          
    })


});

let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',()=>{
    

    let inputval = search.value.toLowerCase();
    //console.log(inputval);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach((element)=>{

        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display = 'block';

        }
        else{
            element.style.display="none";
        }

          
    })


});