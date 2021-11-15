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
        "wrongAnswer3": "None of the others",
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
    },
    {
        "category": "Technology & Science",
        "quiz": "What year was the very first model of the iPhone released?",
        "answer": "2007",
        "wrongAnswer1": "2009",
        "wrongAnswer2": "2001",
        "wrongAnswer3": "2010",
        "image": "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Technology & Science",
        "quiz": "What’s the shortcut for the “copy” function on most computers?",
        "answer": "ctrl c",
        "wrongAnswer1": "ctrl v",
        "wrongAnswer2": "ctrl x",
        "wrongAnswer3": "ctrl z",
        "image": "https://images.unsplash.com/photo-1560762484-813fc97650a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Technology & Science",
        "quiz": "What is often seen as the smallest unit of memory?",
        "answer": "Kilobyte",
        "wrongAnswer1": "Megabyte",
        "wrongAnswer2": "Gigabyte",
        "wrongAnswer3": "None of the others",
        "image": "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        "category": "Technology & Science",
        "quiz": "Who is often called the father of the computer?",
        "answer": "Charles Babbage",
        "wrongAnswer1": "Bill Gates",
        "wrongAnswer2": "Steve Jobs",
        "wrongAnswer3": "None of the others",
        "image": "https://images.unsplash.com/photo-1603969409447-ba86143a03f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Technology & Science",
        "quiz": "What is the name of the man who launched eBay back in 1995?",
        "answer": "Pierre Omidyar",
        "wrongAnswer1": "Jeff Bezos",
        "wrongAnswer2": "Mark Zuckerberg",
        "wrongAnswer3": "Fred Lamar",
        "image": "https://images.unsplash.com/photo-1590858078095-24c472408dfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Technology & Science",
        "quiz": "Which email service is owned by Microsoft?",
        "answer": "Hotmail",
        "wrongAnswer1": "Gmail",
        "wrongAnswer2": "Yahoo",
        "wrongAnswer3": "Webmail",
        "image": "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Technology & Science",
        "quiz": "What was Twitter’s original name?",
        "answer": "Twttr",
        "wrongAnswer1": "Twt",
        "wrongAnswer2": "Twee",
        "wrongAnswer3": "Twerto",
        "image": "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
    },
    {
        "category": "Science",
        "quiz": "What part of the atom has no electric charge?",
        "answer": "Neutron",
        "wrongAnswer1": "Electron",
        "wrongAnswer2": "Ribotron",
        "wrongAnswer3": "None of the others",
        "image": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Science",
        "quiz": "What is meteorology the study of?",
        "answer": "The weather",
        "wrongAnswer1": "The sun",
        "wrongAnswer2": "The wind",
        "wrongAnswer3": "None of the others",
        "image": "https://images.unsplash.com/photo-1574780986957-74f4ee225b87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Science",
        "quiz": "Which planet has the most gravity?",
        "answer": "Jupiter",
        "wrongAnswer1": "Venus",
        "wrongAnswer2": "Saturn",
        "wrongAnswer3": "Mars",
        "image": "https://images.unsplash.com/photo-1614314169000-4cf229a1db33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
        "category": "History",
        "quiz": "How many Pyramids of Giza were made?",
        "answer": "Three",
        "wrongAnswer1": "Two",
        "wrongAnswer2": "Four",
        "wrongAnswer3": "Five",
        "image": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "objectFit": "cover"
    },
    {
        "category": "History",
        "quiz": "How long did the Middle Ages last?",
        "answer": "About 1000 years",
        "wrongAnswer1": "About 2000 years",
        "wrongAnswer2": "About 3000 years",
        "wrongAnswer3": "About 4000 years",
        "image": "https://images.unsplash.com/photo-1575626962900-e5f197b69cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "objectFit": "cover"
    },
    {
        "category": "History",
        "quiz": "In which year World War I begin?",
        "answer": "1914",
        "wrongAnswer1": "1911",
        "wrongAnswer2": "1915",
        "wrongAnswer3": "1920",
        "image": "https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "objectFit": "cover"
    },
    {
        "category": "History",
        "quiz": "In which country Adolph Hitler was born?",
        "answer": "Austria",
        "wrongAnswer1": "Germany",
        "wrongAnswer2": "Poland",
        "wrongAnswer3": "France",
        "image": "https://images.unsplash.com/photo-1547306843-f8fea4d65f9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1109&q=80"
    },
    {
        "category": "Mythology",
        "quiz": "What is the name of the home of the Greek Gods?",
        "answer": "Olympus",
        "wrongAnswer1": "Valhalla",
        "wrongAnswer2": "Heaven",
        "wrongAnswer3": "Underworld",
        "image": "https://images.unsplash.com/photo-1601119955552-c848b0a7be67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Mythology",
        "quiz": "What’s the name of the paradise warriors go to after death in Viking mythology?",
        "answer": "Valhalla",
        "wrongAnswer1": "Midgard",
        "wrongAnswer2": "Aurgelmir ",
        "wrongAnswer3": "None of the others",
        "image": "https://images.unsplash.com/photo-1567108077905-f8a10e69a5a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Animal world",
        "quiz": "How long is the gestation period of an African elephant?",
        "answer": "22 months",
        "wrongAnswer1": "20 months",
        "wrongAnswer2": "12 months",
        "wrongAnswer3": "25 months",
        "image": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
    },
    {
        "category": "Animal world",
        "quiz": "What’s the scientific name of a wolf? ",
        "answer": "Canis lupus",
        "wrongAnswer1": "Lupus canibulus",
        "wrongAnswer2": "Cana molus",
        "wrongAnswer3": "None of the others",
        "image": "https://images.unsplash.com/photo-1511561415413-c643d4969838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Animal world",
        "quiz": "How many eyes does a bee have?",
        "answer": "Five",
        "wrongAnswer1": "Four",
        "wrongAnswer2": "Two",
        "wrongAnswer3": "Six",
        "image": "https://images.unsplash.com/photo-1531254722074-92eebf4045ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Animal world",
        "quiz": "What name is used to refer to a group of frogs?",
        "answer": "An army",
        "wrongAnswer1": "A group",
        "wrongAnswer2": "A litter",
        "wrongAnswer3": "A pack",
        "image": "https://images.unsplash.com/photo-1592827001593-78cad6b2e870?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80",
        "objectFit": "cover"
    },
    {
        "category": "Technology & Science",
        "quiz": "How many hearts does an octopus have?",
        "answer": "Three",
        "wrongAnswer1": "One",
        "wrongAnswer2": "Two",
        "wrongAnswer3": "Five",
        "image": "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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

// Sounds
let rightAnswerSound = new Audio('./audio/rightAnswer.mp3')
let wrongAnswerSound = new Audio('./audio/wrongAnswer.mp3')

// Right & wrong answer sound play
function rightAnswer() {
    rightAnswerSound.play()
}

function wrongAnswer() {
    wrongAnswerSound.play()
}

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

        // If the answer is OK, set a green background and play right answer sound
        correspondingButton[i].style.background = "radial-gradient(circle, rgba(0,216,0,1) 0%, rgba(136,255,136,1) 100%)"
        setTimeout(() => {
            rightAnswer()
        }, 200);
    } else {

        // If the answer is wrong, set a red background and play right answer sound
        correspondingButton[i].style.background = "radial-gradient(circle, rgba(255,57,57,1) 0%, rgba(255,115,115,1) 100%)"
        setTimeout(() => {
            wrongAnswer()
        }, 200);
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
