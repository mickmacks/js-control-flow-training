console.log("security_questions.js is loaded");

var securityQuestions = {
	questionOne : {question: 'What is your favorite food', expectedAnswer: 'Ramen'}, 
	questionTwo : {question: 'What is your mother\'s maiden name?', expectedAnswer: 'Smith'}, 
	questionThree : {question: 'What street did you grow up on', expectedAnswer: 'Nightingale'}
};

for(var key in securityQuestions) {
    var answer = prompt(securityQuestions[key].question, 'Please enter your answer');
    console.log(answer);
    if (answer != securityQuestions[key].expectedAnswer) {
      alert('You have failed');
      break;
    }
}