var name, password, done, error ;

function signup() {
    name = document.getElementById("name").value;
    password = document.getElementById("password").value;
    confrim = document.getElementById("confrim").value
    error = "PLEASE WRITE CORRECTLY ";
    done = "Congrats you sing right now"

    if (confrim != password){
        document.getElementById("results").innerHTML = error;
    }
    else {
        document.getElementById("results").innerHTML = done;
    }
}