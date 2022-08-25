import { Card } from "./Card";
import {
  ColumnContainer,
  ColumnTitle,
} from "./styles";

type ColumnProps = {
  columnTitle: string;
};

export const Column = ({ columnTitle }: ColumnProps) => {

  return (
    <ColumnContainer>
      <ColumnTitle>{columnTitle}:</ColumnTitle>
      <Card text="Action (A)" />
      <Card text="Action (B)" />
      <Card text="Action (C)" />
    </ColumnContainer>
  );
};
