import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectTopics, showAllState } from "./topicsSlice"
import { useSelector } from 'react-redux';

export default function Topics() {
  const topics = useSelector(selectTopics);
  const getState = useSelector(showAllState);
  console.log(getState);

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">

        {Object.values(topics).map((topic) => (
          <li className="topic" key={topic.id}>
            <Link to={ROUTES.topic(topic.id)} className="topic-link">
              <div className="topic-container">
                <img src={topic.icon} alt="" />
                <div className="text-content">
                  <h2>{topic.name}</h2>
                  <p>{topic.quizIds.length} Quizzes</p>
                </div>
              </div>
            </Link>
          </li>
        ))}

      </ul>
      <Link
        to={ROUTES.newTopic()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
