// Countdown Timer Script
var countDownDate = new Date("March 15, 2025 10:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + " hari " + hours + " jam " + minutes + " menit " + seconds + " detik ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Waktu Tiba!";
    }
}, 1000);

// Comment Submission Script
document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    var commentSection = document.getElementById("comments-container");
    var newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = "<strong>" + name + "</strong><p>" + comment + "</p>";
    commentSection.appendChild(newComment);
    document.getElementById("comment-form").reset();
});
