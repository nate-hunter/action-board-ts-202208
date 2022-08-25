import styled from "styled-components";

// Global styles
const primaryDark = "rgb(9, 30, 66)";
const primaryDarkTransp = "rgba(9, 30, 66, 0.2)";
const lightGrey = "#ebecf0";
const grey = "#ced4da";
const borderRadius = "3px";
const white = "#fff;";
const success = "#5aac44";
const danger = "#dc3545";
const boxShadow = "#091e4240 0px 1px 0px 0px";

type AddItemButtonProps = {
  dark?: boolean;
};

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
  /* background-color: #ebecf0; */
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

export const AddNewItemButton = styled.button<AddItemButtonProps>`
  /* border-radius: ${borderRadius}; */
  /* background-color: #ffffff3d; */
  /* background-color: #ced4da3d; */
  /* background-color: ${success}; */
  /* background-color: ${(props) => (props.dark ? "#ced4da" : "#fffff3d")}; */
  /* color: ${(props) => (props.dark ? primaryDark : "#fff")}; */
  /* border: none; */
  /* border: ${(props) => (props.dark ? "none" : "1px solid #fff")}; */
  /* cursor: pointer; */
  /* max-width: 300px; */
  /* padding: 10px 12px; */
  /* text-align: left; */
  /* transition: background 85ms ease-in; */
  /* width: 100%; */

  /* &:hover { */
  /* background-color: #ffffff52; */
  /* filter: brightness(1.15); */
  /* background-color: ${(props) =>
    props.dark ? primaryDarkTransp : "#ffffff52"}; */
  /* border: "1px solid transparent"; */
  /* } */

  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`;
