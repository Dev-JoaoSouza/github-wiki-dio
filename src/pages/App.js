import gitLogo from '../assets/github.png';
import { Container, ContentList } from './styles';
import Input from './../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import { api } from '../services/api';
import { useState } from 'react';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    await api.get(`repos/${currentRepo}`)
    .then(response => response.data)
    .then((dados) => {
      const isExist = repos.find(repo => repo.id === dados.id)

      if(!isExist) {
        setRepos([dados, ...repos]);
        setCurrentRepo('');
      } else {
        alert("Repositório já existente!");
      }
    })
    .catch(() => alert("Repositório não encontrado!"));
  }

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id !== id);
    setRepos(newRepos);
  }

  return (
    <Container>
      <img src={gitLogo} alt="logo github" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      <ContentList>
        {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
      </ContentList>
    </Container>
  );
}

export default App;
