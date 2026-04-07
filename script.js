let targetDate = new Date("May 21, 2026 00:00:00").getTime();

function updateCountdown() {
    let now = new Date().getTime();
    let diff = targetDate - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("countdown").textContent =
        days + " days " + hours + " hours " + minutes + " mins";

    if (diff < 0) {
        document.getElementById("countdown").textContent = "Time's up!";
    }
}

setInterval(updateCountdown, 1000);

function addGoal() {
    let input = document.getElementById("goalInput");
    let value = input.value;

    if (value == "") {
        return;
    }

    let li = document.createElement("li");
    li.textContent = value;

    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    document.getElementById("goalList").appendChild(li);

    input.value = "";
}
