completeTask = function(element){
    checktask = element.parentNode.parentNode;
    checktask.classList.add('hidden-task');
    
    var date = new Date();

    formatDate = (date)=>{
        var monthNameShort = date.toLocaleString("en-US", { month: "short" });
        var formatted_date = date.getDate() + "  " + monthNameShort + "  " + date.getFullYear();
        return formatted_date;
    }

    var completeDate  = element.parentNode.nextElementSibling.nextElementSibling;
    completeDate.innerHTML = formatDate(date);

    dinamicDate--
    document.getElementById("task-incompleted").innerText = dinamicDate + " " +  "Incompleted Tasks";

}