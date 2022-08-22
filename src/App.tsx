import { Column } from "./Column";
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
        <Column columnTitle="Project" />
      </AppContainer>
    </>
  );
};

export default App;
