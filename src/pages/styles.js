import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    img {
        width: 72px;
        height: 72px;
        margin: 20px 0 0 0;
    }
`

export const ContentList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0;
    }
`