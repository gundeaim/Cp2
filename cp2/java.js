document.getElementById("searchButton").addEventListener("click", function(event) {

  event.preventDefault();
  let APIKey = "$2a$10$wE/zSWhx9Vf6gNBuQdsMo.BV5pzQux7Sq6EkHlgbQ.5WlxllCxNA2";
  let sortOrSpell = document.getElementById("selector").options[document.getElementById("selector").selectedIndex].value;

  var url = "https://www.potterapi.com/v1/";
  if (sortOrSpell == "sortingHat") {
    url += "sortingHat";
  }
  else {
    url += "spells?key=" + APIKey;
  }

  fetch(url, {
      mode: 'cors'
    })
    .then(function(response) {
      return response.json();
    }).then(function(json) {

      if (sortOrSpell == "sortingHat"){
        let houseOutput = "";
        if (json == "Ravenclaw"){
          houseOutput += '<div class = "Ravenclaw">';
        }
        if (json == "Gryffindor"){
          houseOutput += '<div class = "Gryffindor">';
        }
        if (json == "Slytherin"){
          houseOutput += '<div class = "Slytherin">';
        }
        if (json == "Hufflepuff"){
          houseOutput += '<div class = "Hufflepuff">';
        }
        houseOutput += '<div class = "house-info">';
        houseOutput += '<h2 class="house-welcome"> Welcome to your sorting. Don\'t fear. You don\'t have to wrestle a troll. Just try on the hat.</h2>'
        houseOutput += '<h3 class="house-is"> Your house is.........'
        if (json == "Ravenclaw"){
          houseOutput += '<img class = "house-img" src="https://cdn1.bigcommerce.com/n-ou1isn/ydriczk/products/88363/images/91130/Harry-Potter-Ravenclaw-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__86173.1507640763.1280.1280.jpg?c=2">';
        }
        if (json == "Gryffindor"){
          houseOutput += '<img class = "house-img" src="https://akleva.files.wordpress.com/2010/12/coat-of-arms-gryffindor.jpg?w=174&h=222&crop=1">';
        }
        if (json == "Slytherin"){
          houseOutput += '<img class = "house-img" src="https://i.pinimg.com/736x/67/20/26/67202691def63dbc1fe2d8cb899c6bb2--crests-fun.jpg">';
        }
        if (json == "Hufflepuff"){
          houseOutput += '<img class = "house-img" src="https://i.ebayimg.com/images/i/132359326162-0-1/s-l1000.jpg">';
        }
        houseOutput += '<p class="house-name">' + json + '</p>' + '</div>';
        document.getElementById("Hog-House").innerHTML = houseOutput;
      }
      else {
        let index = returnRandomNumber();
        console.log(json);
        let spellOutput = "";
        spellOutput += '<div class="spell-box">';
        spellOutput += '<p class="spell-name"><strong> Your best spell is: </strong>' + json[index].spell +'</p>';
        spellOutput += '<p class="spell-type"><strong> Type: </strong>' + json[index].type + '</p>';
        spellOutput += '<p class="Action"><strong> Action: </strong>' + json[index].effect + '</p>';
        document.getElementById("My-Spell").innerHTML = spellOutput;
      }
    });
});
function returnRandomNumber() {
  var x = Math.floor((Math.random()*150));
  return x;
}
