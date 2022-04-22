showTask = function(element){
    var arrayShowTAsk = element.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.lastElementChild;
    var travelArray = arrayShowTAsk.getElementsByClassName("hidden-task");
    for (x=0;x<travelArray.length;x++){
        travelArray[x].classList.add("display-tasks");
        travelArray[x].classList.remove("datos");
    }

    var globalClass = arrayShowTAsk.getElementsByClassName("datos");
    for (x=0;x<globalClass.length;x++){
        globalClass[x].classList.add("hidden-task");
    }
}