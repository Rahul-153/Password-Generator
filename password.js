generate = () => {
    let lower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let num = "0123456789"
    let special = "!@#$%^&*+_-=?"
    let size = parseInt(document.getElementById("length").value);
    let num_special = parseInt(document.getElementById("special").value);
    let num_number = parseInt(document.getElementById("number").value);
    let password = ""
    let i;
    for (i = 0; i < num_special; i++) {
        password += special.charAt(Math.floor(Math.random() * special.length));
    }
    for (i = 0; i < num_number; i++) {
        password += num.charAt(Math.floor(Math.random() * num.length));
    }
    for (i = 0; i < (size - (num_special + num_number)); i++) {
        password += lower.charAt(Math.floor(Math.random() * lower.length));
    }
    password = password.split("").sort(function (a, b) { return 0.5 - Math.random() }).join("");
    document.getElementById("output").innerText = password;
}



