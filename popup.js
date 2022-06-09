var oldresult;
function getinfo() {
  //chrome.tabs.executeScript(null, {code:"alert("afs");"});
/*chrome.tabs.executeScript( null, {code:"var x = searchsteemlink(); x "},
function(results){
  });
}*/

var timer = setInterval(function() {
chrome.tabs.executeScript( null, {code:"var x = searchsteemlink(); x "},
function(results){
  results = results[0];
  playsoundnow = results[1];
	//alert('https://translate.google.com/translate_tts?ie=UTF-8&q='+encodeURI(results[0])+'&tl=de&client=tw-ob');
  //say("test");
  if (playsoundnow == true) {
    //var audio = new Audio();
    //audio.src ='https://translate.google.com/translate_tts?ie=UTF-8&q='+encodeURI(results[0])+'&tl=de&client=tw-ob';
	var Rate = results[0].length;
	var Speed = 1.2
	Rate = 0.015*Rate;
	if (Rate < Speed)
	{Rate = Speed;}
	say(results[0],Rate);
	//audio.playbackRate=Rate;
    //audio.play();
	document.getElementById("speed").innerHTML = "Speed: " + Rate;
	document.getElementById("subtitle").innerHTML = "Subtitle: " + encodeURI(results[0]);
  }
  /*let oResponse;
  var axios = require('axios');
  var fs = require('fs');
  const sMainText = "hello world";
  const oData = {
    "input":
    {
      "text": sMainText
    },
    "voice":
    {
      "languageCode": "en-GB",
      "ssmlGender": "FEMALE"
    },
    "audioConfig":
    {
      "audioEncoding": "mp3"
    }
  };
  axios.post("https://texttospeech.googleapis.com/v1beta1/text:synthesize?fields=audioContent&key=" + process.env.GOOGLE_CLOUD_TEXT_TO_SPEECH_API, oData)
  .then(function (oResponse) {
    // write dat baoss (an encoded string) response into an mp3 file
    fs.writeFileSync('outfile.mp3', oResponse.data.audioContent, 'base64', function(err) { // write this base64 to an mp3
      alert(err);
    });
    alert("MP3 file generated and saved! Should be saved at outfile.mp3");
  })
  .catch(function (error) {
    alert(error);
  });*/
});
}, 1000)
}

function say(m,speed) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[2];
  msg.voiceURI = "native";
  msg.volume = 1;
  msg.rate = speed;
  msg.pitch = 1;
  msg.text = m;
  msg.lang = 'de-DE';
  speechSynthesis.speak(msg);
}

function test(){
}
//function steemgetvote(author,permlink) {
/*function save_password(data){
chrome.storage.sync.set({'myLine': value}, function() {
  alert("Success!");
};
}*/
/*PlaySound(results) {
var oldresult;
var timer = setInterval(function() {
	if (!(results == oldresult)) {
		var audio = new Audio();
		audio.src ='https://translate.google.com.vn/translate_tts?ie=UTF-8&q='+(results)+'&tl=de&client=tw-ob';
		audio.play();
	}
	oldresult = results;
}, 1000)
}*/
document.addEventListener('DOMContentLoaded', () => {
document.getElementById("subtitle").innerHTML = "Subtitle: " + "Load";
document.getElementById("speed").innerHTML = "Speed: " + "Load";
document.getElementById("comments").innerHTML = "Comments: " + "Load";
document.getElementById('Vote').addEventListener('click', getinfo);
document.getElementById('Vote_Reload').addEventListener('click', getinfo);
//steemgetvote();
});
