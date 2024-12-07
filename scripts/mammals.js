// Create the sidebar section
const sidebar = document.createElement('section1');
sidebar.classList.add('sidebar');

// Create the dropdown menu container
const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown_menu');

// Create and append the heading
const heading = document.createElement('h2');
heading.textContent = 'Mammals';
dropdownMenu.appendChild(heading);

// Data structure for the menu items
const mammals = [
  'Echidna', 'Tasmanian Devil', 'Quokka'
];

// Create the dropdown list
const dropdownList = document.createElement('ul');
dropdownList.classList.add('dropdown');

// Add items to the dropdown
mammals.forEach(item => {
    const dropdownItem = document.createElement('li');
    dropdownItem.classList.add('dropdown-item');
    dropdownItem.textContent = item;
    dropdownList.appendChild(dropdownItem);
 });

 dropdownMenu.appendChild(dropdownList);

// Append the dropdown menu to the sidebar
sidebar.appendChild(dropdownMenu);

// Add the sidebar to the body (or any other desired container)
document.querySelector('.sidebar_content').appendChild(sidebar);


function Animal(name, intro, key_features, unique_traits, behaviour_habitat,image1,image2,image3,image4) {
  this.name = name,
  this.intro = intro,
  this.key_features = key_features,
  this.unique_traits = unique_traits,
  this.behaviour_habitat = behaviour_habitat,
  this.image1 = image1,
  this.image2 = image2,
  this.image3 = image3,
  this.image4 = image4
}

let mammalEchidna = new Animal("Echidna", "Intro: The echidna, also known as the spiny anteater, is a unique and fascinating mammal native to Australia, Tasmania, and New Guinea. It belongs to the order Monotremata, which includes just one other species, the platypus. Monotremes are distinctive because they are egg-laying mammals.", 
  "key Features: They are small to medium-sized animals covered in coarse fur and spines, which offer protection from predators. They resemble a mix of a porcupine and a hedgehog but are unrelated to either.They typically weight between 2 and 7 kilograms and are about 30 to 50 cm long. They have a long, tubular snout or beak that functions as both a nose and mouth.Echidnas are insectivores, primarily feeding on ants and termites. They use their long, sticky tongue to capture prey.", 
  "Unique Traits: Egg-Laying: Female echidnas lay a single leathery egg, which they incubate in a pouch on their abdomen. The egg hatches into a tiny, underdeveloped young, called a puggle.The puggle stays in the pouch for several weeks before being transferred to a burrow. The mother continues to nurse it with milk secreted from specialized mammary patches.",
  "Behaviour & Habitat: They are solitary animals and have a wide range of habitats, from forests to deserts.They are excellent diggers and use burrowing as a defense mechanism.Echidnas lack external ears, but they have a keen sense of hearing and smell.",
  "./../images/mammals/echidna1.jpg","./../images/mammals/echidna2.jpg","./../images/mammals/echidna3.jpg","./../images/mammals/echidna4.webp");

let mammalTasmanianDevil = new Animal("Tasmanian Devil", "Intro: The Tasmanian Devil is named for its menacing screeches, aggressive behavior, and dark coat, which early European settlers found devilish.Despite its fierce reputation,it is shy and generally avoids humans.With a stocky build and strong jaws, it is uniquely adapted to its environment.The Tasmanian Devil (Sarcophilus harrisii) is a carnivorous marsupial native to Tasmania, Australia.", 
  "Key Features: Size and Appearance - Males weigh 8-14 kg, while females are smaller, around 5-9 kg. They have coarse black fur, often with white markings on the chest or rump. Their muscular build and large heads support powerful jaws capable of crushing bones.Known for their loud, blood-curdling screams and growls.Lifespan: Generally live 5-6 years in the wild",
  "Unique Traits: They have one of the strongest bites relative to body size among mammals.Dietary Role: As scavengers, they consume carcasses and help maintain ecological balance. Devil Facial Tumor Disease (DFTD): They are threatened by a contagious cancer, unique among wildlife diseases, which has caused significant population declines.", 
  "Behavior & Habitat: Active primarily at night, foraging for food and covering large territories. Social Dynamics: Solitary for most of the year but highly vocal during feeding and mating seasons.Breeding: Females give birth to up to 50 tiny, underdeveloped young, of which only 4-6 survive, as they compete for space in the mother's pouch. Habitat Range Found exclusively on the island of Tasmania. Environment: Prefers coastal scrublands, forests, and open grasslands, where it can find ample food and cover. Shelter: Uses burrows, hollow logs, or caves for daytime resting.", 
  "./../images/mammals/tasmanian1.webp","./../images/mammals/tasmanian2.jpg","./../images/mammals/tasmanian3.jpg","./../images/mammals/tasmanian4.webp");

let mammalQuokka = new Animal("Quokka", "Intro: The quokka (Setonix brachyurus) is a small, herbivorous marsupial native to Australia. Often referred to as the world's happiest animal due to its perpetually smiling expression, the quokka is part of the macropod family, which includes kangaroos and wallabies. This nocturnal creature is primarily found in isolated regions, including Rottnest Island and Bald Island off the coast of Western Australia.",
  "Key Features: They are about the size of a domestic cat, standing 40–54 cm (16–21 in) tall and weighing 2.5–4.5 kg (5.5–10 lbs). They have thick, brownish-gray fur, rounded ears, and a short tail. Their strong hind legs and short tail assist in hopping, their primary mode of movement.", 
  "Unique Traits: Their upturned mouths give them a smiling appearance, making them a favorite for wildlife photography and social media.Survival Tactics: Quokkas are adept at finding water and can survive long periods without direct drinking, relying on moisture from their diet.Female quokkas can halt embryonic development during stressful times, a phenomenon called embryonic diapause, to conserve energy.", 
  "Behavior & Habitat: Quokkas are herbivores, primarily feeding on grasses, leaves, and bark. They often forage at night (nocturnal).They are generally social animals, living in small groups or loosely associated colonies. However, they are not territorial.Classified as vulnerable, quokka populations are under threat from habitat destruction, introduced predators like foxes and cats, and human activity.",
  "./../images/mammals/quokka1.jpg","./../images/mammals/quokka2.jpg","./../images/mammals/quokka3.jpg","./../images/mammals/quokka4.jpg");


// Add the animals into an array  
let animalArray = [mammalEchidna, mammalTasmanianDevil, mammalQuokka];

// Function to find the index of an animal by name
function findAnimalIndexByName(name) {
  return animalArray.findIndex(animal => animal.name.toLowerCase() === name.toLowerCase());
}

const contentSection = document.getElementById('animal-content');

const menuItems = document.querySelectorAll('.dropdown-item');
menuItems.forEach(item => {
  // Handle click event
    item.addEventListener('click', function (e) {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        contentSection.innerHTML = '';
        document.querySelector('.welcome-mammal').style.display = 'block';

      } else {
        active_animal_name = this.textContent;

        index = findAnimalIndexByName(active_animal_name) //find the clicked animal in the animalArray
        contentSection.innerHTML = createAnimalSummary(animalArray[index]);
        
        if (window.innerWidth <= 768) {
        contentSection.scrollIntoView();
        };

        document.querySelector('.welcome-mammal').style.display = 'none';
        menuItems.forEach(item => { 
          item.classList.remove("active");
        })
        item.classList.add("active");      
      }            
  });

  // Handle mouseover event (triggered when hovering over the animal names)
  item.addEventListener('mouseover', function (e) {
    if (item.classList.contains("active")){
        item.style.border = '1px solid #fff';  // highlight the selected animal on hover
    }
  });

  // Handle mouseout event (reset background color when mouse leaves the item)
  item.addEventListener('mouseout', function (e) {
    this.style.border = ''; // remove the highlights for the selected animal on mouse out
    });
});



function createAnimalSummary(animal) {
  return `
      <div class="mammal-grid">
          <img src="${animal.image1}" alt="${animal.name}">
          <div class="mammal-desc">
            <h2>${animal.name}</h2>
            <p>${animal.intro}</p>
            <button onclick="showFullDetails('${animal.name}')">Read More</button>
          </div>
      </div>
  `;
}

function displayAnimalDetails(name) {
  const animal = animalArray.find(animal => animal.name === name);
  if (animal) {
      contentSection.innerHTML = createAnimalSummary(animal);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showFullDetails(name) {
  const animal = animalArray.find(animal => animal.name === name);
  if (animal) {
      contentSection.innerHTML = `    
          <div class="mammal-grid">
          <img src="${animal.image1}" alt="${animal.name}">
          <div class="mammal-desc">
            <h2>${animal.name}</h2>
            <p>${animal.intro}</p>
          </div>  
          <img src="${animal.image2}" >
          <div class="mammal-desc">
            <p>${animal.key_features}</p>            
          </div>
          <img src="${animal.image3}" >
          <div class="mammal-desc">
            <p>${animal.unique_traits}</p>            
          </div> 
          <img src="${animal.image4}" >
          <div class="mammal-desc">
            <p>${animal.behaviour_habitat}</p>
            <button onclick="displayAnimalDetails('${animal.name}')">Back</button>
          </div>          
          </div> 
      `;
  }
}


