//TO-DO App
// Functionality;
// 1.Enter "List" to show all List
// 2.Enter "Add" to add a task 
// 3.Enter "Remove" to remove a task
// 4.Enter "Quit" to quit todo app

let todo = [];
while(true){
let input = prompt("Enter the Command for To-Do App").toUpperCase();
if(input=="LIST"){
   
    if(todo.length==0){
        console.log("No Task Available")
    }
    else{
        console.warn("-------------")
        console.log("Listing All the Tasks:")
        for(let i=0; i<todo.length; i++){
           console.log(`${i+1}. ${todo[i]} `);
    }
    console.warn("-------------")

}

}
else if(input=="ADD"){
    let new_task_length = +prompt("How many tasks you want to Add?")
    for (i=1;i<=new_task_length;i++){
    let new_task = prompt(`Enter The New Task ${i}:`);
    todo.push(new_task);
    console.log("New Task Added.")
    }
}

else if(input=="REMOVE"){
    let delete_item = +prompt("Which Task You Want to Delete?<br>Enter The Number For it:");
    let deleted_item = todo.splice(delete_item-1,1);
    console.log(`Deleted Item:${deleted_item}`);
}

else if(input=="QUIT"){
    console.log("Todo App Closed")
    break;
}
else{
    console.log("Please Enter Valid Command!");
}
}
