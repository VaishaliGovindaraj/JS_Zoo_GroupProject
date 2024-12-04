// let parentDiv =document.querySelector(".content");
// let birdCassowary = document.createElement("div");
// mainContent.classList.add("testdiv");
// mainContent.textContent = "Hello this is generated via Script";
// parentDiv.appendChild(mainContent);
// document.querySelector(".testdiv").style.color = "#fff";


//group_name, lifespan,food,description,length,weight,place





// Side bar starts here

// JavaScript for dropdown functionality with downward arrow

const headerLogo = document.querySelector(".header img");

headerLogo.src = "./images/index/logo/rb_121824.png";
headerLogo.alt = "logo image";

document.querySelector(".header h2").textContent = "SafariPark";

const groups = document.querySelectorAll('.group-title');
groups.forEach(group => {
  group.addEventListener('click', () => {
    const dropdown = group.nextElementSibling;
    const arrow = group.querySelector('.arrow');
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
      arrow.classList.remove('expanded');
    } else {
      dropdown.style.display = 'block';
      arrow.classList.add('expanded');
    }

    if (window.innerWidth <= 768) {
      // If the screen width is 600px or less (typically mobile size)
      document.querySelector('.welcome-container').style.display = 'grid'; // show the welcome message on click
  } else {
      // If the screen width is greater than 600px (typically desktop or larger screen size)
      document.querySelector('.welcome-container').style.display = 'flex'; // show the welcome message on click
  }
    document.querySelector('.animal-container').style.display = 'none'; // hide the animal details
  });
});


//mammal objects 
function Animals(groupName, name, lifeSpan, food, description, length, weight, place, src, group, groupLink) {
    this.groupName = groupName,
        this.name = name,
        this.lifeSpan = lifeSpan,
        this.food = food,
        this.description = description,
        this.length = length,
        this.weight = weight,
        this.place = place,
        this.src = src,
        this.group = group
        this.groupLink = groupLink
}

let mammalEchidna = new Animals("Mammals", "Echidna", 50, ["insects such as ants and termites", "beetle larvae", "worms"],
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    76, 10, "Throughout Austalia", "./images/Echidna.jpg", 'Mammals', './html/Mammals.html');


let mammalTasmanianDevil  = new Animals("Mammals", "Tasmanian Devil", 5, ["A predator", "eat meat from other animals such as wallabies and wombats"],
    "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    70, 10, "Tasmania",  "./images/Tasmanian Devil.jpg", 'Mammals', './html/Mammals.html');


let mammalquokka  = new Animals("Mammals", "Quokka", 10, ["Plant eaters", " shrubs", "grasses"],
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    50, 3, "Rottnest Island,few places on mainland Western Australia",  "./images/quokka.jpg", 'Mammals', './html/Mammals.html');

let reptileFrillNeckedLizard = new Animals("Reptiles","Frill-necked lizard", 20,["small insects", "spiders"], 
        "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
        90,1,"Northern  Austalia",  "./images/frilled_necked_lizard.jpg", 'Reptiles', './html/Reptiles.html');
   
let reptileHawksbillTurtle = new Animals("Reptiles","Hawksbill Turtle", 50,["sponges", "jellyfish","seaplants"], 
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length",
    80,50,"Tropical coasts of Queensland, Northern Territory and Western Australia",  "./images/Hawksbill Turtle.jpg", 'Reptiles', './html/Reptiles.html');

    
let reptilePerentie  = new Animals("Reptile","Perentie", 20,["Carnivore", "animals like kangaroos", "rabbits", "lizards and birds"], 
    ": The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    250,20,"Desert",  "./images/perentie.jpg", 'Reptiles', './html/Reptiles.html');
    
let birdCassowary = new Animals("Birds","Cassowary", 20,["Plants matter like fruit", "insects and small animals like mice amd lizards"], 
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    117,44,"Queensland",  "./images/Cassowary.jpg", 'Birds', './html/Birds.html');
    
let birdKookaburra = new Animals("Birds","Kookaburra", 20,["Insects and smalll animals including snakes", "frogs","lizards"], 
    "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
    43,0.003,"Throughout Austalia",  "./images/Kookaburra.jpg", 'Birds', './html/Birds.html');
    
let birdYellowTailedBlackCockatoo = new Animals("Birds","Yellow Tailed Black Cockatoo", 41,["Fruit", "seeds","plant"], 
    "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
    65,0.9,"SE Austalia",  "./images/Yellow-tailedBlackCockatoos.jpg", 'Birds', './html/Birds.html');

//add the animals into an array
let animalArray = [mammalEchidna,mammalTasmanianDevil,mammalquokka,reptileFrillNeckedLizard,reptileHawksbillTurtle,reptilePerentie,birdCassowary,birdKookaburra,birdYellowTailedBlackCockatoo];

// Function to find the index of an animal by name
function findAnimalIndexByName(name) {
    return animalArray.findIndex(animal => animal.name.toLowerCase() === name.toLowerCase());
}


// Function to convert RGB to HEX format
function rgbToHex(rgb) {
    // Match RGB color and extract the values for R, G, and B
    let result = rgb.match(/^rgb\((\d+), (\d+), (\d+)\)$/);
    if (result) {
      // Convert the R, G, and B values to HEX and return as a hex color string
      return '#' + ('0' + parseInt(result[1]).toString(16)).slice(-2) +
                 ('0' + parseInt(result[2]).toString(16)).slice(-2) +
                 ('0' + parseInt(result[3]).toString(16)).slice(-2);
    }
    return rgb; // Return original value if not in RGB format
  }
// Truncate text to 200 characters
  function truncateText(text) {
    return text.length > 200 ? text.slice(0, 200) + "..." : text;
  }

// JavaScript for highllighting the animal on mouse click / mouse over
const menuItems = document.querySelectorAll('.dropdown-item');
menuItems.forEach(item => {
  // Handle click event
    item.addEventListener('click', function (e) {
        active_animal_color = rgbToHex(this.style.backgroundColor);
        active_animal_name = this.textContent;
        //console.log(active_animal_name)

        menuItems.forEach(menu => menu.style.backgroundColor = ''); // resets all animals background color
        if(active_animal_color != '#d8611c'){
            this.style.backgroundColor = '#d8611c';  // Set background color on click as orange

            const myDiv = document.querySelector('.welcome-container') 
            myDiv.style.display = 'none'; //hide the welcome message 

            document.querySelector('.animal-name').textContent  = active_animal_name
            index = findAnimalIndexByName(active_animal_name) //find the clicked animal in the animalArray
            document.querySelector('.animal-image').src  = animalArray[index]['src']
            document.querySelector('.animal-food').textContent  = animalArray[index]['food']
            document.querySelector('.animal-description').textContent  = truncateText(animalArray[index]['description'])
            const selected_animal = document.querySelector('.animal-container')
            document.querySelector('.animal-group').textContent  = animalArray[index]['group']
            document.querySelector('.animal-group-link').href  = animalArray[index]['groupLink']
            selected_animal.style.display = 'block'; // show the animal details
            if (window.innerWidth <= 768) {
              selected_animal.focus();
              selected_animal.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        else{
          if (window.innerWidth <= 768) {
            // If the screen width is 600px or less (typically mobile size)
            document.querySelector('.welcome-container').style.display = 'grid'; // show the welcome message on click
        } else {
            // If the screen width is greater than 600px (typically desktop or larger screen size)
            document.querySelector('.welcome-container').style.display = 'flex'; // show the welcome message on click
        }
            document.querySelector('.animal-container').style.display = 'none'; // hide the animal details

            this.style.backgroundColor = ''; //remove the highlight color for selected animal
        }     
  });

  // Handle mouseover event (triggered when hovering over the item)
  item.addEventListener('mouseover', function (e) {
    if(rgbToHex(this.style.backgroundColor) != '#d8611c'){ // checking whether the animal is clicked or not
        this.style.backgroundColor = '#569e60';  // Set a different background color on hover
    }
    else{
        this.style.border = '1px solid #fff';  // highlight the selected animal on hover
    }
  });

  // Handle mouseout event (reset background color when mouse leaves the item)
  item.addEventListener('mouseout', function (e) {
    //console.log(rgbToHex(this.style.backgroundColor))
    if(rgbToHex(this.style.backgroundColor) != '#d8611c'){
        this.style.backgroundColor = '';  // Set a different background color on hover
    }
    this.style.border = ''; // remove the highlight the selected animal on hover
  });
});

const footerInfo = {
    title: "Safaripark",
    contact: "Get in touch",
    email: "info@safaripark.com",
    phone: "+46 723500460"
};

document.querySelector(".footer-logo h2").textContent = footerInfo.title;
document.querySelector(".footer-contact h4").textContent = footerInfo.contact;
document.querySelector(".footer-contact").innerHTML += `<p>Email: ${footerInfo.email}</p> <p>Phone: ${footerInfo.phone}</p>`;
document.querySelector(".footer_social-media h4").textContent = "Follow us"

const facebookLink = document.getElementById("facebook");
const instagramLink = document.getElementById("instagram");
const twitterLink = document.getElementById("twitter");

const socialLinks = {
    "facebook": "https://facebook.com",
    "instagram": "https://instagram.com",
    "twitter": "https://twitter.com"
}

facebookLink.addEventListener("click", () => openLink("facebook"));
instagramLink.addEventListener("click", () => openLink("instagram"));
twitterLink.addEventListener("click", () => openLink("twitter"));

document.querySelector(".footer-copyright p").textContent = "Copyright © 2024 SafariPark. All rights reserved.";




