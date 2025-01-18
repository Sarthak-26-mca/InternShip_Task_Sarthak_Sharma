// script.js
const articleForm = document.getElementById('articleForm');
const newsFeed = document.getElementById('newsFeed');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumbers = document.getElementById('pageNumbers');

let articles = [];
let currentPage = 1;
const articlesPerPage = 4;

// Add Article
articleForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const imageURL = document.getElementById('imageURL').value;
  
  if (title && description) {
    articles.push({ title, description, imageURL });
    renderArticles();
    articleForm.reset();
  }
});

// Render Articles
function renderArticles() {
  newsFeed.innerHTML = '';
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);
  
  currentArticles.forEach((article) => {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'grid-item';
    articleDiv.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      ${article.imageURL ? `<img src="${article.imageURL}" alt="Article Image">` : ''}
    `;
    newsFeed.appendChild(articleDiv);
  });
  updatePagination();
}

// Update Pagination
function updatePagination() {
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
  
  pageNumbers.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.textContent = i;
    pageBtn.className = currentPage === i ? 'active' : '';
    pageBtn.addEventListener('click', () => {
      currentPage = i;
      renderArticles();
    });
    pageNumbers.appendChild(pageBtn);
  }
}

// Pagination Controls
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderArticles();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
    currentPage++;
    renderArticles();
  }
});
