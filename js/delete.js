 deleteBtn = function(element){
    document.getElementById('deleteLineRow').onclick = () => {
        deleteLineBtn = element.parentElement.parentNode.parentNode;
        deleteLineBtn.parentNode.removeChild(deleteLineBtn);

        if(dinamicDate == 0){
            document.getElementById("task-incompleted").innerText = "0" + " " +  "Incompleted Tasks";
        } else {
            dinamicDate--
            document.getElementById("task-incompleted").innerText = dinamicDate + " " +  "Incompleted Tasks";
        }
    }
}