import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    

    @media (min-width: 992px) {
        flex-direction: row;
        
    }
`