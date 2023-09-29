const ROUTES = {
  newQuiz: () => "/quizzes/new",
  quiz: (id) => `/quizzes/${id}`,
  quizzes: () => "/quizzes",
  newTopic: () => "/topics/new",
  topic: (id) => `/topics/${id}`,
  topics: () => "/topics",
};

export default ROUTES;
