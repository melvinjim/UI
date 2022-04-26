var addTask = function(){
    table = document.getElementById("table");
    style = getComputedStyle(table);
    task = document.getElementById("task");
    styleTask = getComputedStyle(task)
    create = document.getElementById("create-task");
    createStyle = getComputedStyle(create);
    edit = document.getElementById("edit-task");
    editStyle = getComputedStyle(edit);
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("limit-date").value = "";

    if(style.display == 'block'){
        table.style = 'display: none';

        if(styleTask.display == 'none'){
            document.getElementById("title-newtask").innerHTML =  "New Task"
            task.style = 'display: block'
            document.getElementById("title").focus();
        }
    } else {
        table.style = 'display: block'
    }

    if(createStyle.display == 'none'){
        document.getElementById('create-task').style.display = 'flex';

        if(editStyle.display == 'block'){
            document.getElementById('edit-task').style.display = 'none';
        }
    };
};

var cancel = function(){
    if(styleTask.display == 'block'){
        task.style = 'display: none';

        if(style.display == 'none'){
            table.style = 'display: block'
        }
    }
}

var createTask = function(){
    function setTaskValues(title, limitDate, description){
        this.title = title;
        this.limitDate = limitDate;
        this.description = description;
    }

    var titleCapture = document.getElementById("title").value;
    var limitDateCapture = document.getElementById("limit-date").value;
    var descriptionCapture = document.getElementById("description").value;
    
    newData = new setTaskValues(titleCapture, limitDateCapture, descriptionCapture);

    createRow();

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("limit-date").value = "";

    var counter = document.getElementById("tbody-content");
    var countersIncomplete = counter.getElementsByClassName("datos");
    for (x=0;x<countersIncomplete.length;x++){
        taskIncompleted = countersIncomplete.length
        document.getElementById("task-incompleted").innerText = taskIncompleted + " " +  "Incompleted Tasks";
    }
}

count = 0; 

function createRow(){
    if (styleTask.display == 'block'){
        document.getElementById("tbody-content").innerHTML += '<tr class="datos"> <td> <input type="checkbox" id="checkbox-' + count + '" value="#" class="checkbox icon"> <label class="ok-checkbox" for="checkbox-' + count + '" onclick="completeTask(this)"> </label> </td> <td class="row-info" data-title="' + newData.title + '" data-limit-date="' + newData.limitDate + '" data-description="' + newData.description + '"> <span class="newdata">' + newData.title + '</span></td><td class="completed-date"></td><td><a href="#" class="edit"> <i class="icons-edit fa-solid fa-pencil" onclick="editTask(this)"> </i> </a> <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="icons-trash fa-solid fa-trash-can" onclick="deleteBtn(this)"> </i> </a> </td> </tr>';

        task.style = 'display: none';

        if(style.display == 'none'){
            table.style = 'display: block';
        }

        count++
    }
}