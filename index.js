document.addEventListener('DOMContentLoaded',function(){
    const newtask = document.getElementById('input-task');
    const addbtn = document.getElementById('add-btn');
    const tasklist = document.getElementById('task-list');

    function createTask(taskinput){
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskinput ;

        const deletebtn = document.createElement('button');
        deletebtn.textContent = "Delete"

        deletebtn.addEventListener('click',function(){
            tasklist.removeChild(li);
        })

        li.appendChild(span);
        li.appendChild(deletebtn);
        return li;
    }
    addbtn.addEventListener('click',function(){
        const taskinput = newtask.value.trim();
        if(taskinput!=''){
            const taskElement = createTask(taskinput);
            tasklist.appendChild(taskElement);
            newtask.value = '';
        }
    })


})