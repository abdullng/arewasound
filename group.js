var imageURLs = ["https://arewasound.com/group.png",];
    
  function getImageTagmob() 
  {
    var img = '<img src="';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" class="qixbit-mobile" alt="Qixbit App"/>';
    return img;
  }
