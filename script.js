const rating = [
    { emoji: "", name: "Give us rating" },
    { emoji: "😞", name: "Very poor" },
    { emoji: "😐", name: "Poor" },
    { emoji: "😊", name: "Good" },
    { emoji: "😄", name: "Very Good" },
    { emoji: "😍", name: "Excellent" }
  ];
  
  const starsContainer = document.getElementById('rating-stars');
  const ratingInfo = document.getElementById('rating-info');
  
  function renderRating() {
    starsContainer.innerHTML = '';
    rating.forEach((option, index) => {
      const star = document.createElement('span');
      star.classList.add('star');
      star.textContent = '☆'; // Default empty star
      star.title = option.name;
      star.addEventListener('mouseover', () => highlightStars(index));
      star.addEventListener('click', () => handleRatingClick(index));
      starsContainer.appendChild(star);
    });
  }
  
  function highlightStars(index) {
    const stars = starsContainer.querySelectorAll('.star');
    stars.forEach((star, i) => {
      if (i <= index) {
        star.textContent = rating[i].emoji;
      } else {
        star.textContent = '☆'; // Empty star
      }
    });
    updateRatingInfo(index);
  }
  
  function handleRatingClick(index) {
    updateRatingInfo(index);
  }
  
  function updateRatingInfo(index) {
    ratingInfo.textContent = rating[index].name;
  }
  
  renderRating();
  