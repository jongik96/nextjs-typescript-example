import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import MenuBar from "../components/MenuBar";
import FirstTab from "../components/tabs/FirstTab";
import SecondTab from "../components/tabs/SecondTabs";
const Tabs = styled.div`
  width: 80%;
  height: auto;
  min-height: 400px;
  background: #053742;
  margin: 3.5rem auto 1.5rem;
  padding: 2rem 1rem;
  color: #e8f0f2;
  border-radius: 2rem;
  @media (max-width: 769px) {
    padding: 2rem 0;
  }
`;

const TabNav = styled.ul`
  width: 60%;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #39a2db;
  border-radius: 2rem;
  padding-left: 0px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TabActive = styled.li`
  width: 50%;
  padding: 1rem;
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.7s;
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
  &:hover {
    background: rgba(50, 224, 196, 0.15);
  }
  :nth-child(2) {
    border-radius: 0;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
  }
  background: #39a2db;
`;

const TabLi = styled.li`
  width: 50%;
  padding: 1rem;
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.7s;
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
  &:hover {
    background: rgba(50, 224, 196, 0.15);
  }
  :nth-child(2) {
    border-radius: 0;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
  }
`;
const TabPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <div>
      <MenuBar />
      <Tabs>
        {/* Tab nav */}

        {activeTab === "tab1" ? (
          <TabNav>
            <TabActive onClick={handleTab1}>Tab 1</TabActive>{" "}
            <TabLi onClick={handleTab2}>Tab 2</TabLi>{" "}
          </TabNav>
        ) : (
          <TabNav>
            <TabLi onClick={handleTab1}>Tab 1</TabLi>{" "}
            <TabActive onClick={handleTab2}>Tab 2</TabActive>
          </TabNav>
        )}

        <div>{activeTab === "tab1" ? <FirstTab /> : <SecondTab />}</div>
      </Tabs>
    </div>
  );
};

export default TabPage;
