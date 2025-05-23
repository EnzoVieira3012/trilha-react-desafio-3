import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  max-width: 70%;
  margin-bottom: 20px;

  color: #ffffff;
`;

export const Subtitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;

  color: #ffffff;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const CriarText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #23dd7a;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;