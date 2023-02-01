let last_key = -1;
let hidden = true;

var preview_offset = "images/previews/";
var art_offset = "images/art/";
var piece_titles = ['20230123doodle', '20230121doodle', '20221200planepoem', '20230128somethin_alt', 'file_transfer_protocol','slip', 'emo3', 'emo2', 'emo1'];

function loadPreviews(counter) {
    // Break out if no more images
    if (counter==piece_titles.length) { return; }

    // Grab an image obj
    var I = document.getElementById("preview"+counter);

    // If error, replace with NO_PREVIEW image
    I.onerror = function() { I.src = "images/NO_PREVIEW.jpg"; loadPreviews(counter+1);}

    // Monitor load or error events, moving on to next image in either case
    I.onload = function() { loadPreviews(counter+1); }

    //Change source (then wait for event)
    I.src = preview_offset + piece_titles[counter] + "_preview.jpg";
    I.style.display = "inline";
}

function loadPreviewLinks(counter) {
    // Break out if no more images
    if (counter==piece_titles.length) { return; }

    // Grab an image obj
    var L = document.getElementById("preview_link"+counter);

    // Monitor load or error events, moving on to next image in either case
    L.onerror = function() { loadPreviewLinks(counter+1); }

    //Change source (then wait for event)
    L.href = art_offset + piece_titles[counter] + ".jpg";

    loadPreviewLinks(counter+1);
}

function toggleHiddenElems() {
    const hidden_elems = document.getElementsByClassName("hide");

    if (hidden) {
        for (var x of hidden_elems) {
            x.removeAttribute("hidden");
        }
        hidden = false;
    } else {
        for (var y of hidden_elems) {
            y.setAttribute("hidden", "hidden");
        }
        hidden = true;
    }
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 65) {
        if (last_key == 2) {
            last_key = 3;
        } else {
            last_key= 1;
        }
    } else if(event.keyCode == 67) {
        if (last_key == 1) {
            last_key = 2;
        } else {
            last_key = -1;
        }
    } else if(event.keyCode == 66) {
        if (last_key == 3) {
            console.log("1312");
            toggleHiddenElems();
        }
        last_key = -1;
    }
});

//unhide hidden elems (comment this out to show normies)
toggleHiddenElems();

//load "Recent Art" grid
loadPreviews(0);
loadPreviewLinks(0);