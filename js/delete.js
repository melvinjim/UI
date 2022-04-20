 deleteBtn = function(element){
    document.getElementById('deleteLineRow').onclick = () => {
        deleteLineBtn = element.parentElement.parentNode.parentNode;
        deleteLineBtn.parentNode.removeChild(deleteLineBtn);
    }
}