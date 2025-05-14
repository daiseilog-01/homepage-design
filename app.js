window.onload = function() {
  const app = document.getElementById('app');

  const line1 = document.createElement('div');
  line1.id = 'line1';
  line1.className = 'line';
  
  const line2 = document.createElement('div');
  line2.id = 'line2';
  line2.className = 'line';
  
  const logo = document.createElement('img');
  logo.src = './logo.png'; // このファイルは後で追加します
  logo.style.position = 'absolute';
  logo.style.top = '50%';
  logo.style.left = '50%';
  logo.style.transform = 'translate(-50%, -50%)';
  logo.style.opacity = '0';
  logo.onload = () => {
    setTimeout(() => {
      logo.style.opacity = '1';
      logo.style.transition = 'opacity 1s';
    }, 1500);
  };

  app.appendChild(line1);
  app.appendChild(line2);
  app.appendChild(logo);
};
