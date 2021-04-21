window.open("https://cupofdirtfordinner.github.io/ifyouleavethispage/");
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'It looks like you have been editing something or not idk. '
    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
}); 
