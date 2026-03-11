function comprar() {
    const urls = [
      'phishing1.html',
      'phishing2.html',
      'phishing3.html',
    ];
  
    const destino = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = destino;
  }