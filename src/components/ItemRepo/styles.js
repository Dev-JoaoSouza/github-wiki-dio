import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 2rem;
        color:#FAFAFA;
        font-weight: bolder;
    }
    
    span {
        display: block;
        font-size: 0.75rem;
    }
    
    p {
        font-size: 1.125rem;
        color: #FAFAFA60;
        margin: 15px 0;
        padding: 0 20px;
    }

    a {
        color: #cccccc;
        margin: 10px 0;
        align-self: flex-start;
    }
    
    button {
        align-self: flex-start;
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
    }
    
    hr {
        color: #FAFAFA;
        margin: 20px 0;
    }
`