var Scraper = {};
Scraper.flavors = [];
Scraper.recent = "";

Scraper.Initialize = function() {
    jQuery('<div/>', {
    id: 'flavors',
    rel: 'external',
    text: 'Flavor Text Goes Here',
    style: 'position: fixed; top:0; left:0'
    }).appendTo('body');
}

Scraper.Scan = function() {

        text = $(".destt-desc").text().trim();
    if ( Scraper.flavors.indexOf(text) < 0) {
        if (text != "") {
            
            Scraper.flavors.push(text);
            $("#flavors").text("New Line: " + text);
        }
    }
    else {
        $("#flavors").text("Nothing added // " + text);
    
    }

}



Scraper.StartLoop = function () {
    Scraper.loop = setInterval(Scraper.Looper, 300);
    
}
Scraper.Looper = function() {
    
    Scraper.Scan();
}

Scraper.Stop = function() {
    clearInterval(Scraper.loop);
}

Scraper.Initialize();
Scraper.StartLoop();