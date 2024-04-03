// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modale=document.getElementById('modal')
const tmessage=document.getElementById('modal-message')
// Your JavaScript code goes here!
const likee=document.querySelectorAll('.like-glyph');
likee.forEach(span =>span.addEventListener('click',hearthandler));

function hearthandler(one){
  mimicServerCall()
    .then(()=>succeded(one.target))
    .catch(failed)
}
function succeded(zaza){
  if(zaza.textContent===EMPTY_HEART){
  zaza.textContent=FULL_HEART;
  zaza.classList.add('activated-heart');
}else{
  zaza.textContent=EMPTY_HEART;
  zaza.classList.remove('activated-heart');
}
}
function failed(message){
  modale.classList.remove('hidden');
  tmessage.textContent=message; 
  setTimeout(()=>modale.classList.add('hidden',3000))
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
