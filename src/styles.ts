import styled from "styled-components";

// Global styles
const primaryDark = "rgb(9, 30, 66)";
const primaryDarkTransp = "rgba(9, 30, 66, 0.2)";
const lightGrey = "#ebecf0";
const grey = "#ced4da";
const borderRadius = "3px";
const white = "#fff;";
const boxShadow = "#091e4240 0px 1px 0px 0px";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: ${primaryDark};
`;

export const ColumnContainer = styled.section`
  flex-grow: 0;
  min-height: 40px;
  width: 300px;
  margin-right: 20px;
  padding: 8px 8px;
  border-radius: ${borderRadius};
  background-color: ${lightGrey};
`;

export const ColumnTitle = styled.header`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  max-width: 300px;
  border-radius: ${borderRadius};
  border-color: ${white};
  box-shadow: ${boxShadow};
  cursor: pointer;
`;
