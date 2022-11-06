window.onload= function(){
  var searchBtn= document.querySelector('.btn');
  searchBtn.addEventListener('click', function(element){
    element.preventDefault();

    fetch("superheroes.php")
      .then(response => {
        if(response.ok){
          return response.text()
        }else{
          return Promise.reject('Error. Something went wrong!')
        }
      })
      .then(data=>{
          alert(data);
      })
  })
}