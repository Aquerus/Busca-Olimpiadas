function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
     
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item de dados e constrói o HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao">
            ${dado.descricao}
          </p>
          <p class="tags">
            ${dado.tags}
          </p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
      }
      
    }
  
    if (!resultados) {
      resultados = "<p>Nada foi encontrado.</p>"
    }
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }


