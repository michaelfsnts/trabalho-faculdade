import React from "react";
import { useHref, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <C.Container>
      <C.Title>Bem-vindo</C.Title>
      <Button Text="Acessar Player" onClick={() => openInNewTab('http://127.0.0.1:5500/protejoSpotify/index.html#')}>
        Acessar Player
      </Button>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;