function calculateResult() {
    const form = document.getElementById('quizForm');
    const resultElement = document.getElementById('result');
  
    const answers = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0
    };
  
    const formData = new FormData(form);
    for (let value of formData.values()) {
      answers[value]++;
    }
  
    let maxAnswer = '';
    let maxCount = 0;
  
    for (let answer in answers) {
      if (answers[answer] > maxCount) {
        maxCount = answers[answer];
        maxAnswer = answer;
      }
    }
  
    let character = '';
    let imageUrl = '';
    
    switch (maxAnswer) {
      case 'A':
        character = 'Cassandra Pentaghast';
        imageUrl = 'https://images8.alphacoders.com/556/556184.jpg'; // Substitua pelo link real da imagem
        break;
      case 'B':
        character = 'Iron Bull';
        imageUrl = 'https://images6.fanpop.com/image/photos/37800000/Iron-Bull-concept-art-in-The-Art-of-Dragon-Age-Inquisition-dragon-age-origins-37859160-1280-1333.png'; // Substitua pelo link real da imagem
        break;
      case 'C':
        character = 'Solas';
        imageUrl = 'https://cdna.artstation.com/p/assets/images/images/053/579/696/large/hala-wajdi-solas.jpg?1662547268'; // Substitua pelo link real da imagem
        break;
      case 'D':
        character = 'Varric Tethras';
        imageUrl = 'https://www.belloflostsouls.net/wp-content/uploads/2018/03/Varric-new.jpg'; // Substitua pelo link real da imagem
        break;
      case 'E':
        character = 'Leliana';
        imageUrl = 'https://wallpapercave.com/wp/wp2937561.jpg'; // Substitua pelo link real da imagem
        break;
      default:
        character = 'Erro: tente novamente.';
    }
  
    resultElement.innerHTML = `Você combina com: ${character}!<br><img src="${imageUrl}" alt="${character}">`;
  }
  