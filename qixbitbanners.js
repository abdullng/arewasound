var imageURLs = ["https://helpdesk.qixbit.com/ad/1.jpg", "https://helpdesk.qixbit.com/ad/2.jpg", "https://helpdesk.qixbit.com/ad/3.jpg", "https://helpdesk.qixbit.com/ad/4.jpg", "https://helpdesk.qixbit.com/ad/5.jpg", "https://helpdesk.qixbit.com/ad/6.jpg", "https://helpdesk.qixbit.com/ad/7.jpg", "https://helpdesk.qixbit.com/ad/8.jpg", "https://helpdesk.qixbit.com/ad/9.jpg", "https://helpdesk.qixbit.com/ad/10.jpg", "https://helpdesk.qixbit.com/ad/11.jpg", "https://helpdesk.qixbit.com/ad/12.jpg", "https://helpdesk.qixbit.com/ad/13.jpg", "https://helpdesk.qixbit.com/ad/14.jpg", "https://helpdesk.qixbit.com/ad/15.jpg", "https://helpdesk.qixbit.com/ad/16.jpg", "https://helpdesk.qixbit.com/ad/17.jpg",];
    
  function getImageTagmob() 
  {
    var img = '<img src="';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" class="qixbit-mobile" alt="Qixbit App"/>';
    return img;
  }
