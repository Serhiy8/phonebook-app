import { ButtonMUI } from "./buttonEl.styled"
import Button from '@mui/material/Button';

export const MuiButton = ({onClick, typeButton, textButton, type, disabled}) => {
  if(textButton){
    return <ButtonMUI variant="outlined" onClick={onClick} type={type} disabled={disabled}>
        {typeButton}
        <span>{textButton}</span>
      </ButtonMUI>
  }else{
    return <Button variant="outlined" onClick={onClick} type={type} disabled={disabled}>
        {typeButton}
      </Button>
  }
}