
let forms = document.querySelector('#add-book');
let list = document.querySelector('#itemList');

//form submit event
forms.addEventListener('submit', addBook);

//DELETE EVENT
list.addEventListener('click', removeItem);

//add item function
function addBook(e){
	e.preventDefault();

//select new input
let newItem = document.querySelector('#item').value;

//create new li and add classname
let li = document.createElement('li');
li.className = 'list-group-item';

//append child
li.appendChild(document.createTextNode(newItem));

//create delete button element
let deleteBtn = document.createElement('button');

 //addclasses to delete button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';



deleteBtn.appendChild(document.createTextNode('Delete'));

li.appendChild(deleteBtn);

list.appendChild(li);

}


//FUNCTION OF REMOVE ITEMS

 function removeItem(e){
 	if (e.target.classList.contains('delete')) {
 		if(confirm('Are You Sure?')){
 			let li = e.target.parentElement;
 			list.removeChild(li);
 		}
 	}
 }
















