const DIG = "Digital Illustration";
const INK = "Ink on Paper";
const JPG = ".jpg";
const PNG = ".png";
const GIF = ".gif";

const work_template = {filename_title: "", title: "untitled", month: 0, media: DIG, extension: JPG};

const archive = [{year : 2020, works: [{filename_title: "20201100pop", title: "Pop!", month: 11, media: DIG, extension: PNG},
        {filename_title: "20201199faceoff", title: "Faceoff", month: 11, media: DIG, extension: PNG},
        {filename_title: "20201100mediated_living", title: "Mediated Living", month: 11, media: DIG, extension: PNG},
        {filename_title: "20201100staying_healthy", title: "Staying Healthy", month: 11, media: DIG, extension: PNG},
        {filename_title: "20201000pumpkin", title: "untitled", month: 10, media: DIG, extension: PNG},
        {filename_title: "20201000digital_world", title: "Digital World", month: 10, media: DIG, extension: PNG},
        {filename_title: "20200800verg_ref", title: "Verg Ref", month: 8, media: DIG, extension: PNG},
        {filename_title: "20200800balcony", title: "untitled", month: 8, media: DIG, extension: PNG},
        {filename_title: "20200700nervous", title: "Nervous", month: 7, media: DIG, extension: PNG}]},
    {year : 2021, works: [{filename_title: "secret_lab", title: "Secret Lab", month: 12, media: DIG, extension: JPG},
            {filename_title: "overlap", title: "untitled", month: 12, media: DIG, extension: JPG},
            {filename_title: "new_years_eve", title: "untitled", month: 12, media: DIG, extension: JPG},
            {filename_title: "layered_target_spiders", title: "untitled", month: 11, media: DIG, extension: JPG},
            {filename_title: "phantogram", title: "Phantogram", month: 11, media: DIG, extension: JPG},
            {filename_title: "vrrmvrerrvvwwwvrEVRVvww", title: "vrrmvrerrvvwwwvrEVRVvww", month: 11, media: INK, extension: PNG},
            {filename_title: "cry_playlist_cover", title: "untitled playlist cover", month: 10, media: INK + ", " + DIG, extension: PNG},
            {filename_title: "hanging_from_a_rooftop", title: "Hanging from a Rooftop", month: 10, media: DIG, extension: PNG},
            {filename_title: "left_behind", title: "A Former Billionaire Meets a Former Employee", month: 10, media: DIG, extension: JPG},
            {filename_title: "understall", title: "untitled", month: 8, media: DIG, extension: JPG},
            {filename_title: "20210700bent", title: "untitled", month: 7, media: DIG, extension: JPG},
            {filename_title: "20210700deer_splurt", title: "untitled", month: 7, media: DIG, extension: JPG},
            {filename_title: "20210700verg_rotary", title: "untitled", month: 7, media: DIG, extension: JPG},
            {filename_title: "20210700verg_chastity", title: "untitled", month: 7, media: DIG, extension: JPG},
            {filename_title: "20210600overwhelmed_succumb", title: "Overwhelmed, Succumb", month: 6, media: DIG, extension: JPG},
            {filename_title: "20210611vergundy_logo", title: "untitled logo", month: 6, media: DIG, extension: JPG},
            {filename_title: "20210600hypno", title: "untitled", month: 6, media: DIG, extension: JPG},
            {filename_title: "20210500property", title: "Property", month: 5, media: DIG, extension: JPG},
            {filename_title: "20210400seductress", title: "Seductress", month: 4, media: DIG, extension: JPG},
            {filename_title: "20210400likethis", title: "untitled", month: 4, media: DIG, extension: PNG},
            {filename_title: "20210300dick_portal", title: "untitled", month: 3, media: DIG, extension: PNG},
            {filename_title: "20210300rest", title: "Rest", month: 3, media: DIG, extension: JPG},
            {filename_title: "20210300sick", title: "untitled", month: 3, media: DIG, extension: PNG},
            {filename_title: "20210200desk", title: "untitled", month: 2, media: DIG, extension: PNG},
            {filename_title: "20210200big_ring_panel2", title: "Panel from The Big Ring", month: 2, media: DIG, extension: PNG},
            {filename_title: "20210100rat", title: "untitled", month: 1, media: DIG, extension: PNG}]},
    {year : 2022, works: [{filename_title: "noise", title: "Noise", month: 12, media: DIG, extension: JPG},
            {filename_title: "pony", title: "Pony", month: 12, media: DIG, extension: JPG},
            {filename_title: "file_transfer_protocol", title: "File Transfer Protocol", month: 11, media: DIG, extension: JPG},
            {filename_title: "rotary_birthday", title: "Birthday Gift for Rotary", month: 11, media: DIG, extension: JPG},
            {filename_title: "slip", title: "Slip", month: 11, media: DIG, extension: JPG},
            {filename_title: "emo1", title: "Emo 1", month: 10, media: DIG, extension: JPG},
            {filename_title: "emo2", title: "Emo 2", month: 10, media: DIG, extension: JPG},
            {filename_title: "emo3", title: "Emo 3", month: 10, media: DIG, extension: JPG},
            {filename_title: "bag", title: "untitled", month: 10, media: DIG, extension: JPG},
            {filename_title: "hahaha", title: "hahaha", month: 10, media: DIG, extension: JPG},
            {filename_title: "sigil", title: "Sigil", month: 10, media: DIG, extension: JPG},
            {filename_title: "rampage", title: "untitled", month: 10, media: DIG, extension: JPG},
            {filename_title: "9_8", title: "untitled", month: 9, media: DIG, extension: JPG},
            {filename_title: "horny", title: "untitled", month: 9, media: DIG, extension: JPG},
            {filename_title: "scan_start", title: "untitled", month: 9, media: INK + ", " + DIG, extension: JPG},
            {filename_title: "big_blast", title: "Big Blast", month: 9, media: DIG, extension: JPG},
            {filename_title: "grey", title: "Grey", month: 9, media: DIG, extension: JPG},
            {filename_title: "lava", title: "Guide to Joining the Yoge", month: 8, media: DIG, extension: JPG},
            {filename_title: "IMG_6404", title: "untitled", month: 8, media: DIG, extension: JPG},
            {filename_title: "antiques_roadshow_5", title: "Antiques Roadshow 5", month: 7, media: DIG, extension: JPG},
            {filename_title: "antiques_roadshow_6", title: "Antiques Roadshow 6", month: 7, media: DIG, extension: JPG},
            {filename_title: "deer", title: "deer", month: 7, media: DIG, extension: JPG},
            {filename_title: "internet_friends", title: "Internet Friends", month: 7, media: DIG, extension: JPG},
            {filename_title: "playlist_cover", title: "untitled playlist cover", month: 7, media: DIG, extension: JPG},
            {filename_title: "20220600antiques_roadshow_1", title: "Antiques Roadshow 1", month: 6, media: DIG, extension: JPG},
            {filename_title: "20220600antiques_roadshow_2", title: "Antiques Roadshow 2", month: 6, media: DIG, extension: JPG},
            {filename_title: "20220600antiques_roadshow_3", title: "Antiques Roadshow 3", month: 6, media: DIG, extension: JPG},
            {filename_title: "20220600antiques_roadshow_4", title: "Antiques Roadshow 4", month: 6, media: DIG, extension: JPG},
            {filename_title: "20220600city", title: "untitled", month: 6, media: DIG, extension: JPG},
            {filename_title: "20220600june1", title: "untitled", month: 6, media: DIG, extension: JPG},
            {filename_title: "20220600june2", title: "untitled", month: 6, media: DIG, extension: JPG},
            {filename_title: "20220600performance_of_desire", title: "untitled", month: 6, media: DIG, extension: JPG},
            {filename_title: "20220600world_war_me", title: "World War Me", month: 6, media: DIG, extension: JPG},
            {filename_title: "20220500grounding", title: "untitled", month: 5, media: DIG, extension: JPG},
            {filename_title: "20220500reallyStressDream", title: "untitled", month: 5, media: DIG, extension: JPG},
            {filename_title: "20220500515", title: "Things Sweet and Gooey and Pixelated", month: 5, media: DIG, extension: JPG},
            {filename_title: "20220400wooby", title: "Wooby", month: 4, media: DIG, extension: JPG},
            {filename_title: "20220400hills_and_rocks", title: "untitled", month: 4, media: DIG, extension: JPG},
            {filename_title: "20220400im_okay", title: "untitled", month: 4, media: DIG, extension: JPG},
            {filename_title: "20220400trans_doodle", title: "untitled", month: 4, media: DIG, extension: PNG},
            {filename_title: "20220300dragon_gif", title: "untitled", month: 3, media: DIG, extension: GIF},
            {filename_title: "20220300whoWouldaThought", title: "untitled", month: 3, media: DIG, extension: JPG},
            {filename_title: "20220200im_in_love", title: "untitled", month: 2, media: DIG, extension: JPG},
            {filename_title: "20220100casting_a_spell", title: "Casting a Spell", month: 1, media: DIG, extension: JPG},
            {filename_title: "20220100pizza_pizza", title: "untitled", month: 1, media: DIG, extension: JPG},
            {filename_title: "20220100siblings_triptych", title: "Siblings Triptych", month: 1, media: INK, extension: JPG}]},
    {year : 2023, works: [{filename_title: "20230101doodle", title: "untitled", month: 1, media: DIG, extension: JPG},
            {filename_title: "20230121qrt", title: "untitled", month: 1, media: DIG, extension: JPG},
            {filename_title: "20230121doodle", title: "untitled", month: 1, media: INK + ", " + DIG, extension: JPG},
            {filename_title: "20230123doodle", title: "untitled", month: 1, media: INK + ", " + DIG, extension: JPG},
            {filename_title: "20230131third", title: "untitled", month: 1, media: INK + ", " + DIG, extension: JPG},
        ]}];

const button_ids = ["2020-expand", "2021-expand", "2022-expand", "2023-expand"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const fullres_path_offset = "/images/art/";
const preview_path_offest = "/images/archive_previews/";
const preview_filename_add = "_archive_preview";
const jpg = ".jpg";
const NO_PREVIEW = "/images/NO_PREVIEW.jpg";
const RIGHT_ARROW_IMG = "/images/triangle_button.png";
const DOWN_ARROW_IMG = "/images/triangle_button_down.png";

var lists_loaded = {2020: false, 2021: false, 2022: false, 2023: false};
var lists_hidden = {2020: false, 2021: false, 2022: false, 2023: false};

// Generate the flex box items for a given year in the archive
function loadYearList(year) {
    lists_loaded[year] = true;
    //console.log("loading works for year " + year);
    var works = archive[year - 2020].works;
    works.sort(function(a,b){
        var md = a.month - b.month;

        return md != 0 ? md : a.title.localeCompare(b.title);
    });
    var E = document.getElementById("" + year + "-list");
    const template = document.querySelector('#archive-work');
    for (var w of works) {
        //console.log(" loading work: " + w.title);
        addWorkToList(E, year, w, template);
    }
}

// Adds a work to an archive list by filling the provided template
function addWorkToList(listElem, year, work, template) {

    // Clone the new work and insert it into the list
    const clone = template.content.cloneNode(true);

    // Link to full-res image
    let img_link = clone.querySelector("a");
    img_link.href = fullres_path_offset + work.filename_title + work.extension;
    // Link to preview image
    let preview_link = clone.querySelector("#preview");
    preview_link.src = preview_path_offest + work.filename_title + preview_filename_add + jpg;
    preview_link.onerror = function() {this.src = NO_PREVIEW;};
    // month of work
    let date = clone.querySelector("#date");
    date.textContent = months[work.month - 1] + " " + year;
    // Title of work
    let title = clone.querySelector("#title");
    title.textContent = work.title + ", ";
    // Media of work
    let media = clone.querySelector("#media");
    media.textContent = work.media;

    listElem.appendChild(clone);
}

// Toggle a given year's dropdown button image
function toggleDropdownButtonDisplay(year) {
    //console.log("Toggling dropdown button " + year);
    var E = document.getElementById(year + "-expand");
    if(E.dataset.down == "true") {
        E.src = RIGHT_ARROW_IMG;
        E.dataset.down = "false";
    } else {
        E.src = DOWN_ARROW_IMG;
        E.dataset.down = "true";
    }
}

// Toggle a given year's archive list as displayed or hidden
function toggleYearListDisplay(year) {
    //console.log("Toggling display of year list " + year);
    var E = document.getElementById("" + year + "-list");

    if (!lists_hidden[year]) {
        lists_hidden[year] = true;
        //console.log("Hiding " + E.id);
        E.setAttribute("hidden", "hidden");
    } else {
        lists_hidden[year] = false;
        //console.log("Unhiding " + E.id);
        E.removeAttribute("hidden");
    }
}

function handleDropdownButtonPress(year) {
    toggleDropdownButtonDisplay(year);
    if(!lists_loaded[year]) {
        loadYearList(year);
    } else {
        toggleYearListDisplay(year);
    }
}

// Enables to arrow buttons for expanding an archive year
function addDropdownEventListeners() {
    for (var w of button_ids) {
        var E = document.getElementById(w);
        E.addEventListener("click", function(event) {
            //console.log(this.id + " button clicked");
            var year = this.id.substring(0,4);
            handleDropdownButtonPress(year);
        });
    }
}

// Uncomment these the immediately load the archive
//loadYearList(2020);
//loadYearList(2021);
//loadYearList(2022);

addDropdownEventListeners();






