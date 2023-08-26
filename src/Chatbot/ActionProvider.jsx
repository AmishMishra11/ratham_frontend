import React from "react";

import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleGreetingAndAskName = () => {
    const userMessage = createClientMessage("Hey");

    updateState(userMessage);

    const botMessage = createChatBotMessage("What is your Name?", {
      widget: "inputLable",
    });

    updateState(botMessage);
  };

  const handleEnterNameAndAskAge = () => {
    const userMessage = createClientMessage(localStorage.getItem("name"));

    updateState(userMessage);

    const botMessage = createChatBotMessage(" Enter your Age?", {
      widget: "ageDropDown",
    });

    updateState(botMessage);
  };

  const hanleEnterAgeAndExit = () => {
    const userMessage = createClientMessage(localStorage.getItem("age"));

    updateState(userMessage);

    const botMessage = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit"
    );

    updateState(botMessage);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGreetingAndAskName,
            handleEnterNameAndAskAge,
            hanleEnterAgeAndExit,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
