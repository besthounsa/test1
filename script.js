// Fonction pour ajouter une valeur à l'écran
function appendValue(value) {
    const screen = document.getElementById('screen');
    screen.value += value;
  }
  
  // Fonction pour effacer l'écran
  function clearScreen() {
    const screen = document.getElementById('screen');
    screen.value = '';
  }
  
  // Fonction pour calculer le résultat
  function calculate() {
    const screen = document.getElementById('screen');
    try {
      screen.value = eval(screen.value); // Résout l'expression mathématique
    } catch {
      screen.value = 'Erreur'; // Affiche une erreur si l'expression est invalide
    }
  }
  