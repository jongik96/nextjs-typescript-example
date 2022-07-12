import React from "react";
import styled from "styled-components";
const TabP = styled.p`
  font-size: 2rem;
  text-align: center;
`;
const SecondTab = () => {
  return (
    <div className="SecondTab">
      <TabP>Second Tab!!</TabP>
      {/* Second  tab content will go here */}
    </div>
  );
};
export default SecondTab;
