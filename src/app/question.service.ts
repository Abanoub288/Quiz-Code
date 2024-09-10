import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  qCategories = [
    "HTML",
    "CSS",
    "JavaScript"
  ];

  questions : {
    [key: string]: {
    title: string;
    answer_1: string;
    answer_2: string;
    answer_3: string;
    answer_4: string;
    right_answer: string;
    Categories: string;
  }[]
  }={
    HTML: [
      {
        "title": "1- Why We Use <br> Element?",
        "answer_1": "To Make Text Bold",
        "answer_2": "To Make Text Italic",
        "answer_3": "To Add Breakline",
        "answer_4": "To Create Horizontal Line",
        "right_answer": "To Add Breakline",
        "Categories": "Html",
      },
      {
        "title": "2- Is <img> Element Has Attribute href?",
        "answer_1": "Yes",
        "answer_2": "No Its For Anchor Tag <a>",
        "answer_3": "All Elements Has This Attribute",
        "answer_4": "Answer 1 And 3 Is Right",
        "right_answer": "No Its For Anchor Tag <a>",
        "Categories": "Html",
      },
      {
        "title": "3- How Can We Make Element Text Bold?",
        "answer_1": "Putting It Inside <b> Tag",
        "answer_2": "Putting It Inside <strong> Tag",
        "answer_3": "Customizing It With Font-Weight Property In CSS",
        "answer_4": "All Answers Is Right",
        "right_answer": "All Answers Is Right",
        "Categories": "Html",
      },
      {
        "title": "4- What Is The Right Hierarchy For Creating Part Of Page?",
        "answer_1": "<h2> Then <p> Then <h1> Then <p> Then <h3> Then <p> Then <img>",
        "answer_2": "<h1> Then <p> Then <h3> Then <p> Then <h2> Then <p> Then <img>",
        "answer_3": "<h2> Then <p> Then <h3> Then <p> Then <h1> Then <p> Then <img>",
        "answer_4": "All Solutions Is Wrong",
        "right_answer": "All Solutions Is Wrong",
        "Categories": "Html",
      },
      {
        "title": "5- How Can We Include External Page Inside Our HTML Page?",
        "answer_1": "By Using Include in HTML",
        "answer_2": "By Using Load In HTML",
        "answer_3": "By Using iFrame Tag",
        "answer_4": "All Solutions Is Wrong",
        "right_answer": "By Using iFrame Tag",
        "Categories": "Html",
      },
      {
        "title": "6- What Is The Tag That Not Exists in HTML?",
        "answer_1": "<object>",
        "answer_2": "<basefont>",
        "answer_3": "<abbr>",
        "answer_4": "All Tags Is Exists in HTML",
        "right_answer": "All Tags Is Exists in HTML",
        "Categories": "Html",
      },
      {
        "title": "7- How We Specify Document Type Of HTML5 Page?",
        "answer_1": "<DOCTYPE html>",
        "answer_2": "<DOCTYPE html5>",
        "answer_3": "<!DOCTYPE html5>",
        "answer_4": "<!DOCTYPE html>",
        "right_answer": "<!DOCTYPE html>",
        "Categories": "Html",
      },
      {
        "title": "8- What Is The Element Thats Not Exists in HTML5 Semantics?",
        "answer_1": "<article>",
        "answer_2": "<section>",
        "answer_3": "<blockquote>",
        "answer_4": "<aside>",
        "right_answer": "<blockquote>",
        "Categories": "Html",
      },
      {
        "title": "9- In HTML Can We Use This Way To Add Attributes?",
        "answer_1": "<div class='class-name'>",
        "answer_2": "<div class=class-name>",
        "answer_3": "<div class=\"class-name\">",
        "answer_4": "All Is Right",
        "right_answer": "All Is Right",
        "Categories": "Html",
      }
    ],
    CSS: [
      {
        "title": "1- What does CSS stand for?",
        "answer_1": "Computer Style Sheets",
        "answer_2": "Creative Style Sheets",
        "answer_3": "Cascading Style Sheets",
        "answer_4": "Colorful Style Sheets",
        "right_answer": "Cascading Style Sheets",
        "Categories": "CSS",
      },
      {
        "title": "2- Which property is used to change the background color of an element?",
        "answer_1": "background-color",
        "answer_2": "color",
        "answer_3": "bgcolor",
        "answer_4": "background",
        "right_answer": "background-color",
        "Categories": "CSS",
      },
      {
        "title": "3- How do you select an element with the class name example?",
        "answer_1": "#example",
        "answer_2": ".example",
        "answer_3": ",example",
        "answer_4": "example",
        "right_answer": ".example",
        "Categories": "CSS",
      },
      {
        "title": "4- What does the :hover pseudo-class do?",
        "answer_1": "Selects elements that are currently being clicked",
        "answer_2": "Applies styles to an element when it is hovered over by the mouse",
        "answer_3": "Applies styles to an element when it is active",
        "answer_4": "Selects elements that are currently being focused",
        "right_answer": "Applies styles to an element when it is hovered over by the mouse",
        "Categories": "CSS",
      },
      {
        "title": "5- Which CSS property controls the text size?",
        "answer_1": "font-style",
        "answer_2": "text-size",
        "answer_3": "font-size",
        "answer_4": "text-font",
        "right_answer": "font-size",
        "Categories": "CSS",
      },
      {
        "title": "6- How do you apply a CSS rule to all <p> elements on a page?",
        "answer_1": "p{}",
        "answer_2": ".p{}",
        "answer_3": "#p{}",
        "answer_4": "All",
        "right_answer": "p{}",
        "Categories": "CSS",
      },
      {
        "title": "7- What is the default value of the position property in CSS?",
        "answer_1": "static",
        "answer_2": "relative",
        "answer_3": "absolute",
        "answer_4": "fixed",
        "right_answer": "static",
        "Categories": "CSS",
      },
      {
        "title": "8- Which property is used to control the spacing between lines of text?",
        "answer_1": "line-height",
        "answer_2": "text-spacing",
        "answer_3": "letter-spacing",
        "answer_4": "word-spacing",
        "right_answer": "line-height",
        "Categories": "CSS",
      },
      {
        "title": "9- What is the correct CSS syntax to set the font color to red?",
        "answer_1": "color: red",
        "answer_2": "font-color: red",
        "answer_3": "text-color: red",
        "answer_4": "background-color: red",
        "right_answer": "color: red",
        "Categories": "CSS",
      }
    ],
    JavaScript: [
      {
        "title": "1- What is the correct syntax for referring to an external script called \"app.js\"?",
        "answer_1": "<script src=\"app.js\">",
        "answer_2": "<script href=\"app.js\"",
        "answer_3": "<script link=\"app.js\"",
        "answer_4": "<script file=\"app.js\"",
        "right_answer": "<script src=\"app.js\"",
        "Categories": "javaScript",
      },
      {
        "title": "2- <script src=\"app.js\"?",
        "answer_1": "msg(\"Hello World\");",
        "answer_2": "alert(\"Hello World\");",
        "answer_3": "alertBox(\"Hello World\")",
        "answer_4": "msgBox(\"Hello World\")",
        "right_answer": "alert(\"Hello World\")",
        "Categories": "javaScript",
      },
      {
        "title": "3- How do you create a function in JavaScript?",
        "answer_1": "function = myFunction()",
        "answer_2": "function myFunction()",
        "answer_3": "create myFunction()",
        "answer_4": "def myFunction()",
        "right_answer": "function myFunction()",
        "Categories": "javaScript",
      },
      {
        "title": "4- Which of the following is a correct way to write a comment in JavaScript?",
        "answer_1": "// This is a comment",
        "answer_2": "<!-- This is a comment -->",
        "answer_3": "# This is a comment",
        "answer_4": "* This is a comment *",
        "right_answer": "// This is a comment",
        "Categories": "javaScript",
      },
      {
        "title": "5- How do you call a function named \"myFunction\"?",
        "answer_1": "call myFunction()",
        "answer_2": "myFunction()",
        "answer_3": "call function myFunction()",
        "answer_4": "run.myFunction()",
        "right_answer": "myFunction()",
        "Categories": "javaScript",
      },
      {
        "title": "6- What is the correct way to write an array in JavaScript?",
        "answer_1": "var colors = \"red\", \"green\", \"blue\"",
        "answer_2": "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
        "answer_3": "var colors = [\"red\", \"green\", \"blue\"]",
        "answer_4": "var colors = {\"red\", \"green\", \"blue\"}",
        "right_answer": "var colors = [\"red\", \"green\", \"blue\"]",
        "Categories": "javaScript",
      },
      {
        "title": "7- How do you round the number 7.25 to the nearest integer in JavaScript?",
        "answer_1": "Math.rnd(7.25)",
        "answer_2": "round(7.25)",
        "answer_3": "Math.round(7.25)",
        "answer_4": "Math.ceil(7.25)",
        "right_answer": "Math.round(7.25)",
        "Categories": "javaScript",
      },
      {
        "title": "8- What is the output of typeof null in JavaScript?",
        "answer_1": "\"null\"",
        "answer_2": "\"object\"",
        "answer_3": "\"undefined\"",
        "answer_4": "\"function\"",
        "right_answer": "\"object\"",
        "Categories": "javaScript",
      },
      {
        "title": "9- What does NaN represent in JavaScript?",
        "answer_1": "Not a Name",
        "answer_2": "Not a Null",
        "answer_3": "Not a Number",
        "answer_4": "None and Null",
        "right_answer": "Not a Number",
        "Categories": "javaScript",
      }
    ]
  };

  getCategories() {
    return this.qCategories;
  }

  getQuestionsByCategory(category: string) {
    return this.questions[category];
  }
}
