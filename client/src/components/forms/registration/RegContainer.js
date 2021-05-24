import React from "react";
import WrapVh from "../../wrap/WrapVh";
import Registration from "./Registration";

const RegContainer = () => {
  const handleSubmit = (e) => {
    console.log("Submit");
  };

  return (
    <WrapVh>
      <Registration onSubmit={handleSubmit} />
    </WrapVh>
  );
};

export default RegContainer;
