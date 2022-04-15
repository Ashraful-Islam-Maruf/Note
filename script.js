const addbtn = document.getElementById('add');


const Updatedata = () => {
  const textAreadata = document.querySelectorAll('textArea');
  const notes = [];
  
  textAreadata.forEach((note) => {
    return notes.push(note.value);
  });
  
  localStorage.setItem('notes', 
  JSON.stringify(notes));
  
}





const addnewNote = (text = '') => {
  
  const note = document.createElement('div');
  note.classList.add('note');
  
  const htmlData = `
   <div class="oper">
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete">
      <i class="fa-solid fa-trash-can"></i>
    </button>
    </div> 
   <div class = "xtra ${text? "": "hidden"}" > </div>
   
     <textarea class = "${text? "hidden" : ""}" > </textarea>
     
  `;
  note.insertAdjacentHTML('afterbegin',htmlData);
 // console.log(note);
  
  const editbtn = note.querySelector('.edit');
  const delbtn = note.querySelector('.delete');
  const xtra = note.querySelector('.xtra');
    const textArea = note.querySelector('textarea');
    
    textArea.value = text;
    xtra.innerHTML = text;
    
    
delbtn.addEventListener('click',() => {
  note.remove();
      Updatedata();

})

editbtn.addEventListener('click', () => {
    xtra.classList.toggle('hidden');
    textArea.classList.toggle('hidden');

})
  
  textArea.addEventListener('change', (event) =>   {
    const value = event.target.value;
        xtra.innerHTML = value;

    Updatedata();
  })
  
  
  document.body.appendChild(note);
}


const notes = JSON.parse(localStorage.getItem('notes'));

 if (notes){
   notes.forEach( (note) => 
     addnewNote()
   )
 };

addbtn.addEventListener('click', () => {
  addnewNote()
});
