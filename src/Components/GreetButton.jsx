import React from "react";

function GreetButton(props) {
  const handleGreeting = () => {
    props.actionProvider.handleGreetingAndAskName();
  };
  return (
    <button className="greet-button" onClick={() => handleGreeting()}>
      Hey
    </button>
  );
}

export default GreetButton;
