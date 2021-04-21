window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'It looks like you have been editing something or not idk. '
    window.open("https://www.dirtcool.tk");
    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
}); 
