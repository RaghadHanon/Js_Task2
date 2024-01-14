

var convertForm = document.querySelector('.convertForm');

convertForm.onsubmit = function(e){
  e.preventDefault();


  console.log(e.target.elements);

  var amount = e.target.elements['amount'].value;
  var coin = e.target.elements['exchange'].value;
  
  
  var result = document.querySelector('.result');
  if(coin=='dollar')
    result.textContent= amount/3.73  ;
  else if(coin=='dinar')
    result.textContent= amount/5.26 ;
  else 
    result.textContent= amount ;
    
}



