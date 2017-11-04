var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];

function randomResponse(array){
  return array[Math.floor((Math.random() * array.length))];
}

//console.log(randomResponse(responses));

function surveyByDepartment(responses, departmentEmployers){
  var answersByDepartment = [];
  for (var i=0; i<departmentEmployers; i++){
    answersByDepartment.push(randomResponse(responses));
  }
  return answersByDepartment;
}

//console.log(surveyByDepartment(responses, 10));

var employeeSatisfaction = function (array, departments) {
  var oficceAnswers = [];
  for (var i=0; i<departments; i++){
    oficceAnswers.push(surveyByDepartment(array, 10));
  }
  return oficceAnswers;
};

console.log(employeeSatisfaction(responses, 8));
