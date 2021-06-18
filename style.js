generate = () => {
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let num = "0123456789"
    let special = "!@#$%^&*()~`+_-=|{}?><"
    let size = parseInt(document.getElementById("length").value);
    let num_special = parseInt(document.getElementById("special").value);
    let password = ""
    let i;
    for (i = 0; i < num_special; i++) {
        password += special.charAt(Math.random() * (size / 4));
    }
    for (i = 0; i < size - (num_special); i++) {
        password += lower.charAt(Math.random() * (size / 4));
        password += upper.charAt(Math.random() * (size / 4));
    }
    password = password.split("").sort(function (a, b) { return 0.5 - Math.random() }).join("");
    document.getElementById("output").innerText = password;
}
show = () => {
    let s = document.getElementById("length").value;
    document.getElementsByClassName("len_value").innerText = "length is " + s
}