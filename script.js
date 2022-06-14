(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
      .then(function (dane){
        NowaLinia(dane)
      })
    function NowaLinia(dane){
      
      answer.innerHTML="";
      for (var i=0; i <dane.length;i++){
        var div = document.createElement("div");
        div.innerHTML='UserID: ' + dane[i].userId + '<br>';
        answer.appendChild(div);
      }
    }
    })

  cw2.addEventListener("click", function () {
    answer.innerHTML="Ładowanie...";
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
      .then(function (dane){
        NowaLinia(dane)
      })
    function NowaLinia(dane){
      
      answer.innerHTML="";
      for (var i=0; i <dane.length;i++){
        var div = document.createElement("div");
        div.innerHTML='UserID: ' + dane[i].userId + '<br>';
        answer.appendChild(div);
      }
    }
  })

  cw3.addEventListener("click", function () {
    answer.innerHTML = " LADOWANIE";
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(function(dane){
        NowaLinia(dane)
        })
        function NowaLinia(dane){
        answer.innerHTML = " ";
      {
            var div= document.createElement("div");
            div.innerHTML="UserID:" +dane[0].userId +'<br><br>' +"Id:" +dane[0].id+ '<br></br>' +"Title:" +dane[0].title+'<br></br>'+"Body:" +dane[0].body+'<br></br>';
            answer.appendChild(div);
          }
        }
 })

})();
