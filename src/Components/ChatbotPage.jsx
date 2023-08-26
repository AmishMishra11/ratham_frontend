import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../Chatbot/config";
import MessageParser from "../Chatbot/MessageParser";
import ActionProvider from "../Chatbot/ActionProvider";
import "react-chatbot-kit/build/main.css";

function ChatbotPage() {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatbotPage;
