const quizQuestions = [
    {
        questionNum: 1,
        question: "Round 1: Australia - What did Force India's Esteban Ocon achieve for the first time in his F1 career at Melbourne's season opener?",
        answers: {
            a: "Finish a Grand Prix",
            b: "Score a point",
            c: "Beat his team mate",
        },
        correctAnswer: "b"
    },
    {
        questionNum: 2,
        question: "Round 2: China - Max Verstappen's third place for Red Bull ensured that three teams shared the Shanghai podium, but where did the Dutchman start?",
        answers: {
            a: "16th",
            b: "10th",
            c: "4th",
        },
        correctAnswer: "a"
    },
    {
        questionNum: 3,
        question: "Round 3: Bahrain - Valtteri Bottas secured his first F1 pole position in Sakhir, but how many other Finns have qualified first for a Grand Prix?",
        answers: {
            a: "2",
            b: "3",
            c: "4",
        },
        correctAnswer: "b"
    },
    {
        questionNum: 4,
        question: "Round 4: Russia - Haas's Romain Grosjean retired in spectacular fashion at the start in Sochi, after contact with who?",
        answers: {
            a: "Sauber's Marcus Ericsson",
            b: "Toro Rosso's Daniil Kvyat",
            c: "Renault's Jolyon Palmer",
        },
        correctAnswer: "c"
    },
    {
        questionNum: 5,
        question: "Round 5: Spain - Which driver finished a season-best sixth in the Barcelona race?",
        answers: {
            a: "Force India's Esteban Ocon",
            b: "Toro Rosso's Carlos Sainz",
            c: "Renault's Nico Hulkenberg",
        },
        correctAnswer: "c"
    },
    {
        questionNum: 6,
        question: "Round 6: Monaco - Ferrari's one-two in Monte Carlo was the Scuderia's first win in the Principality in how many years?",
        answers: {
            a: "6",
            b: "10",
            c: "16",
        },
        correctAnswer: "c"
    },
    {
        questionNum: 7,
        question: "Round 7: Canada - Why was Toro Rosso's Daniil Kvyat immediately in trouble with the stewards at the beginning of the Montreal race?",
        answers: {
            a: "He caused a collision at the first corner",
            b: "He jumped the start",
            c: "He overtook cars illegally on the formation lap",
        },
        correctAnswer: "c"
    },
    {
        questionNum: 8,
        question: "Round 8: Azerbaijan - The Baku race saw Williams' Lance Stroll become the youngest rookie to do what?",
        answers: {
            a: "Score a world championship point",
            b: "Finish on the podium",
            c: "Start from the front row of the grid",
        },
        correctAnswer: "b"
    },
    {
        questionNum: 9,
        question: "Round 9: Austria - Valtteri Bottas won the Spielberg race by barely half a second, but who was the driver hounding him to the flag?",
        answers: {
            a: "Mercedes' Lewis Hamilton",
            b: "Ferrari's Sebastian Vettel",
            c: "Red Bull's Max Verstappen",
        },
        correctAnswer: "b"
    },
    {
        questionNum: 10,
        question: "Round 10: Great Britain - Lewis Hamilton took his fifth British Grand Prix win in 2017, matching the all-time record for the race set by Alain Prost and which fellow Briton?",
        answers: {
            a: "Jim Clark",
            b: "Graham Hill",
            c: "Jackie Stewart",
        },
        correctAnswer: "a"
    },
    {
        questionNum: 11,
        question: "Round 11: Hungary - Which driver set his (and his team's) only fastest lap of the year in Budapest?",
        answers: {
            a: "Force India's Sergio Perez",
            b: "McLaren's Fernando Alonso",
            c: "Red Bull's Daniel Ricciardo",
        },
        correctAnswer: "b"
    },
    {
        questionNum: 12,
        question: "Round 12: Belgium - The second clash of the race between which team's two drivers brought out the safety car midway through the Spa round?",
        answers: {
            a: "Force India",
            b: "Haas",
            c: "Toro Rosso",
        },
        correctAnswer: "a"
    },
    {
        questionNum: 13,
        question: "Round 13: Italy - Williams became one of only four teams to do what in 2017 in Monza?",
        answers: {
            a: "Win a Grand Prix",
            b: "Qualify on pole position",
            c: "Start from the front row of the grid",
        },
        correctAnswer: "c"
    },
    {
        questionNum: 14,
        question: "Round 14: Singapore - Which two drivers recorded career-best results here (and one also learnt he was to lose his F1 seat to the other)?",
        answers: {
            a: "Carlos Sainz and Daniil Kvyat",
            b: "Carlos Sainz and Jolyon Palmer",
            c: "Daniil Kvyat and Jolyon Palmer",
        },
        correctAnswer: "b"
    },
    {
        questionNum: 15,
        question: "Round 15: Malaysia - Sebastian Vettel infamously crashed into Lance Stroll's Williams on the Sepang slow-down lap, but which driver then gave the Ferrari star a lift back to the pits?",
        answers: {
            a: "Sauber's Pascal Wehrlein",
            b: "Haas's Kevin Magnussen",
            c: "Ferrari's Kimi Raikkonen",
        },
        correctAnswer: "a"
    },
    {
        questionNum: 16,
        question: "Round 16: Japan - Haas brought both cars home in the points at Suzuka. How many times did the team achieve the feat in 2017?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
        },
        correctAnswer: "b"
    },
    {
        questionNum: 17,
        question: "Round 17: USA - New Zealander Brendon Hartley made his F1 race debut in Austin, but in which other motorsport series is he reigning world champion?",
        answers: {
            a: "WRC",
            b: "WEC",
            c: "MotoGP",
        },
        correctAnswer: "b"
    },
    {
        questionNum: 18,
        question: "Round 18: Mexico - Lewis Hamilton wrapped up his fourth world title in Mexico City, but did not feature on the podium. Where did he finish the race?",
        answers: {
            a: "4th",
            b: "6th",
            c: "9th",
        },
        correctAnswer: "c"
    },
    {
        questionNum: 19,
        question: "Round 19: Brazil - Not three, but four race finishers appeared on the Sao Paulo podium: Sebastian Vettel, Valtteri Bottas, Kimi Raikkonen and who else?",
        answers: {
            a: "Lewis Hamilton",
            b: "Max Verstappen",
            c: "Felipe Massa",
        },
        correctAnswer: "c"
    },
    {
        questionNum: 20,
        question: "Round 20: Abu Dhabi - With his second place at Yas Marina, Lewis Hamilton scored points for the 25th race in a row. Which current driver is the only man able to claim a longer scoring streak?",
        answers: {
            a: "Kimi Raikkonen",
            b: "Sebastian Vettel",
            c: "Fernando Alonso",
        },
        correctAnswer: "a"
    },
]




let currentQuestion = 0;
let numCorrect = 0;
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("results");
const startButton = document.getElementById("start");
const submitButton = document.getElementById("submit");
const tryAgainButton = document.getElementById("tryAgain");
const answerImage = document.getElementById("images");

function quizStart() {
    tryAgainButton.style.display = 'none';
    submitButton.style.display = 'none';
    quizContainer.innerHTML = '<h3>Test your knowledge of the 2017 Formula 1 Season</h3>';
}

$("#start").on("click", function () {
    quesToDom(quizQuestions);
    timer.start();
})

//Displays question and answers to DOM
function quesToDom(quizArray) {
    answerImage.style.display = 'none';
    startButton.style.display = 'none';
    tryAgainButton.style.display = 'none';
    submitButton.style.display = 'inline';
    const output = [];
    const answers = [];
    //creates radio button for each answer
    for (letter in quizQuestions[currentQuestion].answers) {
        answers.push(
            `<label>
                    <input type="radio" name="question${quizQuestions[currentQuestion].questionNum}" value="${letter}">
                    ${letter} :
                    ${quizQuestions[currentQuestion].answers[letter]}
                    </label>`
        );
    }
    output.push(
        `<div class="question"> ${quizQuestions[currentQuestion].question} </div>
                <div class="answers"> ${answers.join(' ')} </div>`
    );
    quizContainer.innerHTML = output.join('');
};

//to Dom for wrong answer
function corAnsToDom() {
    if (quizQuestions[currentQuestion].questionNum === quizQuestions.length) {
        submitButton.style.display = 'none'
        const output = [];
        output.push(
            `<div class="question"> ${quizQuestions[currentQuestion].question} </div>
                    <div class="answers"> '<b>The correct answer was - ${quizQuestions[currentQuestion].answers[quizQuestions[currentQuestion].correctAnswer]}</b>' </div>`
        );
        answerImage.style.display = 'inline-block';
        document.getElementById("images").innerHTML = `<img src = "assets/images/${currentQuestion + 1}.jpg">`;
        quizContainer.innerHTML = output.join('');
        setTimeout(gameOver, 3000);

    } else {
        submitButton.style.display = 'none'
        const output = [];
        output.push(
            `<div class="question"> ${quizQuestions[currentQuestion].question} </div>
                <div class="answers"> '<b>The correct answer was - ${quizQuestions[currentQuestion].answers[quizQuestions[currentQuestion].correctAnswer]}</b>' </div>`
        );
        answerImage.style.display = 'inline-block';
        document.getElementById("images").innerHTML = `<img src = "assets/images/${currentQuestion + 1}.jpg">`;
        quizContainer.innerHTML = output.join('');
        currentQuestion++;
        timer.reset();
        setTimeout(quesToDom, 3000);
        setTimeout(timer.start, 3000);
    }
}
//to Dom for right answer
function ansCorToDom() {
    if (quizQuestions[currentQuestion].questionNum === quizQuestions.length) {
        submitButton.style.display = 'none'
        const output = [];
        output.push(
            `<div class="question"> ${quizQuestions[currentQuestion].question} </div>
                    <div class="answers"> '<b>You are right! The answer was - ${quizQuestions[currentQuestion].answers[quizQuestions[currentQuestion].correctAnswer]}</b>' </div>`
        );
        answerImage.style.display = 'inline-block';
        document.getElementById("images").innerHTML = `<img src = "assets/images/${currentQuestion + 1}.jpg">`;
        quizContainer.innerHTML = output.join('');
        setTimeout(gameOver, 3000);
    } else {
        submitButton.style.display = 'none'
        const output = [];
        output.push(
            `<div class="question"> ${quizQuestions[currentQuestion].question} </div>
        <div class="answers"> '<b>You are right! The answer was - ${quizQuestions[currentQuestion].answers[quizQuestions[currentQuestion].correctAnswer]}</b>' </div>`
        );
        answerImage.style.display = 'inline-block';
        document.getElementById("images").innerHTML = `<img src = "assets/images/${currentQuestion + 1}.jpg">`;
        quizContainer.innerHTML = output.join('');
        currentQuestion++;
        timer.reset();
        setTimeout(quesToDom, 3000);
        setTimeout(timer.start, 3000);
    }
}

function gameOver() {
    answerImage.style.display = 'none';
    timer.reset();
    submitButton.style.display = 'none'
    tryAgainButton.style.display = 'inline'
    $(".question").html(`You got ${numCorrect}/${quizQuestions.length} correct`);
    $(".answers").empty();
}

//check answers
$("#submit").on("click", function () {
    if (document.querySelector(`input[name="question${quizQuestions[currentQuestion].questionNum}"]:checked`).value === quizQuestions[currentQuestion].correctAnswer) {
        numCorrect++;
        ansCorToDom();
    } else {
        corAnsToDom();
    }
});

$("#tryAgain").on("click", function () {
    currentQuestion = 0;
    numCorrect = 0;
    timer.start();
    quesToDom(quizQuestions);
    console.log("try again button clicked");
})

//timer stuff
let timerRunning = false;
let intervalId;
$("#timer").text("Time Remaining - 30");

let timer = {
    time: 30,

    reset: function () {
        clearInterval(intervalId);
        timerRunning = false;
        timer.time = 30;
        $("#timer").text("Time Remaining - 30");
    },

    start: function () {
        if (!timerRunning) {
            intervalId = setInterval(timer.count, 1000);
            timerRunning = true;
        }
    },

    count: function () {
        timer.time--;
        if (timer.time === 0 && quizQuestions[currentQuestion].questionNum === quizQuestions.length) {
            gameOver();
        } else if (timer.time === 0) {
            corAnsToDom();
        }
        $("#timer").text(`Time Remaining - ${timer.time}`);
    }
};




quizStart();


