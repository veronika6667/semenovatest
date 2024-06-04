// Викторина
const quizQuestions = [
    {
        question: "Как сделать текст выделенным и жирным?",
        options: ["element.style.fontWeight = 'bold';", "element.style.color = 'bold';", "element.style.background = 'bold';", "element.style.fontSize = 'bold';"],
        correctOption: 0
    },
    {
        question: "Как добавить эффект мерцания к тексту?",
        options: ["element.style.animation = 'blink 1s steps(1, start) infinite';", "element.style.fontWeight = 'blink';", "element.style.color = 'blink';", "element.style.display = 'blink';"],
        correctOption: 0
    },
    {
        question: "Как изменить цвет текста на оттенок красного?",
        options: ["element.style.color = 'blue';", "element.style.color = 'red';", "element.style.background = 'red';", "element.style.fontSize = 'red';"],
        correctOption: 1
    },
    {
        question: "Как увеличить размер шрифта до 20 пикселей?",
        options: ["element.style.fontSize = '20px';", "element.style.fontWeight = '20px';", "element.style.color = '20px';", "element.style.display = '20px';"],
        correctOption: 0
    },
    {
        question: "Как установить желтый фон для элемента?",
        options: ["element.style.color = 'yellow';", "element.style.fontWeight = 'yellow';", "element.style.backgroundColor = 'yellow';", "element.style.display = 'yellow';"],
        correctOption: 2
    },
    {
        question: "Как добавить отступы к элементу с отступами сверху и снизу по 10 пикселей, а справа и слева по 15 пикселей?",
        options: ["element.style.padding = '10px 15px';", "element.style.margin = '10px 15px';", "element.style.padding = '10px 15px 10px';", "element.style.border = '10px 15px';"],
        correctOption: 0
    }
];


// Запуск викторины
function startQuiz() {
    const userName = prompt("Введите ваше имя:");
    if (!userName) return;

    let correctAnswers = 0;
    let incorrectAnswers = 0;

    quizQuestions.forEach((question, index) => {
        let optionsStr = question.options.map((option, i) => `${i + 1}: ${option}`).join('\n');
        const userAnswer = parseInt(prompt(`${index + 1}. ${question.question}\n${optionsStr}`));

        if (!isNaN(userAnswer) && (userAnswer - 1) === question.correctOption) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    });

    // Сохранение в localStorage
    let results = JSON.parse(localStorage.getItem('quizResults')) || [];
    results.push({ name: userName, correct: correctAnswers, incorrect: incorrectAnswers });
    localStorage.setItem('quizResults', JSON.stringify(results));

    updateQuizResults();

    alert(`Спасибо за игру, ${userName}! Правильных ответов: ${correctAnswers}. Неправильных ответов: ${incorrectAnswers}`);
}

// Вывод результатов викторины
function updateQuizResults() {
    const resultsDiv = document.getElementById('quizResults');
    const results = JSON.parse(localStorage.getItem('quizResults')) || [];

    resultsDiv.innerHTML = '';
    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>Нет результатов.</p>';
    } else {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.innerText = `Имя: ${result.name}, Правильных ответов: ${result.correct}, Неправильных ответов: ${result.incorrect}`;
            resultsDiv.appendChild(resultElement);
        });
    }
}

// Очистка результатов викторины
function clearResults() {
    localStorage.removeItem('quizResults');
    updateQuizResults();
    alert('Результаты викторины очищены.');
}

function changeText() {
    document.getElementById('interactive-text').innerText = "Текст изменён!";
}

function changeColor() {
    const textElement = document.getElementById('interactive-text');
    const currentColor = textElement.style.color;
    
    if (currentColor === 'red') {
        textElement.style.color = 'blue';
    } else {
        textElement.style.color = 'red';
    }
}

function changeSize() {
    const textElement = document.getElementById('interactive-text');
    const currentSize = textElement.style.fontSize;

    if (currentSize === '20px' || currentSize === '') {
        textElement.style.fontSize = '30px';
    } else {
        textElement.style.fontSize = '20px';
    }
}

function changeText() {
            const textElement = document.getElementById('interactive-text');
            textElement.innerText = 'Текст изменен!';
            textElement.style.display = 'block';
        }

        function changeColor() {
            const textElement = document.getElementById('interactive-text');
            textElement.style.color = textElement.style.color === 'red' ? 'white' : 'red';
            textElement.style.display = 'block';
        }

        function changeSize() {
            const textElement = document.getElementById('interactive-text');
            textElement.style.fontSize = textElement.style.fontSize === '20px' ? '40px' : '20px';
            textElement.style.display = 'block';
        }

// Сохранение результатов викторины
function saveResults() {
  const result = {
    name: userName,
    correct: correctAnswers,
    incorrect: incorrectAnswers
  };
  const resultJson = JSON.stringify(result);
  localStorage.setItem('quizResults', resultJson);
}

// Загрузка результатов викторины
function loadResults() {
  const resultsJson = localStorage.getItem('quizResults');
  if (resultsJson) {
    const results = JSON.parse(resultsJson);
    // Отобразить результаты викторины в пользовательском интерфейсе
  }
}	
	