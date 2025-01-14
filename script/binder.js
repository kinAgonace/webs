fetch('internal_database/news.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
     
      const todaysNews = data.filter(item => item.category === "Today's News");
      const todaysNewsList = document.getElementById('todaysNewsList');
      populateNewsList(todaysNews, todaysNewsList);
  

      const worldNews = data.filter(item => item.category === "World News");
      const worldNewsList = document.getElementById('worldNewsList');
      populateNewsList(worldNews, worldNewsList);

       
       const SportsNews = data.filter(item => item.category === "Sports");
       const SportsNewsList = document.getElementById('sportsNewsList');
       populateNewsList(SportsNews, SportsNewsList);

       
       const EnterNews = data.filter(item => item.category === "Entertainment");
       const EnterNewsList = document.getElementById('entertainmentNewsList');
       populateNewsList(EnterNews, EnterNewsList);

    })
    .catch(error => console.error('Error fetching data:', error));
  

  function populateNewsList(newsArray, container) {
    console.log("gwapo si quin yes");
    newsArray.forEach(item => {
      const listItem = document.createElement('li');
      listItem.className = 'news-item';
  
      listItem.innerHTML = `
      <img src="${item.image}" alt="News Image" class="news-image">
      <a href="files/view1.html?id=${item.id}" class="news-link">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
      </a>
  `;
  
  
      container.appendChild(listItem);
    });
  }
  
  fetch('internal_database/news.json')
  .then(response => response.json())
  .then(data => {
    console.log('Data fetched:', data);
    
    // Get the size of the array
    const dataSize = data.length;
    console.log('Number of items in data:', dataSize);
  })
  .catch(error => console.error('Error fetching data:', error));

  
