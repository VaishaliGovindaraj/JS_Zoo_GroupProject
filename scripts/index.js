// let parentDiv =document.querySelector(".content");
// let birdCassowary = document.createElement("div");
// mainContent.classList.add("testdiv");
// mainContent.textContent = "Hello this is generated via Script";
// parentDiv.appendChild(mainContent);
// document.querySelector(".testdiv").style.color = "#fff";


// Create the sidebar section
const sidebar = document.createElement('section1');
sidebar.classList.add('sidebar');

// Create the dropdown menu container
const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown_menu');

// Create and append the heading
const heading = document.createElement('h2');
heading.textContent = 'Zoo Animals';
dropdownMenu.appendChild(heading);

// Create the main list
const mainList = document.createElement('ul');


//welcome-text-content
function InfoText(title, images, description) {
  this.title = title;
  this.images = images; 
  this.description = description;
}

let planYourDay = new InfoText(
  "Plan your Day",
  [
      "images/index/welcome_page/plan_your_day/zoo_visit_1.jpg",
      "images/index/welcome_page/plan_your_day/zoo_visit_2.jpg",
      "images/index/welcome_page/plan_your_day/zoo_visit_3.jpg",
      "images/index/welcome_page/plan_your_day/zoo_visit_4.jpg"
  ],
  "SafariPark is open from 9:30 AM to 5:00 PM, all year except Christmas Day. Child entry is for 3-14 year olds. Free entry for children younger than 3 years old. Children under 14 need to have an adult with them. Please bring your ID, as we offer discounts to students, Community Services card holders, and Gold Card holders. Caregivers of disabled persons are given complimentary entry to the zoo upon presentation of suitable supporting documentation or identification. Please note that SafariPark does not have luggage storage facilities (i.e., lockers). If you have large bags, please chat with one of our Visitor Advisors, who may be able to store them in the front office during your visit.");

let exploreZoo = new InfoText(
  "Explore the zoo",
  [
      "images/index/welcome_page/explore_zoo/playarea_1.jpg",
      "images/index/welcome_page/explore_zoo/playarea_2.jpg",
      "images/index/welcome_page/explore_zoo/playarea_3.jpg",
      "images/index/welcome_page/explore_zoo/playarea_4.jpg"
  ],
  "Exploring a zoo is a fascinating journey into the world of wildlife and conservation. From lush green aviaries to aquatic exhibits, every corner unveils unique habitats teeming with life. Visitors can marvel at majestic big cats prowling their enclosures, playful otters gliding through water, or primates showcasing their agility and intelligence. Interactive zones like petting zoos provide hands-on experiences, while informative signage and guided tours offer insights into animal behavior and conservation efforts. Nocturnal exhibits reveal the wonders of creatures active at night, and live feeding sessions let keepers share captivating stories about diets and habits. Relaxing at shaded picnic spots or zoo cafes adds a refreshing touch, making the visit both enjoyable and educational. A day at the zoo is more than entertainment—it's an inspiring opportunity to connect with and protect our planet’s incredible biodiversity. does not have luggage storage facilities i.e. lockers. If you have large bags, please chat."
);

let closeEncounters = new InfoText(
  "Close Encounter",
  [
      "images/index/welcome_page/close_encounters/bird_1.jpg",
      "images/index/welcome_page/close_encounters/bird_2.jpg",
      "images/index/welcome_page/close_encounters/bird_3.jpg",
      "images/index/welcome_page/close_encounters/reptile_1.jpg"
  ],
  "Experience the thrill of getting up close and personal with some of the world’s most fascinating animals through our exclusive Close Encounter programs! At SafariPark, we provide a unique opportunity for visitors to meet and interact with a variety of creatures in a safe and controlled environment. Imagine hand-feeding giraffes, walking alongside curious meerkats, or even spending time with majestic big cats under the guidance of our expert keepers. These encounters are designed to deepen your connection with wildlife and foster a greater appreciation for conservation efforts."
);

let holidayProgramme  = new InfoText(
  "Holiday Programme",
  [
      "images/index/welcome_page/holiday_programme/school_prog_11.jpg",
      "images/index/welcome_page/holiday_programme/school_prog_22.jpg",
      "images/index/welcome_page/holiday_programme/school_prog_33.jpg",
      "images/index/welcome_page/holiday_programme/school_prog_44.jpg"
  ],
  "The holiday program at the zoo offers an exciting and educational escape for children and families, packed with activities that bring the wonders of wildlife to life. From up-close animal encounters to engaging hands-on workshops, the program is designed to inspire a love for nature and conservation. Participants can enjoy behind-the-scenes tours, learn fascinating facts about their favorite animals, and even assist in feeding sessions under the guidance of expert zookeepers. Creative crafts, nature-themed games, and storytelling sessions add a playful touch, making the experience both fun and memorable. Whether it's exploring lush enclosures or discovering the secrets of animal care, the zoo's holiday program promises a unique adventure that combines learning, laughter, and unforgettable moments."
);

let welcomeTextArray = [planYourDay, exploreZoo, closeEncounters,holidayProgramme];

let welcomeContent = document.querySelector(".welcome_content");

if (welcomeTextArray.length > 0) {
  let welcomeContentText = document.createElement("div");
  welcomeContentText.classList.add("welcomeContentDiv");
  welcomeContent.appendChild(welcomeContentText);

  welcomeTextArray.forEach(element => {

      let createParaTitle = document.createElement("p");
      createParaTitle.classList.add("paraTitle");
      createParaTitle.textContent = element.title;
      welcomeContentText.appendChild(createParaTitle);

      let imageContainer = document.createElement("div");
      imageContainer.classList.add("imageContainer");
      element.images.forEach((imageSrc, index) => {
          let createImage = document.createElement("img");
          createImage.classList.add("welcome_image");
          createImage.src = imageSrc;
          createImage.alt = `Image ${index + 1}`;
          imageContainer.appendChild(createImage);
      });
      welcomeContentText.appendChild(imageContainer);

      let createDescription = document.createElement("p");
      createDescription.classList.add("description");
      createDescription.textContent = element.description;
      welcomeContentText.appendChild(createDescription);
  });
}


// Data structure for the menu items
const animalGroups = [
  {
    title: 'Mammals',
    items: ['Echidna', 'Tasmanian Devil', 'Quokka']
  },
  {
    title: 'Reptiles',
    items: ['Frill-necked lizard', 'Hawksbill Turtle', 'Perentie']
  },
  {
    title: 'Birds',
    items: ['Cassowary', 'Kookaburra', 'Yellow Tailed Black Cockatoo']
  }
];

// Populate the list with groups and dropdowns
animalGroups.forEach(group => {
  // Create a list item for each group
  const groupItem = document.createElement('li');
  groupItem.classList.add('group');

  // Create the group title
  const groupTitle = document.createElement('span');
  groupTitle.classList.add('group-title');
  groupTitle.innerHTML = `${group.title} <span class="arrow">▼</span>`;

  // Create the dropdown list
  const dropdownList = document.createElement('ul');
  dropdownList.classList.add('dropdown');

  // Add items to the dropdown
  group.items.forEach(item => {
    const dropdownItem = document.createElement('li');
    dropdownItem.classList.add('dropdown-item');
    dropdownItem.textContent = item;
    dropdownList.appendChild(dropdownItem);
  });

  // Append title and dropdown to the group item
  groupItem.appendChild(groupTitle);
  groupItem.appendChild(dropdownList);

  // Add the group item to the main list
  mainList.appendChild(groupItem);
});

// Append the main list to the dropdown menu
dropdownMenu.appendChild(mainList);

// Append the dropdown menu to the sidebar
sidebar.appendChild(dropdownMenu);

// Add the sidebar to the body (or any other desired container)
document.querySelector('.sidebar_content').appendChild(sidebar);

// Side bar function starts here


// JavaScript for dropdown functionality with downward arrow


const groups = document.querySelectorAll('.group-title');
groups.forEach(group => {
  group.addEventListener('click', () => {
    // Hide other dropdowns
    groups.forEach(otherGroup => {
      const otherDropdown = otherGroup.nextElementSibling;
      const otherArrow = otherGroup.querySelector('.arrow');
      if (otherGroup !== group) {
        otherDropdown.style.display = 'none'; // Hide other dropdowns
        otherArrow.classList.remove('expanded'); // Remove 'expanded' from other arrows
      }
      menuItems.forEach(item => {
        item.style.backgroundColor = '';  // Resets all the selected animals
      });
    });

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
      document.querySelector('.welcome_wrapper').style.display = 'grid'; // show the welcome message on click
  } else {
      // If the screen width is greater than 600px (typically desktop or larger screen size)
      document.querySelector('.welcome_wrapper').style.display = 'flex'; // show the welcome message on click
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
    76, 10, "Throughout Austalia", "./images/Echidna.jpg", 'Mammals', './html/mammals.html');


let mammalTasmanianDevil  = new Animals("Mammals", "Tasmanian Devil", 5, ["A predator", "eat meat from other animals such as wallabies and wombats"],
    "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    70, 10, "Tasmania",  "./images/Tasmanian Devil.jpg", 'Mammals', './html/mammals.html');


let mammalquokka  = new Animals("Mammals", "Quokka", 10, ["Plant eaters", " shrubs", "grasses"],
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    50, 3, "Rottnest Island,few places on mainland Western Australia",  "./images/quokka.jpg", 'Mammals', './html/mammals.html');

let reptileFrillNeckedLizard = new Animals("Reptiles","Frill-necked lizard", 20,["small insects", "spiders"], 
        "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
        90,1,"Northern  Austalia",  "./images/frilled_necked_lizard.jpg", 'Reptiles', './html/reptiles.html');
   
let reptileHawksbillTurtle = new Animals("Reptiles","Hawksbill Turtle", 50,["sponges", "jellyfish","seaplants"], 
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length",
    80,50,"Tropical coasts of Queensland, Northern Territory and Western Australia",  "./images/Hawksbill Turtle.jpg", 'Reptiles', './html/reptiles.html');

    
let reptilePerentie  = new Animals("Reptile","Perentie", 20,["Carnivore", "animals like kangaroos", "rabbits", "lizards and birds"], 
    ": The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    250,20,"Desert",  "./images/perentie.jpg", 'Reptiles', './html/reptiles.html');
    
let birdCassowary = new Animals("Birds","Cassowary", 20,["Plants matter like fruit", "insects and small animals like mice amd lizards"], 
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    117,44,"Queensland",  "./images/Cassowary.jpg", 'Birds', './html/birds.html');
    
let birdKookaburra = new Animals("Birds","Kookaburra", 20,["Insects and smalll animals including snakes", "frogs","lizards"], 
    "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
    43,0.003,"Throughout Austalia",  "./images/Kookaburra.jpg", 'Birds', './html/birds.html');
    
let birdYellowTailedBlackCockatoo = new Animals("Birds","Yellow Tailed Black Cockatoo", 41,["Fruit", "seeds","plant"], 
    "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
    65,0.9,"SE Austalia",  "./images/Yellow-tailedBlackCockatoos.jpg", 'Birds', './html/birds.html');

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

// Function to truncate text
function truncateText(text, limit = 200) {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
}

function toggleText(descriptionElement, toggleButton, fullText) {
  const isTruncated = descriptionElement.dataset.truncated === "true";

  if (isTruncated) {
      // Show full text
      descriptionElement.textContent = fullText;
      toggleButton.textContent = "Read Less";
  } else {
      // Show truncated text
      descriptionElement.textContent = truncateText(fullText);
      toggleButton.textContent = "Read More";
  }

  descriptionElement.dataset.truncated = (!isTruncated).toString(); // Toggle the state
}

// JavaScript for highlighting the animal on mouse click / mouse over
const menuItems = document.querySelectorAll('.dropdown-item');
menuItems.forEach(item => {
  item.addEventListener('click', function () {
      const activeAnimalColor = rgbToHex(this.style.backgroundColor);
      const activeAnimalName = this.textContent;

      // Reset all menu items' background colors
      menuItems.forEach(menu => menu.style.backgroundColor = '');

      if (activeAnimalColor !== '#d8611c') {
          this.style.backgroundColor = '#d8611c'; // Highlight selected animal

          // Hide the welcome message
          document.querySelector('.welcome_wrapper').style.display = 'none';

          // Update animal details
          const index = findAnimalIndexByName(activeAnimalName);
          const animal = animalArray[index];
          const animalContainer = document.querySelector('.animal-container');

          // Populate animal details
          document.querySelector('.animal-name').textContent = animal.name;
          document.querySelector('.animal-image').src = animal.src;
          document.querySelector('.animal-food').textContent = animal.food.join(", ");
          document.querySelector('.animal-group').textContent = animal.group;
          document.querySelector('.animal-group-link').href = animal.groupLink;

          // Set up the description and toggle button
          const descriptionElement = document.querySelector('.animal-description');
          const toggleButton = document.querySelector('.button');
          const fullDescription = animal.description;

          // Initialize description and button
          descriptionElement.textContent = truncateText(fullDescription);
          descriptionElement.dataset.truncated = "true";
          toggleButton.textContent = "Read More";

          // Remove existing event listeners safely
          const newButton = toggleButton.cloneNode(true);
          toggleButton.replaceWith(newButton);

          // Attach toggle event to the button
          newButton.addEventListener('click', () => toggleText(descriptionElement, newButton, fullDescription));

          // Show the animal container
          animalContainer.style.display = 'block';

          if (window.innerWidth <= 768) {
              animalContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
      } else {
          // Show welcome message and reset animal details
          const welcomeWrapper = document.querySelector('.welcome_wrapper');
          const animalContainer = document.querySelector('.animal-container');

          welcomeWrapper.style.display = window.innerWidth <= 1058 ? 'grid' : 'flex';
          animalContainer.style.display = 'none';
          this.style.backgroundColor = ''; // Remove highlight
      }
  });


  // Handle mouseover event (triggered when hovering over the animal names)
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
    if(rgbToHex(this.style.backgroundColor) != '#d8611c'){
        this.style.backgroundColor = '';  // remove the highlighted color on mouse out
    }
    this.style.border = ''; // remove the highlights for the selected animal on mouse out
  });

});

