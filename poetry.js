// Destiny Poetry Generator

// GenerateLine1
// GenerateLine2
// GenerateLine3
$(document).ready ( function(){
    //$("#line1").text(Primaries[Math.floor(Math.random()*Primaries.length)]);
    MakePoetry();
});

function MakePoetry(){
    WriteLine(1);
    WriteLine(2);
    WriteLine(3);
}


function WriteLine(line) {
    var weapon;
    var stanza;
    switch (line) {
        case 1: 
            weapon = Primaries;
            stanza = $("#line1");
            break;
        case 2:
            weapon = Specials;
            stanza = $("#line2");
            break;
        case 3:
            weapon = Heavies;
            stanza = $("#line3");
            break;
        default: 
            weapon = ["There's nothing left. Not even the light."];
            stanza = $("#line1");
    }
    stanza.fadeOut(700, function(){stanza.text(weapon[Math.floor(Math.random()*weapon.length)]); stanza.fadeIn(300);    });
    //stanza.text(weapon[Math.floor(Math.random()*weapon.length)]);     
    //stanza.fadeIn(300);
}



