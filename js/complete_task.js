completeTask = function(element){
    run = element.parentNode.parentNode;
    console.log(run)
    tables = document.getElementsByClassName("datos");
    styles = getComputedStyle(table);
    if(styles.display == 'revert'){
        tables.styles = 'display: none';
    }
}