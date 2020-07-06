import React, { useCallback } from "react";
import { Body, Card, Container, Date, Header, Input, Button } from "./style";
import api from "../services/api";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Dashboard() {
  const [noticia, setNoticia] = React.useState([]);
  const [search, setSearch] = React.useState();
  const [loading, setLoading] = React.useState();

  const loadNews = useCallback(() => {
    setLoading();
    api
      .get(`/api/v3/noticias/?tipo=noticia`)
      .then((response) => setNoticia(response.data.items));
    setLoading(true);
  }, []);

  React.useEffect(() => {
    loadNews();
  }, [loadNews]);

  async function handleSearch() {
    if (search) {
      setLoading();
      try {
        await api
          .get(`/api/v3/noticias/?busca=${search}`)
          .then((response) => setNoticia(response.data.items));
        setLoading(true);
      } catch (error) {
        alert("Erro ao Buscar");
      }
    } else {
      loadNews();
    }
  }
  function getImage(json) {
    if (json) {
      const image = JSON.parse(json);
      return `https://agenciadenoticias.ibge.gov.br/${image.image_intro}`;
    }
  }

  return (
    <Body>
      <Header>
        <h2>IBGE NEWS</h2>
        <Input
          type="search"
          placeholder="Buscar por..."
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => handleSearch()}>Buscar</Button>
      </Header>
      <br />
      <Container>
        {loading ? (
          noticia.map((n) => (
            <Card key={n.id}>
              <a href={n.link} target="_blank">
                {n.titulo}
              </a>
              <br />
              <img
                src={getImage(n.imagens)}
                alt={n.titulo}
                style={{ width: "230px", marginTop: "5px" }}
              />
              <p> {n.introducao} </p>
              <br />
              <Date>{n.data_publicacao}</Date>
              <br />
            </Card>
          ))
        ) : (
          <CircularProgress size={100} style={{ marginLeft: "50%" }} />
        )}
      </Container>
    </Body>
  );
}
