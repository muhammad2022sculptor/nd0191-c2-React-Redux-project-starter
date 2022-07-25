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
  return Object.keys(users)
    .map((user) => {
      if (user === authedUser && Object.keys(users[user].answers).length > 0)
        return Object.keys(users[user].answers);
    })
    .sort(function (a, b) {
      var dateA = questions[a].timestamp,
        dateB = questions[b].timestamp;
      return dateB - dateA;
    })[0]
    .sort((b, a) => questions[a].timestamp - questions[b].timestamp);
}
