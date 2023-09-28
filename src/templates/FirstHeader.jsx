import styled from "styled-components";
import LittleContact from "../components/LittleContact";
import LoginButton from "../components/LoginButton";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #162a41;
  // width: 1920px;
  // height: 76px;
`;

const FirstHeader = () => {
  return (
    <StyledDiv>
      <LittleContact />
      <LoginButton />
    </StyledDiv>
  );
};

export default FirstHeader;
