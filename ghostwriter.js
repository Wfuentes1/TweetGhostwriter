function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Where other men ", "Where others are ", "We work in the dark ", "We are "]
  var body =["Nothing is True", "Everything is Permitted", "to serve the light", "Assassins", "to live the consequences"];
  var end = ["The creed is a warning", "Nothing is Forbidden"];
   randIndex = randomUpTo(intro.length -1);
   sentence = intro[randIndex];
   randIndex = randomUpTo(body.length - 1);
   sentence = sentence + " " + body[randIndex];
   randIndex = randomUpTo(end.length - 1);
   sentence = sentence + " " + end[randIndex];
   document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
