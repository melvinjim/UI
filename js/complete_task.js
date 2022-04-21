completeTask = function(element){
    checktask = element.parentNode.parentNode;
    checktask.classList.add('hidden-task');

    var date = new Date();
    var months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    formatDate = (date)=>{
        var formatted_date = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
        return formatted_date;
    }
    
    var completeDate  = element.parentNode.nextElementSibling.nextElementSibling;
    completeDate.innerHTML = formatDate(date)
}