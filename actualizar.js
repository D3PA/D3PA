const fs = require('fs');

function actualizarFraseDelDia() {
  try {
    const todasLasFrases = require('./frases.json');
    const indiceAleatorio = Math.floor(Math.random() * todasLasFrases.length);
    const { frase, autor } = todasLasFrases[indiceAleatorio];

    const tarjetaHTML = `
<!--TARJETA_INICIO-->
<p align="center">
  <img src="https://readme-daily-quotes.vercel.app/api?author=${encodeURIComponent(autor)}&quote=${encodeURIComponent(frase)}&theme=dark&bg_color=2e1a47&author_color=9fa8da&accent_color=7e57c2">
</p>
<!--TARJETA_FIN-->
`;

    const rutaReadme = './README.md';
    let contenidoReadme = fs.readFileSync(rutaReadme, 'utf-8');

    contenidoReadme = contenidoReadme.replace(
      /<!--TARJETA_INICIO-->(.|\n)*<!--TARJETA_FIN-->/,
      tarjetaHTML
    );

    fs.writeFileSync(rutaReadme, contenidoReadme);
    console.log('README actualizado con la frase del dia');
  } catch (error) {
    console.error('Error actualizando la frase del dia:', error);
  }
}

actualizarFraseDelDia();