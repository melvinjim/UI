pencilEdit = function(){
    document.getElementById("title-newtask").innerHTML =  "Edit Task"
    create = document.getElementById("create-task");
    createStyle = getComputedStyle(create);
    edit = document.getElementById("edit-task");
    editStyle = getComputedStyle(edit);
    data = document.getElementsByClassName('datos').value;
    console.log(data)
    console.log(newDate)
    if(style.display == 'block'){
        table.style = 'display: none'
        if(styleTask.display == 'none'){
            task.style = 'display: block'
        }
        
    }if(createStyle.display == 'flex'){
        document.getElementById('create-task').style.display = 'none';
        if(editStyle.display == 'none'){
            document.getElementById('edit-task').style.display = 'block';
        }
    }
}