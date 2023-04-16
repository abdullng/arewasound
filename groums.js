var imageURLs = ["https://arewasound.com/groups1.png", "https://arewasound.com/job-group.png",];
    
  function getImageTagmob() 
  {
    var img = '<img src="';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" class="qixbit-mobile" alt="Group"/>';
    return img;
  }
