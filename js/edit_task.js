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
    title = tasks[0].dataset.title;
    limitDate = tasks[0].dataset.limitDate;
    document.getElementById("title").value = title;
    document.getElementById("limit-date").value = limitDate;

    description = tasks[0].dataset.description;
    if(description != undefined){
        document.getElementById("description").value = description;
    }
}

updateTask = function(element){
    function setTaskValues(title, limitDate, description){
        this.title = title;
        this.limitDate = limitDate;
        this.description = description;
    };

    uno = element.parentNode;
    console.log(uno)

    titleCapture = document.getElementById("title").value;
    limitDateCapture = document.getElementById("limit-date").value;
    descriptionCapture = document.getElementById("description").value;

    newDate = new setTaskValues(titleCapture, limitDateCapture, descriptionCapture);

    newTitleCapture= titleCapture;
    newDate.title = newTitleCapture; 
    newLimitDateCapture = limitDateCapture;
    newDate.limitDate = newLimitDateCapture;
    newDescriptionCapture = descriptionCapture;
    newDate.description = newDescriptionCapture;
    
    rowInfoNewDate = document.getElementsByClassName("row-info");
    titleNewDate = rowInfoNewDate[0].dataset.title;
    limitNewDate = rowInfoNewDate[0].dataset.limitDate;
    descriptionNewDate = rowInfoNewDate[0].dataset.description;
    titleNewDate = newTitleCapture;
    limitNewDate = newLimitDateCapture;
    descriptionNewDate = newDescriptionCapture;

    titleNewDate = titleCapture;
    limitNewDate = limitDateCapture;
    descriptionNewDate = descriptionCapture;
    console.log(titleCapture);
    console.log(limitDateCapture);
    console.log(descriptionCapture);

    document.getElementById("title").value = titleCapture;
    if(styleTask.display == 'block'){
        task.style = 'display: none';
        if(style.display == 'none'){
            table.style = 'display: block';
        }
    };
};