// Prev and Next Button

var showeyescardfdbtn = document.getElementsByClassName('show-eyes-card')[0];

var showskincardbkbtn = document.getElementById('show-skin-card');

var showmouthcardfdbtn = document.getElementById('show-mouth-card');

var showeyescardbkbtn = document.getElementsByClassName('show-eyes-card')[1];


// Cards
var skincards = document.getElementById('select-skin-card');

var eyescards = document.getElementById('select-eyes-card');

var mouthcards = document.getElementById('select-mouth-card');

// Eyes Cards Show
showeyescardfdbtn.addEventListener('click',function(){
    skincards.style.display = 'none';
    eyescards.style.display = 'block';
});

// Skin Cards Back Button Show
showskincardbkbtn.addEventListener('click',function(){
    eyescards.style.display = 'none';
    skincards.style.display = 'block';
});

// Mouth Cards Forward Button Show
showmouthcardfdbtn.addEventListener('click',function(){
    eyescards.style.display = 'none';
    mouthcards.style.display = 'block';
});

// Eyes Cards Backward Button Show
showeyescardbkbtn.addEventListener('click',function(){
    mouthcards.style.display = 'none';
    eyescards.style.display = 'block';
});


// Emoji Maker functions

var skincardshow = document.getElementById('skin');

var eyescardshow = document.getElementById('eyes');

var mouthcardshow = document.getElementById('mouth');

function yellowskin(event)
{
   skincardshow.setAttribute("src", event.target.src);
}

function greenskin(event)
{
   skincardshow.setAttribute("src", event.target.src);
}

function redskin(event)
{
   skincardshow.setAttribute("src", event.target.src);
}

function eyenormal(event)
{
    eyescardshow.setAttribute("src", event.target.src);
}

function eyeclosed(event)
{
    eyescardshow.setAttribute("src", event.target.src);
}

function eyelong(event)
{
    eyescardshow.setAttribute("src", event.target.src);
}

function eyelaughing(event)
{
    eyescardshow.setAttribute("src", event.target.src);
}

function eyerolling(event)
{
    eyescardshow.setAttribute("src", event.target.src);
}

function eyewinking(event)
{
    eyescardshow.setAttribute("src", event.target.src);
}

function mouthopen(event)
{
    mouthcardshow.setAttribute("src", event.target.src);
}

function mouthsmiling(event)
{
    mouthcardshow.setAttribute("src", event.target.src);
}

function mouthstraight(event)
{
    mouthcardshow.setAttribute("src", event.target.src);
}

function mouthsad(event)
{
    mouthcardshow.setAttribute("src", event.target.src);
}

function moutheeth(event)
{
    mouthcardshow.setAttribute("src", event.target.src);
}