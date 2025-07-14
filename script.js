// Gestion des boutons
document.querySelectorAll('.btn').forEach(button => {
  console.log(`Bouton trouvé : ${button.textContent}`); // Log pour vérifier les boutons
  button.addEventListener('click', () => {
    alert(`Vous avez cliqué sur ${button.textContent}`);
  });
});

// Gestion du survol
const hoverBox = document.querySelector('.hover-box');
console.log('Zone de survol détectée'); // Log pour vérifier la zone de survol
hoverBox.addEventListener('mouseover', () => {
  hoverBox.style.backgroundColor = '#d4edda';
});
hoverBox.addEventListener('mouseout', () => {
  hoverBox.style.backgroundColor = '';
});

// Affichage de la touche pressée
document.addEventListener('keydown', (event) => {
  document.getElementById('key').textContent = event.key;
});

// Gestion du formulaire
document.getElementById('demo-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Formulaire soumis avec succès !');
});

// Gestion des clics sur la zone parent/enfant
document.getElementById('parent').addEventListener('click', () => {
  alert('Clic sur le parent');
});
document.getElementById('child').addEventListener('click', (event) => {
  alert('Clic sur l’enfant');
  event.stopPropagation();
});

// Suppression du bouton après 5 secondes
const removeClickBtn = document.getElementById('removeClickBtn');
setTimeout(() => {
  removeClickBtn.remove();
}, 5000);

// Affichage de la taille de l'écran
const screenWidthSpan = document.getElementById('screenWidth');
const updateScreenWidth = () => {
  screenWidthSpan.textContent = window.innerWidth;
};
window.addEventListener('resize', updateScreenWidth);
updateScreenWidth();

// Changement de couleur du thème
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', () => {
  dgittocument.body.style.backgroundColor =
    document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});