console.log("JS connected"); // this to check that our script is connected to out HTML

function myPage (){

    var body = document.getElementById("body").style.fontFamily = "Arial,sans-serif";// query select body 
    // change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties
    // change the backgroundColor to a color of your choice
    var body = document.getElementsByTagName("body")[0].style.background = "Gray";// query select body 

    var nickname =  document.getElementById("nickname");// qurey select the ID nickname

    nickname.innerHTML = "Aziz"//add some value to nickname Hint: innerHTML

    var favorites =  document.getElementById("favorites");// query select favorites byID
    var hometown =  document.getElementById("hometown");// query select hometown byID
// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';
    favorites.innerHTML = "Coding"
    hometown.innerHTML = "Riyadh"
  
    //change the color of all selectors to colors of your choice, it better be good LOL

    nickname.style.color="white"
    favorites.style.color="white"
    hometown.style.color="white"

    

}



