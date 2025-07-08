import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { BoxMUI, TextFieldMUI } from "./inputEl.styled";

const InputWithIcon = ({children, name, type, label, onChange}) => {
  return (
    <>
      <BoxMUI sx={{ display: "flex", alignItems: "flex-end"}}>
        {children}
        <TextFieldMUI
          label={label}
          name={name}
          type={type}
          variant="standard"
          onChange={onChange}
        />
      </BoxMUI>
    </>
  );
}

export default InputWithIcon;