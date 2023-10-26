document.getElementById('feedback-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const feedback = document.getElementById('feedback').value;
    const rating = document.getElementById('rating').value;
    alert(`Votre avis est : "${feedback}" et votre note est : ${rating}/5`);
});