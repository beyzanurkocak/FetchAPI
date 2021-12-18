document.querySelector("#button1").addEventListener("click", getTextFile);

function getTextFile()
{
    fetch("text1.txt").then(function(response){
           return response.text();
   }).then(function(data){
       document.querySelector("#output").innerHTML += data;
   }).catch(function(err){
       console.log(err);
   });
}

document.querySelector("#button2").addEventListener("click", getJSON);

function getJSON(){
    fetch("articles.json").then(function(response){
        return response.json();
    }).then(function(articles){
    //document.querySelector("#output").innerHTML += articles;
    let output = "<ul>";

    articles.forEach(function(article){
        output += `<li>ID: ${article.id} - Name: ${article.name} - Username: ${article.username}</li> `
    }
    
    )
    output += "</ul>";
    document.querySelector("#output").innerHTML += output;
   // console.log(articles);
  }).catch(function(err){
      console.log(err)
  });
}

document.querySelector("#button3").addEventListener("click", getApi);

function getApi(){
    fetch("https://api.github.com/users").then(function(response){
        return response.json();
    }).then(function(api){
       // document.querySelector("#output").innerHTML += api;
       console.log(api);
    }).catch(function(err){
        console.log(err)

    })

}

