$(document).ready(function () {
  let score = 0;
  let currentGroup = 1; // Start with group 1
  const grp1img = ["imgs/1.png", "imgs/2.png", "imgs/3.png"];
  const grp2img = ["imgs/4.png", "imgs/5.png", "imgs/6.png"];
  $("img").click(function () {
    const imgSrc = $(this).attr("src");
    $(this).fadeOut();
    if ((currentGroup === 1 && grp1img.includes(imgSrc)) || (currentGroup === 2 && grp2img.includes(imgSrc))) {
      score += 5;
    }
    else {
      score -= 3;

      if (score < 0) {
        score = 0
      }
      if (score === 0) {
        $("#sc").html(score);
        alert("Game Over")
        location.reload();
      }
    }


    $("#sc").html(score);

    currentGroup = 3 - currentGroup;
  });

  const time = setTimeout(() => {
    $(".pop").fadeIn(1000);
  }, 1000);

  $("#submit").click(function () {
    let name = $("#name").val();
    console.log(name);
    if (name === "") {
      alert("Please enter a valid name");
    } else {
      $("#head2").html(name);

      $(".pop").fadeOut(1000);

      const timerElement = document.getElementById("timer");
      let stopwatchInterval;
      let stopwatchSeconds = 0;

      function updateStopwatchDisplay() {
        const hours = Math.floor(stopwatchSeconds / 3600);
        const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
        const seconds = stopwatchSeconds % 60;
        const formattedTime = `${String(hours).padStart(2, "0")}:${String(
          minutes
        ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        timerElement.textContent = formattedTime;
      }

      function startStopwatch() {
        if (!stopwatchInterval) {
          stopwatchInterval = setInterval(function () {
            stopwatchSeconds++;
            updateStopwatchDisplay();
          }, 1000);
        }
      }

      startStopwatch();
    }
  });

  $("#restart").click(function () {
    let a = confirm("Are you sure?");
    if (a === true) {
      location.reload();
      console.log("Refreshed");
    }
  });
});