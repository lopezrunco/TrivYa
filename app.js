const quizData = [
    {
        "category": "Web development",
        "quiz": "Wich language runs in a web browser?",
        "answer": "JavaScript",
        "wrongAnswer1": "Java",
        "wrongAnswer2": "C",
        "wrongAnswer3": "Python",
        "image": "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Web development",
        "quiz": "What does CSS stand for?",
        "answer": "Cascading Style Sheets",
        "wrongAnswer1": "Central Style Sheets",
        "wrongAnswer2": "Cascading Simple Sheets",
        "wrongAnswer3": "Cars SUVs Sailboats",
        "image": "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Web development",
        "quiz": "What does HTML stand for?",
        "answer": "Hypertext Markup Language",
        "wrongAnswer1": "Hypertext Markdow Language",
        "wrongAnswer2": "Hyperloop Machine Language",
        "wrongAnswer3": "Helicopters Terminals Motorboats Lamborginis",
        "image": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Web development",
        "quiz": "What year was JavaScript launched?",
        "answer": "1995",
        "wrongAnswer1": "1996",
        "wrongAnswer2": "1994",
        "wrongAnswer3": "none of the others",
        "image": "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        "category": "Pop Culture",
        "quiz": "What is Hawkeye's real name?",
        "answer": "Clint Barton",
        "wrongAnswer1": "Tony Stark",
        "wrongAnswer2": "Peter Parker",
        "wrongAnswer3": "Frank Castle",
        "image": "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Pop Culture",
        "quiz": "Which Avenger is the only one who could calm the Hulk down?",
        "answer": "Black Widow",
        "wrongAnswer1": "Iron Man",
        "wrongAnswer2": "Thor",
        "wrongAnswer3": "Ant Man",
        "image": "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Pop Culture",
        "quiz": "Night Crawler, member of the X-Men, has what kind of powers?",
        "answer": "Can teleport",
        "wrongAnswer1": "X-Ray vision",
        "wrongAnswer2": "Can fly",
        "wrongAnswer3": "Made shadows with his hands",
        "image": "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Pop Culture",
        "quiz": "What was Superman's birth name?",
        "answer": "Kal-El",
        "wrongAnswer1": "Jor-El",
        "wrongAnswer2": "Sal-El",
        "wrongAnswer3": "Jo-Der",
        "image": "https://images.unsplash.com/photo-1538051046377-5ad74dc62f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
