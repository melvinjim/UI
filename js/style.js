var add = function(){
    table = document.getElementById("table");
    style = getComputedStyle(table);
    task = document.getElementById("task");
    styleTask = getComputedStyle(task)

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
        console.log(baseDatos)
        document.getElementById("table-content").innerHTML += '<tbody><td><input type="checkbox" id="unic" name="#" value="#" class="checkbox icon"><label for="unic"></label></td><td style="color: #70c0db;">'+newDate.title+ '</td><td>' +newDate.limit + '</td><td><a href="#"><i class="icons-edit fa-solid fa-pencil"></i></a><a href="#"><i class="icons-trash fa-solid fa-trash-can"></i></a></td></tbody>'
        task.style = 'display: none'
        if(style.display == 'none'){
            table.style = 'display: block'
        }
    }
}