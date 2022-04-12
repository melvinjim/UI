pencilEdit = function(element){
    document.getElementById("title-newtask").innerHTML =  "Edit Task"
    create = document.getElementById("create-task");
    createStyle = getComputedStyle(create);
    edit = document.getElementById("edit-task");
    editStyle = getComputedStyle(edit);

    if(style.display == 'block'){
        table.style = 'display: none'
        if(styleTask.display == 'none'){
            task.style = 'display: block'
        }
    }

    if(createStyle.display == 'flex'){
        document.getElementById('create-task').style.display = 'none';
        if(editStyle.display == 'none'){
            document.getElementById('edit-task').style.display = 'block';
        }
    }

    var row = element.parentNode.parentNode.parentNode
    var tasks = row.getElementsByClassName("row-info")
    var title = tasks[0].dataset.title
    var limit = tasks[0].dataset.limit
    var description = tasks[0].dataset.description
    document.getElementById("title").value = title 
    document.getElementById("limit").value = limit
    document.getElementById("description").value = description
}
