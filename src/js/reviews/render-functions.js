export const createReviewsList = reviews => {
  return reviews
    .map(
      reviewData => `
      <li class="reviews-item-container card swiper-slide" id="${reviewData._id}">     
            <img
              class="reviews-avatar"
              alt="${reviewData.author}"
              src="${reviewData.avatar_url}" 
              loading="lazy"/>
              <h3 class="reviews-name">${reviewData.author}</h3>
              <p class="reviews-text"> ${reviewData.review}</p>
      </li>
          `
    )
    .join('');
};