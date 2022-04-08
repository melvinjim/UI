var add = function(){
    table = document.getElementById("table");
    style = getComputedStyle(table);
    task = document.getElementById("task");
    styleTask = getComputedStyle(task)
    document.getElementById("title").value = " ";
    document.getElementById("description").value = " ";
    document.getElementById("limit").value = " ";

    if(style.display == 'block'){
        table.style = 'display: none'
        if(styleTask.display == 'none'){
            task.style = 'display: block'
        }
    }
    else{
        table.style = 'display: block'
    }
}

var cancel = function(){
    if(styleTask.display == 'block'){
        task.style = 'display: none'
        if(style.display == 'none'){
            table.style = 'display: block'
        }
    }
}

var capture = function(){
    function datos(title,limit,description){
        this.title=title;
        this.limit=limit;
        this.description=description;
    }
    var titleCapture = document.getElementById("title").value;
    var limitCapture = document.getElementById("limit").value;
    var descriptionCapture = document.getElementById("description").value;
    newDate = new datos(titleCapture,limitCapture,descriptionCapture)
    console.log(newDate)
    addData();
}
var baseDatos= [];
function addData(){
    if (styleTask.display == 'block'){
        baseDatos.push(newDate);
        document.getElementById("tbody-content").innerHTML += '<td><input type="checkbox" id="#" name="#" value="#" class="checkbox icon"><label for="#"></label></td><td data-title="'+newDate.title+'" data-limit="'+newDate.limit+'" data-description="'+newDate.description+'" > <span class="newdata">'+newDate.title+ '</span></td><td></td><td><a href="#"><i class="icons-edit fa-solid fa-pencil"></i></a><a href="#"><i class="icons-trash fa-solid fa-trash-can"></i></a></td>'
        task.style = 'display: none'
        if(style.display == 'none'){
            table.style = 'display: block'
        }
    }
}

