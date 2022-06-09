var oldresult;
function searchsteemlink() {
	//var searchString = "[Steem:Link]" // Suchwort auslesen

  //var result = document.getElementById('pageContent').innerHTML.match(searchString); // in pageContent nach dem Suchwort suchen
	/*while (document.getElementById('caption-window-_0').textContent != true) {

	}*/
/*while(!document.querySelector("caption-window-_0")) {
  await new Promise(r => setTimeout(r, 500));
}*/


	var playsoundnow = false;
	//var result = ((document.getElementsByClassName('caption-window ytp-caption-window-bottom'))[0].textContent};
	
	var x = document.getElementsByClassName("caption-window ytp-caption-window-bottom");
	var i;
	for (i = 0; i < x.length; i++) {
		result = x[i].textContent;
	}
	
	//var result = (document.getElementsByClassName('captions-text'));
	//result[1]
	//var result = (document.getElementById('caption-window-_0').textContent);
	if (!(result == oldresult)) {
	var playsoundnow = true;
	}
	oldresult = result;
	//texttospeak();
return([result, playsoundnow])
}

function texttospeak()
{
	var oldresult;
	var timer = setInterval(function() {
	var result = (document.getElementById('caption-window-_0').textContent);
	console.log(result);
	if (!(result == oldresult)) {
		var audio = new Audio();
		audio.src ='https://translate.google.com.vn/translate_tts?ie=UTF-8&q='+encodeURI(result)+'&tl=de&client=tw-ob';
		audio.playbackRate=1.5;
		audio.play();
	}
	oldresult = result;
}, 1000)
}
/*var result = 'hallo was gehts ? '
result = encodeURIComponent(result);
var audio = new Audio();
audio.src ='https://translate.google.com.vn/translate_tts?ie=UTF-8&q='+(result)+'&tl=de&client=tw-ob';
audio.play();*/
