document.getElementById("btnSend").addEventListener("click", function () {
    alert("From: " + document.getElementById("txtFrom").value +
        ", Subject: " + document.getElementById("txtSubject").value +
        ", Message: " + document.getElementById("txtMessage").value + "\n\n Slash Approves");


    $("#picBand").fadeToggle("slow");

})