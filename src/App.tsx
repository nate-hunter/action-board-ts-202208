import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from "./styles";

export const App = () => {
  return (
    <>
      <h1 style={{ marginLeft: "16px" }}>Action Board</h1>
      {/* <p>A React + TypeScript Demo application.</p> */}
      <AppContainer>
        <ColumnContainer>
          <ColumnTitle>Project:</ColumnTitle>
          <CardContainer>Action 1</CardContainer>
          <CardContainer>Action 2</CardContainer>
          <CardContainer>Action 3</CardContainer>
        </ColumnContainer>
      </AppContainer>
    </>
  );
};

export default App;
