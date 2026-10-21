// Configuração da HUD. Edite aqui e salve; depois recarregue a fonte de navegador no OBS.
window.HUD_CONFIG = {
  servidor: "https://na.valospectra.com:5200", // servidor do Spectra (porta do overlay). Brasil = NA
  codigo: "",                         // código da partida (também pode ir no link: ?groupCode=CODIGO)
  recursos: "Resources/",             // pasta das imagens e fontes, ao lado deste arquivo
  fase: "",                           // texto do canto superior direito (vazio usa o nome do torneio do Spectra)
  camera: true,                       // moldura da câmera do jogador observado (sai sozinha durante a comunicação ao vivo)
  listenIn: true,                     // comunicação ao vivo (liga/desliga pelo Spectra Client)
  corPorLado: true,                   // a cor segue o lado (defesa / ataque)
  armasParaDireita: false,            // as imagens de Resources/Armas apontam para a esquerda
};
