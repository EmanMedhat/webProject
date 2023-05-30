function confirmDel (el) {
    var element = el;
    var x = window.confirm("Do You Really Want To Delete This Student ?");
    if (x){
       element.remove();
    }
}
function confirmChan(el) {
    var element = el;
    var text = element.children[1].innerHTML;
    var x = window.confirm("Do You Really Want To Change This Student's Status ?");
    if (x){
        if (text == "Inactive"){
            element.children[1].innerHTML = "Active";
        }
        else{
            element.children[1].innerHTML = "Inactive";
        }
    }
}