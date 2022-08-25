import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from "./styles";

export const App = () => {
  return (
    <>
      <h1 style={{ margin: "12px 16px" }}>Action Board</h1>
      {/* <p>A React + TypeScript Demo application.</p> */}
      <AppContainer>
        <Column columnTitle="Project" />
        <AddNewItem onAdd={console.log} toggleButtonText="+ Add another list" />
      </AppContainer>
    </>
  );
};

export default App;
