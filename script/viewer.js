const up = new URLSearchParams(window.location.search);
const articleId = parseInt(up.get('id'));



if (isNaN(articleId)) {
    console.error("Invalid or missing article ID in URL.");
} else {

        fetch('/internal_database/news.json')
            .then(response => response.json())
            .then(data => {
                const article = data.find(item => item.id === articleId);

                if (article) {
                    document.getElementById('articleTitle').textContent = article.title;
                    document.getElementById('desc').textContent = article.description;
                   
                } else {
                    document.getElementById('articleTitle').textContent = "Article Not Found";
                }
            })
            .catch(error => console.error('Error fetching data:', error));
}

console.log("Article ID from URL:", articleId);



        