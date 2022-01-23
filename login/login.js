function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "faiz" && password == "f12345") {
        alert("Login Sukses");
        window.location = "sukses.html";
        return false;
    } else {
        alert("Login Gagal");
        return false;
    }

}