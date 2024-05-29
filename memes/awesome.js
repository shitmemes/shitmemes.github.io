        var id;
        var title;
        var directory;
	var note;
        var src;
        var submemes;
        var epileptic;
        var offensive;
        var mainMeme;

window.onload = function() {
	function chocolate() {
  fetch('https://shitmemes.github.io/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network skill issue');
      }
      return response.json();
    })
    .then(data => {
	    if (window.location.href.slice(-3, -1) == 'tm') {
    var id2 = parseInt(window.location.href.slice(0, -11).match(/-?\d+$/)?.[0], 10);
} else {
    var id2 = parseInt(window.location.href.slice(0, -1).match(/-?\d+$/)?.[0], 10);
}
          for (let i = 0; i < data.length; i++) {
      if (id2 === data[i].id) {
                         id = data[i].id;
                         title = data[i].title;
                         directory = data[i].directory;
                         note = data[i].note;
                         src = data[i].src;
                         submemes = data[i].submemes;
                         epileptic = data[i].epileptic;
                         offensive = data[i].offensive;
                         mainMeme = data[i].mainMeme;
        break;
      };
    };
    })
    .catch(error => {
      console.error('fetch skill issue:', error);
    });
	};
	chocolate();
};

function wonderhoy(id2) {
setTimeout(function() {
    console.log("Hello", parameter1, parameter2);
var htmlContent = "<html>" +
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
    "(" + id + ") Shitpost Center - " + title + "<br>";

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
    "</div>" +

    // section right
    "<div class='sectionRight'>" +
		note + "<br>" +
    "<a href='https://shitmemes.github.io'>Main page</a>" + "<br>";
    if (mainMeme) {
		htmlContent += "<a href='https://shitmemes.github.io/memes/" + mainMeme + "'>Main meme</a><br>";
		};
	  if (submemes) {
		htmlContent += "<h3>Submemes</h3><br>";
			for (let i4 = 0; i4 < submemes.length; i4++) {
				htmlContent += "<a href='https://shitmemes.github.io/memes/" + submemes[i4].id + "'>Submeme " + (i4 + 1) + ": " + submemes[i4].title + "</a><br>"
			};
		};
    htmlContent += "</div>" +
    "</div>" +
    "</div>" +
    "<script src='https://purplsoosh.github.io/resources/memes/moreshit.js'></script>" +
    "</body>" +
    "</html>";
	document.write(htmlContent);
	}, 100)
};
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
	}, 100);
}
