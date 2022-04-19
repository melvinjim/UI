 deleteBtn = function(element){
    document.getElementById('deleteLineRow').onclick = () => {
        deleteLineBtn = element.parentNode.parentNode.parentNode;
        deleteLineBtn.parentNode.removeChild(deleteLineBtn);
    }
}