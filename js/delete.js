deleteBtn = function(element){
    deleteLineBtn = element.parentNode.parentNode.parentNode;
    console.log(deleteLineBtn)
}

 function deleteRow(element) {
    deleteLineBtn = element.parentNode.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.lastElementChild.lastElementChild.lastElementChild.parentNode.lastElementChild.lastElementChild;
    console.log(deleteLineBtn)
    deleteLineBtn.parentNode.removeChild(deleteLineBtn);
    console.log(deleteLineBtn)
}