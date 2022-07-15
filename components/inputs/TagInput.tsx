import React, { useState } from "react";
import styled from "styled-components";

const Tag = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 0;
  margin-right: 10px;
  padding: 0 10px;
  padding-right: 5px;
  border: 2px solid green;
  border-radius: 5px;
  background-color: white;
  white-space: nowrap;
  color: black;
  font-weight: bolder;
`;
const TagButton = styled.button`
  display: flex;
  padding: 6px;
  border: none;
  background-color: unset;
  cursor: pointer;
  color: red;
`;

const Container = styled.div`
  display: flex;
  overflow: scroll;
  width: 100%;
  max-width: 100%;
  padding-left: 14px;
  border: 1px grey solid;
  border-radius: 5px;
  color: black;
`;

const ContainerInput = styled.input`
  width: 100%;
  min-width: 50%;
  border: none;
  border-radius: 5px;
  padding: 14px;
  padding-left: 14px;
`;

export default function TagInput() {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const deleteTag = (index: number) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e);
    const { key, keyCode } = e;
    const trimmedInput = input.trim();

    if (keyCode === 13 && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState): any => [...prevState, trimmedInput]);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length) {
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();

      setTags(tagsCopy);
      setInput(poppedTag);
    }
    setIsKeyReleased(false);
  };
  const onKeyUp = () => {
    setIsKeyReleased(true);
  };
  return (
    <div>
      <h1>태그 등록</h1>
      <Container>
        {tags.map((tag, index) => (
          <Tag key={index} className="tag">
            {tag}
            <TagButton onClick={() => deleteTag(index)}>x</TagButton>
          </Tag>
        ))}
        <ContainerInput
          value={input}
          placeholder="Enter a tag"
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onChange={onChange}
        />
      </Container>
    </div>
  );
}
