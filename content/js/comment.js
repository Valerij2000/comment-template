const usersComment = document.getElementById('users-comment');
const sendComment = document.getElementById('sendComment');
const commentTextarea = document.getElementById('comment-textarea');

  sendComment.addEventListener('click', () => {
    validateForm();
  })

function validateForm () {
  if (commentTextarea.value == '' || commentTextarea.value === null) {
    return false;
  } else {
    addUsersComment();
  }
}

function addUsersComment () {
  let comnt = document.createElement('div');
    comnt.className = 'comnt-div no-brd';
  
    usersComment.appendChild(comnt);
  
    let img = document.createElement('img');
    img.className = 'fac1-img';
    img.src = 'img/man.png';
  
    comnt.appendChild(img);
  
    let name = document.createElement('p');
    name.className = 'cmnt-p3'
    name.innerHTML = 'Name';
  
    comnt.appendChild(name);
  
    let comment = document.createElement('p');
    comment.className = 'cmnt-p4';
    comment.innerHTML = commentTextarea.value;
  
    comnt.appendChild(comment);
  
    let descr = document.createElement('p');
    descr.className = 'cmnt-p5';
    descr.innerHTML = 'Responder • Me gusta • Seguir publicación';
    
    comnt.appendChild(descr);
  
    let span = document.createElement('span');
    span.innerHTML = new Date().toLocaleDateString("sr");
    span.style.color = '#848484';
  
    comnt.appendChild(span);
}