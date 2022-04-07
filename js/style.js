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
        document.getElementById("table-content").innerHTML += '<tbody><td></td><td>' +newDate.title+ '</td><td>' +newDate.limit + '</td><td>' + newDate.description + '</td><td></td></tbody>'
        task.style = 'display: none'
        if(style.display == 'none'){
            table.style = 'display: block'
        }
    }
}