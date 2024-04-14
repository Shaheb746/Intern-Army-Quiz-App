
const quizData = [
        {
        'que': 'What does HTML stand for?',
        'a': 'Hyper Text Markup Language',
        'b': 'High Tech Markup Language',
        'c': 'Hyperlink and Text Manipulation Language',
        'd': 'Home Tool Markup Language',
        'correct': 'a',
        },

        {
        'que': 'Which tag is used to create a hyperlink in HTML?',
        'a': '<link>',
        'b': '<a>',
        'c': '<href>',
        'd': '<hyperlink>',
        'correct': 'b',
        },

        {
        'que': 'What is the correct HTML tag for inserting a line break?',
        'a': '<br>',
        'b': '<lb>',
        'c': '<break>',
        'd': '<line>',
        'correct': 'a',
        },

        {
        'que': 'Which attribute is used to specify an image filename in HTML?',
        'a': 'src',
        'b': 'img',
        'c': 'link',
        'd': 'href',
        'correct': 'a',
        },

        {
        'que': 'Which HTML element is used for creating a numbered list?',
        'a': '<ul>',
        'b': '<ol>',
        'c': '<list>',
        'd': '<li>',
        'correct': 'b',
        },

        {
        'que': 'What does the HTML element <div> stand for?',
        'a': 'Division',
        'b': 'Document',
        'c': 'Direction',
        'd': 'Declaration',
        'correct': 'a',
        },

        {
        'que': 'Which tag is used to define a table row in HTML?',
        'a': '<tr>',
        'b': '<td>',
        'c': '<table>',
        'd': '<th>',
        'correct': 'a',
        },

        {
        'que': 'What is the purpose of the HTML <head> element?',
        'a': 'To define the body of the document',
        'b': 'To specify the main content of the page',
        'c': 'To contain meta-information about the document',
        'd': 'To define the footer of the document',
        'correct': 'c',
        },

        {
        'que': 'Which HTML attribute is used to define inline styles?',
        'a': 'class',
        'b': 'style',
        'c': 'id',
        'd': 'format',
        'correct': 'b',
        },

        {
        'que': 'What is the correct way to comment out HTML code?',
        'a': '<!-- This is a comment -->',
        'b': '// This is a comment //',
        'c': '/* This is a comment */',
        'd': '# This is a comment #',
        'correct': 'a',
        }
    ];
    const quiz = document.querySelector(".quiz-body");
    const answerEl = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const footerEl = document.querySelector(".quiz-footer");
    const quizDetailEl = document.querySelector(".quiz-details");
    const liEl = document.querySelector("ul li");

    const a_txt = document.getElementById("a_text");
    const b_txt = document.getElementById("b_text");
    const c_txt = document.getElementById("c_text");
    const d_txt = document.getElementById("d_text");
    const btnSubmit = document.getElementById("btn");

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
      deselectAnswers();
      const currentQuizData = quizData[currentQuiz];
      questionEl.innerText = currentQuizData.que;
      a_txt.innerText = currentQuizData.a;
      b_txt.innerText = currentQuizData.b;
      c_txt.innerText = currentQuizData.c;
      d_txt.innerText = currentQuizData.d;
      quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${
        quizData.length
      }</p>`;
    }

    function deselectAnswers() {
      answerEl.forEach((answerEl) => {
        answerEl.checked = false;
      });
    }
    function getSelected() {
      let answer;
      answerEl.forEach((answerEls) => {
        if (answerEls.checked) {
          answer = answerEls.id;
        }
      });
      return answer;
    }

    btnSubmit.addEventListener("click", function () {
      const answers = getSelected();

      if (answers) {
        if (answers === quizData[currentQuiz].correct) {
          score++;
        }
        nextQuestion();
      }
    });

    function nextQuestion() {
      currentQuiz++;

      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} question correctly</h2>
          <button type="button" onclick="location.reload()">Reload</button>`;
        footerEl.style.display = "none";
      }
    }