let theInput = document.querySelector('.add-task input');
let theAddButton = document.querySelector('.add-task .plus');
let tasksContainer=document.querySelector('.tasks-container');
let tasksCount = document.querySelector('.tasks-count span');
let taskCompleted = document.querySelector('.tasks-completed span');
let taskContent = document.querySelector('.tasks-content    ')

//focuse on input field 
window.onload= function () {
    theInput.focus();
    
};
theAddButton.onclick = function(){
    if(theInput.value === ""){
          console.log("AAAAAAAA")

    }else{
        let noTasksMassage = document.querySelector('.no-tasks-massage');   
        if (document.body.contains(document.querySelector(".no-tasks-massage")))
        noTasksMassage.remove();
        let mainSpan = document.createElement('span');
        let deleteElement = document.createElement('span');
        let text = document.createTextNode(theInput.value);
        let deletText = document.createTextNode('Delete');
        mainSpan.appendChild(text);
        mainSpan.className='task-box';
        deleteElement.appendChild(deletText);
        deleteElement.className="delete";
        mainSpan.appendChild(deleteElement);
        taskContent.appendChild(mainSpan)
        calculateTasks();

    }
};
    document.addEventListener('click',function(e){
        if (e.target.className == 'delete'){
            e.target.parentNode.remove();
            if (tasksContainer.childElementCount == 0){
                createNoTasks();

            }
        }
        if (e.target.classList.contains('task-box')){
            e.target.classList.toggle('finished');
        }
        calculateTasks();
    });
    // document.querySelector('.delete').onclick = function (){
    //     document.querySelector(".task-box").remove()
    // }
    function createNoTasks(){
        let msgSpan = document.createElement('span');
        let msgText = document.createTextNode('no massages to show');
        msgSpan.appendChild(msgText);
        msgSpan.className = 'no-tasks-message';
        tasksContainer.appendChild(msgSpan)
    }
    function calculateTasks(){
        tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
        taskCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;


    }

    

