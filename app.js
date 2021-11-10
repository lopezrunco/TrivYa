const quizData = [
    {
        "category": "Technology",
        "quiz": "Wich language runs in a web browser?",
        "answer": "JavaScript",
        "wrongAnswer1": "Java",
        "wrongAnswer2": "C",
        "wrongAnswer3": "Python",
        "image": "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
        "objectFit": "cover"
    },
    {
        "category": "Technology",
        "quiz": "What does CSS stand for?",
        "answer": "Cascading Style Sheets",
        "wrongAnswer1": "Central Style Sheets",
        "wrongAnswer2": "Cascading Simple Sheets",
        "wrongAnswer3": "Cars SUVs Sailboats",
        "image": "https://i.ibb.co/SDjX7PM/jardin-de-las-delicias.jpg",
        "objectFit": "cover"
    },
    {
        "category": "Technology",
        "quiz": "What does HTML stand for?",
        "answer": "Hypertext Markup Language",
        "wrongAnswer1": "Hypertext Markdow Language",
        "wrongAnswer2": "Hyperloop Machine Language",
        "wrongAnswer3": "Helicopters Terminals Motorboats Lamborginis",
        "image": "https://i.ibb.co/SDjX7PM/jardin-de-las-delicias.jpg",
        "objectFit": "cover"
    },
    {
        "category": "Technology",
        "quiz": "What year was JavaScript launched?",
        "answer": "1995",
        "wrongAnswer1": "1996",
        "wrongAnswer2": "1994",
        "wrongAnswer3": "none of the above",
        "image": "https://i.ibb.co/zfM2Vyd/paul-auster.jpg"
    }
]

// On page load, select a new question 
window.onload = function () {
    selectRandomQuestion()
}

let quiz
let possibleAnswers
// Select buttons from DOM and save them on array
correspondingButton = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
]
nQuestions = []

let formulatedQuestions = 0
let rightAnswers = 0

// Choose a random question
function selectRandomQuestion() {
    let n = Math.floor(Math.random() * quizData.length)

    while (nQuestions.includes(n)) {
        n++
        if (n >= quizData.length) {
            n = 0
        }
        if (nQuestions.length == quizData.length) {
            nQuestions = []
        }
    }
    nQuestions.push(n)
    formulatedQuestions++

    chooseQuestion(n)
}

// Choose a question from the question data array
function chooseQuestion(n) {
    // Take on quiz with the index and save it on a variable
    quiz = quizData[n]

    // Select elements from DOM and set the content from the data array
    select_id("category").innerHTML = quiz.category
    select_id("quiz").innerHTML = quiz.quiz
    select_id("number").innerHTML = n

    let pc = rightAnswers

    // Set the score on DOM
    if (formulatedQuestions > 1) {
        select_id("score").innerHTML = pc + "/" + (formulatedQuestions - 1)
    } else {
        select_id("score").innerHTML = ""
    }

    // Set the object fir from the data
    style("image").objectFit = quiz.objectFit

    messAnswers(quiz)

    // Filter the questions without image
    if (quiz.image) {
        // Sets the src from the data array
        select_id("image").setAttribute("src", quiz.image)
        style("image").height = "200px"
        style("image").width = "100%"
    } else {
        // If no image, hide the image element
        style("image").height = "0px"
        style("image").width = "0px"
        setTimeout(() => {
            select_id("image").setAttribute("src", "")
        }, 500);
    }
}

// Mess the answers on the buttons
function messAnswers(quiz) {
    // The array contains all the possible answers
    possibleAnswers = [
        quiz.answer,
        quiz.wrongAnswer1,
        quiz.wrongAnswer2,
        quiz.wrongAnswer3
    ]

    // Mess the array
    possibleAnswers.sort(() => Math.random() - 0.5)

    select_id("btn1").innerHTML = possibleAnswers[0]
    select_id("btn2").innerHTML = possibleAnswers[1]
    select_id("btn3").innerHTML = possibleAnswers[2]
    select_id("btn4").innerHTML = possibleAnswers[3]
}

let disableButtons = false

// This function runs on buttons click. Recibes a index to compare answers with buttons
function press_btn(i) {
    if (disableButtons) {
        return
    }
    disableButtons = true

    // Check if the possible answer is equal to the quiz answer
    if (possibleAnswers[i] == quiz.answer) {

        // Plus one to the right answered questions
        rightAnswers++

        // If the answer is OK, set a green background
        correspondingButton[i].style.background = "radial-gradient(circle, rgba(0,216,0,1) 0%, rgba(136,255,136,1) 100%)"
    } else {

        // If the answer is wrong, set a red background
        correspondingButton[i].style.background = "radial-gradient(circle, rgba(255,57,57,1) 0%, rgba(255,115,115,1) 100%)"
    }

    // Check the possible answers with the question answer
    for (let j = 0; j < 4; j++) {
        if (possibleAnswers[j] == quiz.answer) {

            // Set a green background
            correspondingButton[j].style.background = "radial-gradient(circle, rgba(0,216,0,1) 0%, rgba(136,255,136,1) 100%)"
            break
        }
    }

    // Reboot every 3 seconds
    setTimeout(() => {
        reboot()
        disableButtons = false
    }, 3000);
}

// Reboot the quiz and clean the color of the buttons
function reboot() {
    for (const btn of correspondingButton) {
        btn.style.background = "rgba(255, 255, 255, 0.1)"
    }

    // Choose a new random question
    selectRandomQuestion()
}

// Select an objet from the ID
function select_id(id) {
    return document.getElementById(id)
}

// Select an object CSS from the ID
function style(id) {
    return select_id(id).style
}
