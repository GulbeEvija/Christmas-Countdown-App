function christmasCountdown() {
    const christmasDate = new Date ("December 25, 2023 00:00");
    const now = new Date();
    const diff = christmasDate - now;
    


    const msInSeconds = 1000;
    const msInMinutes = 60 * 1000;
    const msInHours = 60 * 60 * 1000;
    const msInDays = 24 * 60 * 60 * 1000;


    const displayDay = Math.floor(diff/msInDays);
    document.querySelector(".days").textContent = displayDay

    const displayHours = Math.floor((diff%msInDays) / msInHours);
    document.querySelector(".hours").textContent = displayHours;

    const displayMinutes = Math.floor((diff%msInHours) / msInMinutes);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMinutes) / msInSeconds);
    document.querySelector(".seconds").textContent = displaySeconds;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        merryChristmas();
    }


}
let timerID = setInterval(christmasCountdown, 1000);


function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!";
    heading.classList.add("red");
}

const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
    document.querySelector("#myAudio").play();
})