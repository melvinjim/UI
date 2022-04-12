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
    console.log(row.getElementsByClassName("row-info"))
    var rowinfo = document.getElementsByClassName("row-info");
    var title = rowinfo.dataset-title;
    var limit = rowinfo.dataset-limit;
    var description = rowinfo.dataset-description;
    console.log(title)
}