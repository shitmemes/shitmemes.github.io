

function balls(vid, title, id, info, offensive, epileptic) {

    // default value for info
    if (info === null || info === undefined) {
        info = "Info isn't available.";
    };

var htmlContent = "<!DOCTYPE html>"+

    // head and shit like dat
    "<html>" +
    "<head>" +
    "<title>ID " + id + ": " + title + "</title>" +
    "<link rel='stylesheet' href='https://purplsoosh.github.io/resources/main.css'>" +
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
	htmlContent += "<a href='https://shitmemes.github.io/memes/" + Math.floor(id) - 1 + "'>Main meme</a>";
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
    "<marquee scrollspeed='8'>Other pages!</marquee>" +
    "<a href='../../../pages/changelog/'>Changelog</a><br>" +
    "<a href='../../../pages/servers/'>Server list</a><br>" +
    "<a href='../../../pages/shitpost/'>Shitpost Generator</a><br>" +
    "<a href='../../../'>Main page</a>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "<script src='https://purplsoosh.github.io/resources/memes/moreshit.js'></script>" +
    "</body>" +
    "</html>";

document.write(htmlContent);
}
