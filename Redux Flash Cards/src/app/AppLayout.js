import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";

const navigationLinks = [
    { to: ROUTES.topics(), label: "Topic" },
    { to: ROUTES.newTopic(), label: "New Topic" },
    { to: ROUTES.quizzes(), label: "Quizzes" },
    { to: ROUTES.newQuiz(), label: "New Quiz" }
]
export default function AppLayout() {
    return (
        <div>
            <nav>
                <ul>
                    {
                        navigationLinks.map((nav, index) => (
                            <li key="index">
                                <NavLink key={index} to={nav.to} >
                                    {nav.label}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
