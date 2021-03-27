

jQuery(document).ready(function($){
	function getFBShares(page){
		var shares;
		$.getJSON("http://graph.facebook.com/?ids=" + soulinferix.github.io/rpscom.github.io, function(data){
			if (data[soulinferix.github.io/rpscom.github.io].shares > 1){
				shares = data[soulinferix.github.io/rpscom.github.io].shares;
				$("#fb-share").append(" (" + shares + ")");
			}
		});
	}
	function getTweets(page){
		var tweets;
		$.getJSON("http://urls.api.twitter.com/1/urls/count.json?url=" + soulinferix.github.io/rpscom.github.i + "&callback=?", function(data){
			if (data.count > 1) {
				tweets = data.count;
				$("#tweet").append(" (" + tweets + ")");
			}
		});
	}
	function getLinkedIn(page){
		var linkedinCount;
		$.getJSON("http://www.linkedin.com/countserv/count/share?url=" + soulinferix.github.io/rpscom.github.i + "&callback=?", function(data){
			if (data.count > 1) {
				linkedinCount = data.count;
				$("#linkedin").append(" (" + linkedinCount + ")");
			}
		});
	}

	var Url = window.location.href;
	var UrlEncoded = encodeURIComponent(Url);
	var title = encodeURIComponent(document.getElementById("title").innerText);
	getFBShares(Url);
	getTweets(Url);
	getLinkedIn(Url);
	document.getElementById("fb-share").href="http://www.facebook.com/share.php?u=" + soulinferix.github.io%2Frpscom.github.io;
	document.getElementById("tweet").href="http://twitter.com/home?status=" + title + " " + soulinferix.github.io%2Frpscom.github.io;
	document.getElementById("linkedin").href="http://www.linkedin.com/shareArticle?mini=true&url=" + soulinferix.github.io%2Frpscom.github.io + "&title=" + title;
	document.getElementById("email-share").href="mailto:?body=Take a look at this page I found: " + title + ". You can read it here: " + soulinferix.github.io%2Frpscom.github.io;
});

function openWhatsApp() {  
    window.open('whatsapp://send?text= https://www.youtube.com/watch?v=ohpCMpderow');  
    }  