var images = ["", "", "", "", "", ""];
var descriptions  = ["", "", "", "", "", ""];
var titles  = ["", "", "", "", "", ""];

var LEN = 6;

var photobtn = document.getElementById("photos");
var tradbtn = document.getElementById("traditional");
var digitalbtn = document.getElementById("digital");

function photobtnClicked(){
    photobtn.classList.add("currentpage");
    tradbtn.classList.remove("currentpage");
    digitalbtn.classList.remove("currentpage");
    
    images[0] = "azalea";
    images[1] = "snowtrees";
    images[2] = "summer";
    images[3] = "rhdodendron";
    images[4] = "mushroom";
    images[5] = "autumn";

    descriptions[0] = "Pretty Pink Blooming Azalea Flowers";
    descriptions[1] = "Trees in Snow Against Sky";
    descriptions[2] = "Beautiful Forest Path";
    descriptions[3] = "Starburst Flowers of Purple Rhododendron";
    descriptions[4] = "Amanita Amerirubescens Mushroom in Forest";
    descriptions[5] = "Stream in Autumn";
    
    titles[0] = "Azalea";
    titles[1] = "Winter Trees";
    titles[2] = "Forest Trail";
    titles[3] = "Rhododendron";
    titles[4] = "Mushroom";
    titles[5] = "Autumn Creek";

    var itemElements = document.getElementsByClassName('imageHref');
    var imageThumbs = document.getElementsByClassName('image');
    var imageDesc = document.getElementsByClassName('caption-text');
    var imageTitle = document.getElementsByClassName('caption-title');

    for(let i = 0; i < LEN; i++){
        itemElements.item(i).setAttribute("href", "../assets/photography/" + images[i] + ".jpg");
        imageThumbs.item(i).setAttribute("src", "../assets/photography/" + images[i] + "400.jpg");
        imageDesc.item(i).innerText = descriptions[i];
        imageTitle.item(i).innerText = titles[i];
    }
};

function tradbtnClicked(){
    tradbtn.classList.add("currentpage");
    photobtn.classList.remove("currentpage");
    digitalbtn.classList.remove("currentpage");

    images[0] = "bardowl";
    images[1] = "fox";
    images[2] = "furrybadges";
    images[3] = "bat";
    images[4] = "remembrance";
    images[5] = "waterdeer";

    descriptions[0] = "A bard owl, Barred Owl; Prismacolor Marker";
    descriptions[1] = "Fox; Acrylic on Wood";
    descriptions[2] = "Furry Badges; Black Paper/ Colored Pencils";
    descriptions[3] = "Playful Townsend's Bat; Black Paper/ Colored Pencils";
    descriptions[4] = "Portrait Done in the Memory of a Good Friend; Scratchboard";
    descriptions[5] = "Waterdeer; Scratchboard with Watercolor";
    
    titles[0] = "Bard Owl";
    titles[1] = "Wisteria Fox";
    titles[2] = "Badges"
    titles[3] = "Townsend's Bat";
    titles[4] = "Rememberance";
    titles[5] = "Waterdeer";

    var itemElements = document.getElementsByClassName('imageHref');
    var imageThumbs = document.getElementsByClassName('image');
    var imageDesc = document.getElementsByClassName('caption-text');
    var imageTitle = document.getElementsByClassName('caption-title');
    

    for(let i =0; i < LEN; i++){
        itemElements.item(i).setAttribute("href", "../assets/traditional/" + images[i] + ".jpg");
        imageThumbs.item(i).setAttribute("src", "../assets/traditional/" + images[i] + "400.jpg");
        imageDesc.item(i).innerText = descriptions[i];
        imageTitle.item(i).innerText = titles[i];
    }
};

function digitalbtnClicked(){
    digitalbtn.classList.add("currentpage");
    tradbtn.classList.remove("currentpage");
    photobtn.classList.remove("currentpage");

    images[0] = "bakery";
    images[1] = "bluedevil";
    images[2] = "dragonwolves";
    images[3] = "manelessweb";
    images[4] = "meadlabel";
    images[5] = "roxo";

    descriptions[0] = "Logo for Jim and Bean's Bakery";
    descriptions[1] = "Design for Little League Team";
    descriptions[2] = "Clan Symbol for Game Warframe";
    descriptions[3] = "Tsavo Maneless Lions for World Lion Day";
    descriptions[4] = "Label for a Meadery";
    descriptions[5] = "Video Game Themed Commission for Roxo";
    
    titles[0] = "Bakery Logo";
    titles[1] = "Blue Devils";
    titles[2] = "Dragonwolves Clan";
    titles[3] = "Maneless Lions of Tsavo";
    titles[4] =  "Wolfstar Meaderies";
    titles[5] = "Roxo Kombat";

    var itemElements = document.getElementsByClassName('imageHref');
    var imageThumbs = document.getElementsByClassName('image');
    var imageDesc = document.getElementsByClassName('caption-text');
    var imageTitle = document.getElementsByClassName('caption-title');

    for(let i =0; i < LEN; i++){
        itemElements.item(i).setAttribute("href", "../assets/digital/" + images[i] + ".jpg");
        imageThumbs.item(i).setAttribute("src", "../assets/digital/" + images[i] + "400.jpg");
        imageDesc.item(i).innerText = descriptions[i];
        imageTitle.item(i).innerText = titles[i];
    }
};

photobtn.addEventListener("click", photobtnClicked, false);
tradbtn.addEventListener("click", tradbtnClicked, false);
digitalbtn.addEventListener("click", digitalbtnClicked, false);