function onSubmit() {
    find(document.getElementById('name').value);
    }
    
      function find(name){
        
        var url='http://www.omdbapi.com/?apikey=fd1533a4&s='+name;
       
      fetch(url)
    .then(response => response.json())
    .then(json => film(json))
    
    }
    
    
    
    function film(json){
       console.log(json);
        var divbody = "";
      json.Search.forEach(function(pics, index) {
           console.log(pics);
           divbody+=` 
           <div class="card" style="width:400px;margin:20px">
                <img class="card-img-top" src="${pics.Poster}" alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">Name :${pics.Title}</h4>
                    <p class="card-text"><i><b>Year :${pics.Year}</b></i></p>
                    <a href="#" class="btn btn-primary">watch movie</a>
                </div>
            </div>
    
    `
 });
    
document.getElementById('dispmovie').innerHTML = divbody;
}
    