pencilEdit = function(){
    document.getElementById("title-newtask").innerHTML =  "Edit Task"
    le = document.getElementById("le");
    ola = getComputedStyle(le);
    lo = document.getElementById("lo");
    chao = getComputedStyle(lo);
    if(style.display == 'block'){
        table.style = 'display: none'
        if(styleTask.display == 'none'){
            task.style = 'display: block'
        }
    }
    if(ola.display == 'flex'){
        document.getElementById('le').style.display = 'none';
        if(chao.display == 'none'){
            document.getElementById('lo').style.display = 'block';
        }
    }

}