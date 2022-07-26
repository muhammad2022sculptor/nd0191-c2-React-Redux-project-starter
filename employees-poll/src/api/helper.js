export function returnUnAnsweredQuestions(questions, authedUser) {
  return Object.keys(questions)
    .filter((question) => {
      let optionOne = questions[question].optionOne["votes"];
      let optionTwo = questions[question].optionTwo["votes"];
      return (
        !(optionOne.includes(authedUser) || optionTwo.includes(authedUser)) &&
        questions[question].id
      );
    })
    .sort(function (a, b) {
      var dateA = questions[a].timestamp,
        dateB = questions[b].timestamp;
      return dateB - dateA;
    });
}

export function returnAnsweredQuestions(users, questions, authedUser) {
  let arr = Object.keys(users[authedUser].answers).map((answer) => {
    return Object.keys(users[authedUser].answers).length > 0 ? answer : false;
  });
  if (arr !== false) {
    return arr.sort(function (a, b) {
      var dateA = questions[a].timestamp,
        dateB = questions[b].timestamp;
      return dateB - dateA;
    });
  } else {
    return [];
  }
}
