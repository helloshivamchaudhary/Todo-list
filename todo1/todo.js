let  todolist=[{item:'', duedate:''}];
displayvalueinpage();

function clickaction(){

    let userInputElemint = document.querySelector('.userinput');
    let userInputElemintvalue= userInputElemint.value;
   
   
    

    let dateElemint= document.querySelector('.date');
     let datevalue = dateElemint.value;
    

     todolist.push({item:userInputElemintvalue , duedate:datevalue});
     dateElemint.value='';
     userInputElemint.value='';

     displayvalueinpage();

}


function displayvalueinpage() {

    let displayvalue = document.querySelector('.displayvalue');



   

    let newhtml= '';
    for (let i = 1; i < todolist.length; i++) {
        let item = todolist[i].item;
        let duedate= todolist[i].duedate;
        newhtml += `<div>
            <span>${item}</span>
            <span>${duedate}</span>
            <button onclick="todolist.splice(${i},1); displayvalueinpage();" >Delete</button>
        </div>`;
      
        
    }
    displayvalue.innerHTML= newhtml;
    
    
}