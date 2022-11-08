window.onload= function(){
  var searchBtn= document.querySelector('.btn');
  searchBtn.addEventListener('click', function(element){
    element.preventDefault();
    var name= document.querySelector(".searchForm input.name");
    console.log(name);
    name=name.value;
    console.log(name);
    var heroes= document.querySelector(".heroes");
    heroes.innerHTML=""
    
    url='superheroes.php?query=' +  name;
  
    fetch(url, {method:'POST'})
      .then(response => {
        if(response.ok){
          return response.text()
        }else{
          return Promise.reject('Error. Something went wrong!')
        }
      })
      .then(data=>{
        
        if(typeof data === "object"){
          heroes.innerHTML=data;   
        }else{
          heroes.innerHTML = "<p class='text-uppercase error text-bold'>" +  data + "</p>";
        }
      });
        
         
      })
  };
