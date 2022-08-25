import { useState } from "react";
import { AddNewItemButton } from "./styles";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export const AddNewItem = ({
  onAdd,
  toggleButtonText,
  dark,
}: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    console.log("show form...");
  }

  return (
    <div>
      <AddNewItemButton dark={dark} onClick={() => setShowForm(true)}>
        {toggleButtonText}
      </AddNewItemButton>
    </div>
  );
};
