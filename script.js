function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains("light")){
    img.setAttribute("src", "assets/avatar-light.png")
  }else{
    img.setAttribute("src", "assets/avatar.png")
  }


  //substituir o atributo alt
  if(html.classList.contains("light")){
    img.setAttribute("alt", "Foto a cores do personagem favorito do zoka que é o zoro de one piece ")
  }else{
    img.setAttribute("alt", "Foto em preto e branco do personagem favorito do zoka que é o zoro de one piece")
  }


}