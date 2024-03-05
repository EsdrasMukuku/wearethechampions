document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.getElementById('text');
    const inputFrom = document.getElementById('input-from');
    const inputTo = document.getElementById('input-to');
    const button = document.getElementById('btn');
    const endoList = document.getElementById('list');
  
    let likeCount = 0;
    let isLiked = false;
  
    function endorsements(event) {
      event.preventDefault();
      let endorsement = '';
  
      endorsement += `<li><span>To ${inputTo.value}</span> <br><br>${textArea.value}<br><br><span>From ${inputFrom.value}</span><button class='like-btn'><i class="far fa-heart"></i><span class="like-counter"> 0</span></button></li>`;
  
      endoList.innerHTML += endorsement;
  
      // Reset values
      textArea.value = '';
      inputFrom.value = '';
      inputTo.value = '';
    }
  
    button.addEventListener('click', endorsements);
  
    endoList.addEventListener('click', function(event) {
      if (event.target.classList.contains('like-btn')) {
        const likeBtn = event.target;
        const likeCounter = likeBtn.querySelector('.like-counter');
  
        if (likeBtn.classList.contains('liked')) {
          likeCount--;
          likeCounter.textContent = likeCount;
          likeBtn.classList.remove('liked');
          isLiked = false;
        } else {
          likeCount++;
          likeCounter.textContent = likeCount;
          likeBtn.classList.add('liked');
          isLiked = true;
        }
      }
    });
  });
  