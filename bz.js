var imageURLs = ["https://arewasound.com/bz-news-app.png",];
    
  function getImageTagmob() 
  {
    var img = '<img src="';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" class="bz" alt="Group"/>';
    return img;
  }
