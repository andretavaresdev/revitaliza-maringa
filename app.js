// Função para atualizar as imagens dinamicamente
function updateImage(imageId) {
    // Captura o valor do input (URL da imagem)
    const imageUrl = document.getElementById(`imageInput${imageId}`).value;

    // Verifica se o URL da imagem não está vazio
    if (imageUrl) {
        // Atribui o URL da imagem ao src da tag <img>
        document.getElementById(imageId).src = imageUrl;

        // Exibe a imagem que foi inserida
        document.getElementById(imageId).style.display = "block";  // Exibe a imagem
    } else {
        // Caso não haja URL, esconde a imagem
        document.getElementById(imageId).style.display = "none";
    }
}

// Opcional: Para esconder as imagens inicialmente
document.addEventListener("DOMContentLoaded", function() {
    // Esconde todas as imagens inicialmente
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`image${i}`).style.display = "none";
    }
});




