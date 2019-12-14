// const submitForm = document.querySelector("#form") ;
// let inputname = document.querySelector(".inputemail");
// let inputnumber = document.querySelector(".inputnumber");
// let inputaddress = document.querySelector(".inputaddress");
// const para1 = document.querySelector(".contact")

// let table = document.querySelector("#table");

// submitForm.addEventListener("submit",form(e));

// let form = function formFunction(e){
// if( inputname.value == " " || inputnumber.value == " " ||  inputaddress.value == " " ){
// 	const h3 = document.creatElement("h3");
// 	h3.appendChild(document.creatTextNode("sorry all input must be fill"))
// 	h3.style.background="red"
// 	h3.insertBefore(submitForm,para1)
// }


// else{	
// e.preventDefault();
// table.classList.add(".table");
// const row = table.insertRow();
// const cell1 = row.insertCell();
// const cell2 = row.insertCell();
// const cell3 = row.insertCell();

// cell1.innerHTML = inputname.value
// cell2.innerHTML = inputnumber.value
// cell3.innerHTML = inputaddress.value



// //cleariung the form 
// inputname.value = " "
// inputnumber.value = " "
// inputaddress.value = " "
// }
// }



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


// let td = document.createElement('td');

// let tr = document.createElement('tr');


let  deleteBtn = document.createElement('button');
deleteBtn.className = "btn btn-danger delete";
deleteBtn.appendChild(document.createTextNode('Delete'));

tBody.classList.add("tr");
let row = tBody.insertRow();
let cell1 = row.insertCell();
let cell2 = row.insertCell();
let cell3 = row.insertCell();
let cell4 = row.insertCell()


cell1.appendChild(document.createTextNode(inputemail));
cell2.appendChild(document.createTextNode(inputnumber));
cell3.appendChild(document.createTextNode(inputaddress));
cell4.appendChild(deleteBtn);

// tr.appendChild(td);


// cell1.innerHTML = inputemail.value
// cell2.innerHTML = inputnumber.value;
// cell3.innerHTML = inputaddress.value;
// cell4.innerHTML = deleteBtn;


// tr.appendChild(td);
// tr.appendChild(deleteBtn);


// tBody.appendChild(tr);

// table.appendChild(tBody);


}




//DELETE ITEMS


 table.addEventListener('click', deleteItem);


 function deleteItem(e){
 	if (e.target.classList.contains('delete')) {
 		if(confirm('Are You Sure?')){
 			let td = e.target.parentElement;
 			table.deleteRow(tr);
 		}
 	}
 }
