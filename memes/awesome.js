fetch('https://shitmemes.github.io/memes.json')
  .then(response => {
    // Handle the response
    if (!response.ok) {
      throw new Error('network wasn\'t ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(memes => {
    var id2;
            var id;
        var title;
        var directory;
	var note;
        var src;
        var submemes;
        var epileptic;
        var offensive;
        var mainMeme;
                   if (window.location.href.slice(-3, -1) == 'tm') {
                     id2 = parseInt(window.location.href.slice(0, -11).match(/-?\d+$/)?.[0], 10);
                } else {
                     id2 = parseInt(window.location.href.slice(0, -1).match(/-?\d+$/)?.[0], 10);
                }
  
  		for (let i = 0; i < memes.length; i++) {
 		   if (id2 === memes[i].id) {
    		       id2 = memes[i].id;
    		       title = memes[i].title;
    		       directory = memes[i].directory;
    		       note = memes[i].note;
   		       src = memes[i].src;
  		       submemes = memes[i].submemes;
 		       epileptic = memes[i].epileptic;
 		       offensive = memes[i].offensive;
 		       mainMeme = memes[i].mainMeme;
		    }
		}
  
  var htmlContent = "<html>" +
    "<head>" +
    "<title>ID " + id + ": " + title + "</title>" +
    "<link rel='stylesheet' href='https://shitmemes.github.io/main.css'>" +
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
    if (id <= 0) {
    htmlContent += "<meta property='og:video' content='" + directory + "'>" +
    "<meta property=''content='video.movie'>"; }
    htmlContent += "</head>" +
    "<body>" +
    "<div class='container'>" +
    "<div class='sectionTop'>" +
    "<center>" +
    "(" + id + ") Shitpost Center - " + title + "<br>";

if (id % 1 != 0) {
	if (id < 0) {
	htmlContent += "<a href='https://shitmemes.github.io/memes/" + (Math.floor(id) + 1) + "'>Main meme</a>";
	} else {
	htmlContent += "<a href='https://shitmemes.github.io/memes/" + Math.floor(id) + "'>Main meme</a>";
	}
	htmlContent += "--- <a href ='https://shitmemes.github.io'>Reroll</a>";
} else if (id < 0) {
    htmlContent += "<a href='https://shitmemes.github.io/memes/" + (id + 1) + "'>Previous</a> --- <a href='https://shitmemes.github.io'>Reroll</a> --- <a href='https://shitmemes.github.io/memes/" + (id - 1) + "'>Next</a>";
} else {
    htmlContent += "<a href='https://shitmemes.github.io/memes/" + (id - 1) + "'>Previous</a> --- <a href='https://shitmemes.github.io'>Reroll</a> --- <a href='https://shitmemes.github.io/memes/" + (id + 1) + "'>Next</a>";
}

    // epileptic / offensive warning
    if (epileptic === true || offensive === true) {
        htmlContent += "<h3>";
        if (epileptic === true) {
            htmlContent += "Epileptic content ahead! <br>";
        } 
            if (offensive === true) {
            htmlContent += "Offensive content ahead! <br>";
        } 
    htmlContent += "</h3>";
    }
htmlContent += "</center>" +
    "</div>" +
    "<div class='sections'>" +
    "<div class='sectionLeft'>" +
    "<center>" +
    "<div class='ohio'>";
    if (id <= 0) {
    htmlContent += "<video controls=''>" + // width='640' height='480'
    "<source src='" + directory + "' type='video/mp4'>" +
    "GET A BETTER BROWSER OH MY GOD" +
    "</video>";
    } else {
        htmlContent += '<img width="640" height="640" src="' + directory + '" alt=' + title + '>';
    }
    htmlContent += "</div></center>" +
    "</div>" +

    // section right
    "<div class='sectionRight'>" +
		note + "<br>" +
    "<a href='https://shitmemes.github.io'>Main page</a>" + "<br>";
    if (mainMeme) {
		htmlContent += "<a href='https://shitmemes.github.io/memes/" + mainMeme + "'>Main meme</a><br>";
		}
	  if (submemes) {
		htmlContent += "<h3>Submemes</h3><br>";
			for (let i4 = 0; i4 < submemes.length; i4++) {
				htmlContent += "<a href='https://shitmemes.github.io/memes/" + submemes[i4].id + "'>Submeme " + (i4 + 1) + ": " + submemes[i4].title + "</a><br>";
			}
		}
    htmlContent += "</div>" +
    "</div>" +
    "</div>" +
    "<script src='https://purplsoosh.github.io/resources/memes/moreshit.js'></script>" +
    "</body>" +
    "</html>";
	document.write(htmlContent);
  
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('error.... fetched:', error);
  });
// ARCHIVED

function balls(vid, title, id, info, offensive, epileptic, submemes) {

    // default value for info
    if (info === null || info === undefined) {
        info = "Info isn't available.";
    };
    if (submemes === null || submemes === undefined) {
        submemes = "This meme has no submemes.";
    };

var htmlContent = "<!DOCTYPE html>"+

    // head and shit like dat
    "<html>" +
    "<head>" +
    "<title>ID " + id + ": " + title + "</title>" +
    "<link rel='stylesheet' href='https://shitmemes.github.io/main.css'>" +
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
    if (id <= 0) {
    htmlContent += "<meta property='og:video' content='" + vid + "'>" +
    "<meta property=''content='video.movie'>" };
    htmlContent += "</head>" +
    "<body>" +
    "<div class='container'>" +
    "<div class='sectionTop'>" +
    "<center>" +
    "(" + id + ") Shitpost Centre - " + title + "<br>";

if (id % 1 != 0) {
	if (id < 0) {
	htmlContent += "<a href='https://shitmemes.github.io/memes/" + (Math.floor(id) + 1) + "'>Main meme</a>";
	} else {
	htmlContent += "<a href='https://shitmemes.github.io/memes/" + Math.floor(id) + "'>Main meme</a>";
	};
	htmlContent += "--- <a href ='https://shitmemes.github.io'>Reroll</a>";
} else if (id < 0) {
    htmlContent += "<a href='https://shitmemes.github.io/memes/" + (id + 1) + "'>Previous</a> --- <a href='https://shitmemes.github.io'>Reroll</a> --- <a href='https://shitmemes.github.io/memes/" + (id - 1) + "'>Next</a>";
} else {
    htmlContent += "<a href='https://shitmemes.github.io/memes/" + (id - 1) + "'>Previous</a> --- <a href='https://shitmemes.github.io'>Reroll</a> --- <a href='https://shitmemes.github.io/memes/" + (id + 1) + "'>Next</a>";
};

    // epileptic / offensive warning
    if (epileptic === true || offensive === true) {
        htmlContent += "<h3>";
        if (epileptic === true) {
            htmlContent += "Epileptic content ahead! <br>";
        } 
            if (offensive === true) {
            htmlContent += "Offensive content ahead! <br>";
        } 
    htmlContent += "</h3>";
    }
htmlContent += "</center>" +
    "</div>" +
    "<div class='sections'>" +
    "<div class='sectionLeft'>" +
    "<center>" +
    "<div class='ohio'>"
    if (id <= 0) {
    htmlContent += "<video controls=''>" + // width='640' height='480'
    "<source src='" + vid + "' type='video/mp4'>" +
    "GET A BETTER BROWSER OH MY GOD" +
    "</video>"
    } else {
        htmlContent += '<img width="640" height="640" src="' + vid + '" alt=' + title + '>'
    }
    htmlContent += "</div></center>" +
    "<small>" + info + "</small>" +
    "</div>" +

    // section right
    "<div class='sectionRight'>" +
    "<a href='https://shitmemes.github.io'>Main page</a>" + "<br>" +
    submemes +
    "</div>" +
    "</div>" +
    "</div>" +
    "<script src='https://purplsoosh.github.io/resources/memes/moreshit.js'></script>" +
    "<script>window.onload = function() {console.log('Just lettin ya know this uses the outdated function!')}</script>" +
    "</body>" +
    "</html>";

document.write(htmlContent);
}
