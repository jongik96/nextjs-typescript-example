import React from "react";
import styled from "styled-components";

const TabP = styled.p`
  font-size: 2rem;
  text-align: center;
`;
const FirstTab = () => {
  return (
    <div className="FirstTab">
      <TabP>First Tab!!</TabP>
      {/* First tab content will go here */}
    </div>
  );
};
export default FirstTab;
