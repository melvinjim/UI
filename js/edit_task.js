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

updateTask = function(){
    function setTaskValues(title, limitDate, description){
        this.title = title;
        this.limitDate = limitDate;
        this.description = description;
    };

    var titleCapture = document.getElementById("title").value;
    var limitCapture = document.getElementById("limit-date").value;
    var descriptionCapture = document.getElementById("description").value;

    newDate = new setTaskValues(titleCapture, limitCapture, descriptionCapture);

    if(styleTask.display == 'block'){
        newTitleCapture= titleCapture;
        newDate.title = newTitleCapture; 
        document.getElementsByClassName("newdata").value = newTitleCapture;
        task.style = 'display: none';

        if(style.display == 'none'){
            table.style = 'display: block';
        }
    };
};