import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo({repo, handleRemoveRepo}) {
    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    }

    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <span>{repo.full_name}</span>
            <p>{repo.description !== null ? repo.description : "Repositório sem descrição."}</p>
            <a href={repo.html_url} target="_blank" rel="noreferrer">Ver repositório</a>
            <button onClick={handleRemove}>Remover</button>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo;