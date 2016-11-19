// https://github.com/wesbos/keycodes/blob/gh-pages/scripts.js
var keycodes = {
  // 3 : "break",
  8 : new MyKeyCode("Toss the negativity", ""), //delete/backspace
  9 : new MyKeyCode("next please", ""), //tab
  // 12 : 'clear',
  13 : new MyKeyCode("You just found the entrance!", "home"), //enter
  16 : new MyKeyCode(".. your mindset from time to time. ;)", ""), //shift
  17 : new MyKeyCode("Procrastinating is bad. Procrastination is the devil!","https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator?language=en"), //ctrl
  18 : new MyKeyCode("You always have a choice", ""), //alt/option
  // 19 : "pause/break",
  20 : new MyKeyCode("YEP ..oops sorry", "http://www.slate.com/blogs/lexicon_valley/2015/04/01/accidental_caps_lock_is_the_typographical_faux_pas_of_our_time.html"), //capslock
  27 : new MyKeyCode(".. the chaos.", ""), //escape
  32 : new MyKeyCode("JUMP!", ""), //space
  // 33 : "page up",
  // 34 : "page down",
  // 35 : "end",
  // 36 : "home ",
  37 : new MyKeyCode("(･∇･)", ""), //（〜^∇^)〜left arrow ",
  38 : new MyKeyCode("(･∇･)", ""),//up arrow ", 
  39 : new MyKeyCode("(･∇･)", ""), //right arrow", (._.) ( l: ) ( .-. ) ( :l ) (._.)
  40 : new MyKeyCode("(･∇･)", ""), //"down arrow ", 
  // 41 : "select",
  // 42 : "print",
  // 43 : "execute",
  // 44 : "Print Screen",
  // 45 : "insert ",
  // 46 : "delete",
  48 : new MyKeyCode("We all gotta start from somewhere.",""),//0",
  49 : new MyKeyCode("Solo", ""),//1",
  50 : new MyKeyCode("Soulmates", ""),//"2",
  51 : new MyKeyCode("Started taking piano lessons", ""), //3",
  52 : new MyKeyCode("Started taking swimming lessons", ""),//"4",
  53 : new MyKeyCode("", ""), //5",
  // 54 : "6",
  // 55 : "7",
  56 : new MyKeyCode("My birthdate! :D", ""), //8
  // 57 : "9",
  // 58 : ":",
  // 59 : "semicolon (firefox), equals",
  // 60 : "<",
  // 61 : "equals (firefox)",
  // 63 : "ß",
  // 64 : "@ (firefox)",
  // 65 : "a",
  // 66 : "b",
  // 67 : "c",
  // 68 : "d",
  69 : new MyKeyCode("ew", ""), //e 
  70 : new MyKeyCode("Friends, Family",""),//f",
  // 71 : "g",
  72 : new MyKeyCode("How are you?", ""),//h
  73 : new MyKeyCode("Solo traveler", ""), //i
  // 74 : new MyKeyCode("", ""),//j
  // 75 : "k",
  // 76 : new MyKeyCode("I have a friend who hates it when I use \'lol\'. It's sliiightly rubbing off on me.",""), //l
  77 : new MyKeyCode("Mark Manson", "https://markmanson.net"),//m,
  78 : new MyKeyCode("Let's try something new today!", ""), //n,
  // 79 : "o",
  // 80 : "p",
  81 : new MyKeyCode("Don't give up!! Persevere!",""), //q
  // 82 : "r",
  83 : new MyKeyCode("Stretch daily", ""),//s",
  84 : new MyKeyCode("Tea > Coffee", ""), //t
  // 85 : "u",
  86 : new MyKeyCode("There's this Korean Pop group... ", "https://en.wikipedia.org/wiki/BTS_(band)"),  //V!!!!
  87 : new MyKeyCode("Water (water) (water) ","http://www.setnode.com/blog/university-of-waterloo-cheers/"),
  // 88 : "x",
  89 : new MyKeyCode("Made this on a whim. Wanted to make something interactive and personal.",""), //y",
  // 90 : "z",
  91 : new MyKeyCode("I COMMAND FROM THE LEFT!!", ""), //Windows Key / Left ⌘ / Chromebook Search key",
  // 92 : "right window key ",
  93 : new MyKeyCode("!!I COMMAND FROM THE RIGHT", ""), //Windows Menu / Right ⌘",
  // 96 : "numpad 0 ",
  // 97 : "numpad 1 ",
  // 98 : "numpad 2 ",
  // 99 : "numpad 3 ",
  // 100 : "numpad 4 ",
  // 101 : "numpad 5 ",
  // 102 : "numpad 6 ",
  // 103 : "numpad 7 ",
  // 104 : "numpad 8 ",
  // 105 : "numpad 9 ",
  // 106 : "multiply ",
  // 107 : "add",
  // 108 : "numpad period (firefox)",
  // 109 : "subtract ",
  // 110 : "decimal point",
  // 111 : "divide ",
  // 112 : "f1 ",
  // 113 : "f2 ",
  // 114 : "f3 ",
  // 115 : "f4 ",
  // 116 : "f5 ",
  // 117 : "f6 ",
  // 118 : "f7 ",
  // 119 : "f8 ",
  // 120 : "f9 ",
  // 121 : "f10",
  // 122 : "f11",
  // 123 : "f12",
  // 124 : "f13",
  // 125 : "f14",
  // 126 : "f15",
  // 127 : "f16",
  // 128 : "f17",
  // 129 : "f18",
  // 130 : "f19",
  // 131 : "f20",
  // 132 : "f21",
  // 133 : "f22",
  // 134 : "f23",
  // 135 : "f24",
  // 144 : "num lock ",
  // 145 : "scroll lock",
  // 160 : "^",
  // 161: '!',
  // 163 : "#",
  // 164: '$',
  // 165: 'ù',
  // 166 : "page backward",
  // 167 : "page forward",
  // 169 : "closing paren (AZERTY)",
  // 170: '*',
  // 171 : "~ + * key",
  // 173 : "minus (firefox), mute/unmute",
  // 174 : "decrease volume level",
  // 175 : "increase volume level",
  // 176 : "next",
  // 177 : "previous",
  // 178 : "stop",
  // 179 : "play/pause",
  // 180 : "e-mail",
  // 181 : "mute/unmute (firefox)",
  // 182 : "decrease volume level (firefox)",
  // 183 : "increase volume level (firefox)",
  186 : new MyKeyCode("\'A semicolon is used when an author could’ve ended a sentence but chose not to. You are the author and the sentence is your life.\'", "http://www.projectsemicolon.org/"), //semicolon
  187 : new MyKeyCode("Everyone’s work is equally important.",""), //equal sign
  188 : new MyKeyCode("Foood comaa nooo", ""), //comma",
  189 : new MyKeyCode("The em dash is perhaps the most versatile punctuation mark.", "http://www.thepunctuationguide.com/em-dash.html"), //dash 
  190 : new MyKeyCode("Cramps.", ""), //period
  191 : new MyKeyCode("/italics/ /emphasis/ /actions/ ////border//// //comments", ""), //forward slash / ç",
  // 192 : "grave accent / ñ",
  // 193 : "?, / or °",
  // 194 : "numpad period (chrome)",
  219 : new MyKeyCode("[:", ""), //"open bracket ",
  // 220 : "back slash ",
  221 : new MyKeyCode(":]", ""), //close bracket ",
  222 : new MyKeyCode("\'You are your own architect.\' -- Jaejoong ",""), //single quote
  // 223 : "`",
  // 224 : "left or right ⌘ key (firefox)",
  // 225 : "altgr",
  // 226 : "< /git >",
  // 230 : "GNOME Compose Key",
  // 233 : "XF86Forward",
  // 234 : "XF86Back",
  // 255 : "toggle touchpad"
};

module.exports = {
  keycodes : keycodes
};

