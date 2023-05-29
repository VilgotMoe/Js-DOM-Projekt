
// Change Background Color
document.getElementById("changeBg").addEventListener("click", function () {
    document.body.style.backgroundColor = "#96BAC6"
})

// Good Vibes
document.getElementById("goodVibes").addEventListener("click", function () {
    var textDiv = document.querySelector(".textDiv")
    var h1 = document.createElement("h1")

    h1.innerText = "Be the best version of you!"
    h1.id = "ja"
    h1.style.fontSize = "3vw"
    textDiv.append(h1)
})

// Time
document.getElementById("time").addEventListener("click", function () {

    var nu = new Date();

    var veckodagar = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör']
    var manader = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']

    var dag = veckodagar[nu.getDay()]
    var manad = manader[nu.getMonth()]
    var datum = nu.getDate()
    var ar = nu.getFullYear()
    var timme = nu.getHours()
    var minut = nu.getMinutes()
    var sekund = nu.getSeconds()
    var tidszon = (nu.getTimezoneOffset() / 60) * -1

    var time = dag + ' ' + manad + ' ' + datum + ' ' + ar + ' ' + timme + ':' + minut + ':' + sekund + ' GMT' + (tidszon >= 0 ? '+' : '-') + tidszon

    var textDiv = document.querySelector(".textDiv")
    var h1 = document.createElement("p")

    h1.innerText = time
    h1.id = "ja"
    textDiv.append(h1)
})

// Change Picture
document.getElementById("changePicture").addEventListener("click", function () {
    document.querySelector(".image").src = "./images/dice-3.jpg"
})

// Hide Picture
document.getElementById("hidePicture").addEventListener("click", function () {
    document.querySelector(".image").style.opacity = 0
})

// Show Picture
document.getElementById("showPicture").addEventListener("click", function () {
    document.querySelector(".image").style.opacity = 1
})


// Header
document.getElementById("showHeader").addEventListener("click", function () {
    var di = document.querySelector(".header")
    var elements = document.querySelectorAll('#ja');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        di.appendChild(element)
      }
      
})

// Remove Header
document.getElementById("removeHeader").addEventListener("click", function () {
    var di = document.querySelector(".textDiv")
    var elements = document.querySelectorAll('#ja');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        di.appendChild(element)
      }
      
})

// Show Header
document.getElementById("showHeader2").addEventListener("click", function () {
    var di = document.querySelector(".header")
    var elements = document.querySelectorAll('#ja');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        di.appendChild(element)
      }
    document.getElementById('end').innerHTML = "Thank you for watching my website"
})