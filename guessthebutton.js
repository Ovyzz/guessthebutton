const random = Math.floor(Math.random() * 3 + 1);

function winningButton (x) {
    if (x === "btn" + random) {
        document.getElementById("alert").innerHTML = "<div class=\"alert alert-success\" role=\"alert\">You won!</div>";
    } else {
        document.getElementById("alert").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">You lose :(</div>";
    }
}
