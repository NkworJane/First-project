//SIMPLE CONTACT FORM
let forms = document.querySelector('#form');
let table = document.querySelector('#table');
let tr = document.querySelector('tr');
let td = document.querySelector('td');
let tBody = document.querySelector('#body');

forms.addEventListener('submit', addList);



function addList(e){
	e.preventDefault();

let inputemail = document.querySelector(".inputemail").value;
let inputnumber = document.querySelector(".inputnumber").value;
let inputaddress = document.querySelector(".inputaddress").value;



let  deleteBtn = document.createElement('button');
deleteBtn.className = "btn btn-danger delete";
deleteBtn.appendChild(document.createTextNode('Delete'));

tBody.classList.add("td");
let row = tBody.insertRow(0);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3)


cell1.innerHTML = inputemail.value;
cell2.innerHTML = inputnumber.value;
cell3.innerHTML = inputaddress.value;
cell4.appendChild(deleteBtn);


inputemail.value = " ";
inputnumber.value = " ";
inputaddress.value = " ";
	




}




//DELETE ITEMS

let body =document. querySelector('#body');
 body.addEventListener('click', deleteItem);


 function deleteItem(e){
 	if (e.target.className =='delete')) {
 		if(confirm('Are You Sure?')){
 			let tr = e.target.parentElement;
 			body.deleteRow(0);
 		}
 	}
 }
