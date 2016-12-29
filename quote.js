

$('#button').on("click",function(){
  var quote = [
"Killing your comfort zone is about living a life of continual curiosity",
"Be somebody who makes everone feel like somebody",
"If your dream dont scare you, they aint big enough",
"Love your family, work super hard, live your passion",
"Let your past make you better, not bitter"
]
  var random = Math.floor(Math.random()*5)
  var randomQuote = quote[random]
$(".lines").text(randomQuote)
})
