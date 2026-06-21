function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add("correct");
    } else {
        button.classList.add("wrong");
    }

    // 讓同一題答完不能一直點
    let buttons = button.parentElement.querySelectorAll("button");

    buttons.forEach(function(item) {
        item.disabled = true;
    });
}

function checkFillAnswer() {

    let answer = document.getElementById("answer1").value;

    let result = document.getElementById("fill-result");


    if (answer === "龍潭") {

        result.innerHTML = "🎉 答對了！甘家堡埤塘位於桃園市龍潭區。";

        result.style.color = "green";

    } else {

        result.innerHTML = "❌ 答錯了，再試一次！";

        result.style.color = "red";

    }
}
