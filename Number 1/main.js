function change() {
    let message = document.getElementById("para-change");
    var newMessage = document.createElement('newMessage');
    newMessage.innerHTML = "Finally, you clicked the button";
    message.appendChild(newMessage);
}