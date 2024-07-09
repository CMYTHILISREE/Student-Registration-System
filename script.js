//Event to trigger Javascript Execution
document.addEventListener("DOMContentLoaded",function(){

     
//copy all the input id values to the dom
    const studentform = document.getElementById("StudentForm");
    const name = document.getElementById("StudentName");
    const id = document.getElementById("StudentId");
    const Studentclass = document.getElementById("StudentClass");
    const address = document.getElementById("StudentAddress");
    const email = document.getElementById("StudentEmail");
    const contact = document.getElementById("StudentContact");
    const Table = document.querySelector("#Student-Table tbody");

    
//Add input values and trim the gap and submit it in the Student Record Table
studentform.addEventListener("submit",(event) => {
// Prevent the default form submit function 
    event.preventDefault();

    const StudentName = name.value.trim();
    const StudentId = id.value.trim(); 
    const StudentClass = Studentclass.value.trim(); 
    const StudentAddress = address.value.trim();
    const StudentEmail = email.value.trim();
    const StudentContact = contact.value.trim();   

//Check all the input values added or not. If it is added follow the steps
if (StudentName && StudentId && StudentClass && StudentAddress && StudentEmail && StudentContact) {
    
//Created a table row and table data to store name
    const StudentRecords = document.createElement("tr");
    const RecordName = document.createElement("td");   
//Storing the Student name in the Student Record Table        
    RecordName.textContent = StudentName;
    StudentRecords.appendChild(RecordName);

//Created a table data and storing the Student id in the Student Record Table 
    const RecordId = document.createElement("td");
    RecordId.textContent = StudentId;
    StudentRecords.appendChild(RecordId);

//Created a table data and storing the Student class in the Student Record Table
    const RecordClass = document.createElement("td");
    RecordClass.textContent = StudentClass;
    StudentRecords.appendChild(RecordClass);

////Created a table data and storing the Student address in the Student Record Table
    const RecordAddress = document.createElement("td");
    RecordAddress.textContent = StudentAddress;
    StudentRecords.appendChild(RecordAddress);

//Created a table data and storing the Student email-id in the Student Record Table       
    const RecordEmail = document.createElement("td");
    RecordEmail.textContent = StudentEmail;
    StudentRecords.appendChild(RecordEmail);

//Created a table data and storing the Student contact-no in the Student Record Table
    const RecordContact = document.createElement("td");
    RecordContact.textContent = StudentContact;
    StudentRecords.appendChild(RecordContact);

    

//create a table data and give edit option 
    const Action = document.createElement("td");
    const UpdateAction = document.createElement("button");
    UpdateAction.textContent = "Edit";
    UpdateAction.classList.add("edit-button");
    Action.appendChild(UpdateAction);
    
                           
        
//create a table data and give edit option
    const DeleteAction = document.createElement("button");
    DeleteAction.textContent = "Delete";
    DeleteAction.classList.add("delete-button");
    Action.appendChild(DeleteAction);

    
   
//Adding the Action data and store it in the Table
    StudentRecords.appendChild(Action);
    Table.appendChild(StudentRecords);

//Store the values in local storage
localStorage.setItem("name",name.value); 
localStorage.setItem("id",id.value); 
localStorage.setItem("class",Studentclass.value); 
localStorage.setItem("address",address.value); 
localStorage.setItem("email",email.value); 
localStorage.setItem("contact",contact.value);    
    
 
alert("Registered Successfully");


//Reassign empty values in the submit event
event.target.reset();


//Delete button event handler
DeleteAction.addEventListener("click", function(){
    confirm("Are you sure you want to delete this student?");
    Table.removeChild(StudentRecords);
});

//Update button event handler
UpdateAction.addEventListener("click", (update) => {
//copy the Student record into the student form id
    name.value = StudentName;
    id.value = StudentId;
    Studentclass.value = StudentClass;
    address.value = StudentAddress;
    email.value = StudentEmail;
    contact.value = StudentContact; 

    document.querySelector("button").classList.remove("edit-button");
    document.querySelector("button").classList.add("update-button");

    Table.removeChild(StudentRecords);
    
});
    document.querySelector("button").classList.add("update-button");
    
}


});


});








