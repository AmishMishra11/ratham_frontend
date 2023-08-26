import { createChatBotMessage } from "react-chatbot-kit";
import GreetButton from "../Components/GreetButton";
import InputName from "../Components/InputName";
import AgeDropDown from "../Components/AgeDropDown";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system! `, {
      widget: "greetButton",
    }),
  ],
  widgets: [
    {
      widgetName: "greetButton",
      widgetFunc: (props) => <GreetButton {...props} />,
    },

    {
      widgetName: "inputLable",
      widgetFunc: (props) => <InputName {...props} />,
    },

    {
      widgetName: "ageDropDown",
      widgetFunc: (props) => <AgeDropDown {...props} />,
    },
  ],
};

export default config;
