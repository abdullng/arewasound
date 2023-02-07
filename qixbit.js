var imageURLs = [
       "https://helpdesk.qixbit.com/ad/banner-mob1.png"
     , "https://helpdesk.qixbit.com/ad/banner-mob2.png"
     , "https://helpdesk.qixbit.com/ad/banner-mob3.png"
  ];
  function getImageTagmob1() {
    var img = '<img src="';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" class="qixbit-mobile" alt="Qixbit App"/>';
    return img;
  }
