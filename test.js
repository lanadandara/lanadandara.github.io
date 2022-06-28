function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  let currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    let a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the drag names*/
let dragNamesList = [
  "Victoria 'Porkchop' Parker",
  "Tammie Brown",
  "Akashia",
  "Jade",
  "Ongina",
  "Shannel",
  "Rebeca Glasscock",
  "Nina Flowers",
  "BeBe Zahara Benet",
  "Shangela",
  "Nicole Paige Brooks",
  "Mystique Summers Madison",
  "Kylie Sonique Love",
  "Morgan McMichaels",
  "Sahara Davenport",
  "Jessica Wild",
  "Pandora Boxx",
  "Tatianna",
  "Jujubee",
  "Raven",
  "Tyra Sanchez",
  "Venus D-Lite",
  "Phoenix",
  "Mimi Imfurst",
  "India Ferrah",
  "Mariah Paris Balenciaga",
  "Stacy Layne Matthews",
  "Delta Work",
  "Carmen Carrera",
  "Yara Sofia",
  "Alexis Mateo",
  "Manila Luzon",
  "Raja",
  "Alisa Summers",
  "Lashauwn Beyond",
  "The Princess",
  "Madame LaQueer",
  "Milan",
  "Jiggly Caliente",
  "Willam",
  "DiDa Ritz",
  "Kenya Michaels",
  "Latrice Royale",
  "Phi Phi O'Hara",
  "Chad Michaels",
  "Sharon Needles",
  "Jinkx Monsoon",
  "Alaska",
  "Roxxxy Andrews",
  "Detox",
  "Coco Montrese",
  "Alyssa Edwards",
  "Ivy Winters",
  "Jade Jolie",
  "Lineysha Sparx",
  "Honey Mahogany",
  "Vivienne Pinay",
  "Monica Beverly Hillz",
  "Serena ChaCha",
  "Penny Tration",
  "Bianca Del Rio",
  "Adore Delano",
  "Courtney Act",
  "Darienne Lake",
  "BenDeLaCreme",
  "Joslyn Fox",
  "Trinity K. Bonet",
  "Laganja Estranja",
  "Milk",
  "Gia Gunn",
  "April Carrión",
  "Vivacious",
  "Kelly Mantle",
  "Magnolia Crawford",
  "Violet Chachki",
  "Ginger Minj",
  "Pearl",
  "Kennedy Davenport",
  "Katya",
  "Trixie Mattel",
  "Miss Fame",
  "Jaidynn Diore Fierce",
  "Max",
  "Kandy Ho",
  "Mrs. Kasha Davis",
  "Jasmine Masters",
  "Sasha Belle",
  "Tempest DuJour",
  "Bob the Drag Queen",
  "Kim Chi",
  "Naomi Smalls",
  "Chi Chi DeVayne",
  "Derrick Barry",
  "Thorgy Thor",
  "Robbie Turner",
  "Acid Betty",
  "Naysha Lopez",
  "Cynthia Lee Fontaine",
  "Dax ExclamationPoint",
  "Laila McQueen",
  "Sasha Velour",
  "Peppermint",
  "Shea Couleé",
  "Trinity The Tuck",
  "Alexis Michelle",
  "Nina Bo'nina Brown",
  "Valentina",
  "Farrah Moan",
  "Aja",
  "Eureka",
  "Charlie Hides",
  "Kimora Blac",
  "Jaymes Mansfield",
  "Natalia Pliacam",
  "Année Maywong",
  "Dearis Doll",
  "B Ella",
  "Amadiva",
  "JAJA",
  "Petchra",
  "Morrigan",
  "Bunny Be Fly",
  "Meannie Minaj",
  "Aquaria",
  "Kameron Michaels",
  "Asia O'Hara",
  "Miz Cracker",
  "Monét X Change",
  "The Vixen",
  "Mo Heart",
  "Blair St. Clair",
  "Mayhem Miller",
  "Dusty Ray Bottoms",
  "Yuhua Hamasaki",
  "Kalorie Karbdashian Williams",
  "Vanessa Vanjie Mateo",
  "Angele Anang",
  "Kandy Zyanide",
  "Kana Warrior",
  "Bandit",
  "Vanda Miss Joaquim",
  "Srimala",
  "Tormai",
  "Genie",
  "Miss Gimhuay",
  "Mocha Diva",
  "Maya B'Haro",
  "Katy Killer",
  "Silver Sonic",
  "M Stranger Fox",
  "Yvie Oddly",
  "Brooke Lynn Hytes",
  "A'keria C. Davenport",
  "Silky Nutmeg Ganache",
  "Nina West",
  "Shuga Cain",
  "Plastique Tiara",
  "Ra'Jah O'Hara",
  "Scarlet Envy",
  "Ariel Versace",
  "Mercedes Iman Diamond",
  "Honey Davenport",
  "Kahanna Montrese",
  "Soju",
  "The Vivienne",
  "Divina de Campo",
  "Baga Chipz",
  "Cheryl Hole",
  "Blu Hydrangea",
  "Crystal",
  "Sum Ting Wong",
  "Vinegar Strokes",
  "Scaredy Kat",
  "Gothy Kendoll",
  "Jaida Essence Hall",
  "Crystal Methyd",
  "Gigi Goode",
  "Jackie Cox",
  "Heidi N Closet",
  "Widow Von'Du",
  "Jan",
  "Brita",
  "Aiden Zhane",
  "Nicky Doll",
  "Rock M. Sakura",
  "Dahlia Sin",
  "Priyanka",
  "Rita Baga",
  "Scarlett BoBo",
  "Jimbo",
  "Lemon",
  "Ilona Verley",
  "BOA",
  "Kiara",
  "Tynomi Banks",
  "Anastarzia Anaquway",
  "Kyne",
  "Juice Boxx",
  "Envy Peru",
  "Janey Jacké",
  "Ma'MaQueen",
  "Miss Abby OMG",
  "ChelseaBoy",
  "Sederginne",
  "Madame Madness",
  "Megan Schoonbrood",
  "Patty Pam-Pam",
  "Roem",
  "Symone",
  "Kandy Muse",
  "Gottmik",
  "Rosé",
  "Olivia Lux",
  "Utica Queen",
  "Tina Burner",
  "Denali",
  "Elliott with 2 Ts",
  "LaLa Ri",
  "Tamisha Iman",
  "Joey Jay",
  "Kahmora Hall",
  "Lawrence Chaney",
  "Bimini Bon-Boulash",
  "Tayce",
  "Ellie Diamond",
  "A'Whora",
  "Sister Sister",
  "Tia Kofi",
  "Joe Black",
  "Veronica Green",
  "Ginny Lemon",
  "Asttina Mandella",
  "Cherry Valentine",
  "Kita Mean",
  "Art Simone",
  "Karen from Finance",
  "Scarlet Adams",
  "Elektra Shock",
  "Maxi Shield",
  "Etcetera Etcetera",
  "Anita Wigl'it",
  "Coco Jumbo",
  "Jojo Zaho",
  "Carmen Farala",
  "Killer Queen",
  "Sagittaria",
  "Pupi Poisson",
  "Dovima Nurmi",
  "Hugáceo Crujiente",
  "Arantxa Castilla La Mancha",
  "Inti",
  "Drag Vulcano",
  "The Macarena",
  "Vanessa Van Cartier",
  "My Little Puny",
  "Vivaldi",
  "Keta Minaj",
  "Tabitha",
  "The Countess",
  "Ivy-Elyse",
  "Love Masisi",
  "Reggy B",
  "Juicy Kutoure",
  "Krystal Versace",
  "Ella Vaday",
  "Kitty Scott-Claus",
  "Vanity Milan",
  "Scarlett Harlett",
  "Choriza May",
  "River Medway",
  "Charity Kase",
  "Victoria Scone",
  "Elektra Fence",
  "Anubis",
  "Icesis Couture",
  "Kendall Gender",
  "Pythia",
  "Gia Metric",
  "Adriana",
  "Kimora Amour",
  "Synthia Kiss",
  "Eve 6000",
  "Suki Doll",
  "Stephanie Prince",
  "Océane Aqua-Black",
  "Beth",
  "Elecktra Bionic",
  "Farida Kant",
  "Le Riche",
  "Luquisha Lubamba",
  "Ava Hangar",
  "Divinity",
  "Enorma Jean",
  "Ivana Vamp",
  "Willow Pill",
  "Lady Camden",
  "Angeria Paris VanMicheals",
  "Bosco",
  "Daya Betty",
  "DeJa Skye",
  "Jorgeous",
  "Jasmine Kennedie",
  "Kerri Colby",
  "Maddy Morphosis",
  "Orion Story",
  "Kornbread 'The Snack' Jeté",
  "Alyssa Hunter",
  "June Jambalaya",
  "Pangina Heals",
  "Sharonne",
  "Estrella Xtravaganza",
  "Venedita Von Däsh",
  "Marina",
  "Juriji Der Klee",
  "Drag Sethlas",
  "Diamante Merybrown",
  "Onyx",
  "Jota Carajota",
  "Samantha Ballentines",
  "Ariel Rec",
  "Marisa Prisa",
];

/*initiate the autocomplete function on the input element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("dragName"), dragNamesList);

//escolha correta das drags 1 vez ao dia
const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay) - 1;
};
const run = () => {
  console.log(dragQueens[getDayOfYear()]);
};

run();
