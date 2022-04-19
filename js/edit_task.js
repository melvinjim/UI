editTask = function(element){
    document.getElementById("title-newtask").innerHTML =  "Edit Task";
    create = document.getElementById("create-task");
    createStyle = getComputedStyle(create);
    edit = document.getElementById("edit-task");
    editStyle = getComputedStyle(edit);

    if(style.display == 'block'){
        table.style = 'display: none';

        if(styleTask.display == 'none'){
            task.style = 'display: block';
        };
    };

    if(createStyle.display == 'flex'){
        document.getElementById('create-task').style.display = 'none';

        if(editStyle.display == 'none'){
            document.getElementById('edit-task').style.display = 'block';
        };
    };

    row = element.parentNode.parentNode.parentNode;
    tasks = row.getElementsByClassName("row-info");
    console.log(tasks[0])
    title = tasks[0].dataset.title;
    limitDate = tasks[0].dataset.limitDate;
    document.getElementById("title").value = title;
    document.getElementById("limit-date").value = limitDate;

    description = tasks[0].dataset.description;
    if(description != undefined){
        document.getElementById("description").value = description;
    }
}

updateTask = function(){
    function setTaskValues(title, limitDate, description){
        this.title = title;
        this.limitDate = limitDate;
        this.description = description;
    };

    newTitleCapture = document.getElementById("title").value;
    newLimitDateCapture = document.getElementById("limit-date").value;
    newDescriptionCapture = document.getElementById("description").value;

    newData = new setTaskValues(newTitleCapture, newLimitDateCapture, newDescriptionCapture);

    tasks = row.getElementsByClassName("row-info");

    newdataTitle = row.getElementsByClassName("newdata");

    newTitleCapture = newData.title
    newLimitDateCapture = newData.limitDate
    newDescriptionCapture = newData.description

    tasks[0].dataset.title = newTitleCapture;
    tasks[0].dataset.limitDate = newLimitDateCapture;
    tasks[0].dataset.description = newDescriptionCapture;
    newdataTitle[0].innerHTML = newTitleCapture

    if(styleTask.display == 'block'){
        task.style = 'display: none';
        if(style.display == 'none'){
            table.style = 'display: block';
        }
    };
};