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
heading.textContent = 'Zoo Reptiles';
dropdownMenu.appendChild(heading);

// Create the main list
const mainList = document.createElement('ul');

// Data structure for the menu items
const animalGroups = [
  {
    title: 'Reptiles',
    items: ['Frill-necked lizard', 'Hawksbill Turtle', 'Perentie']
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

//Welcome message -Reptiles content creation
// JavaScript code to generate the HTML structure dynamically

videoContainer = document.querySelector('.video-container')

// List of video sources
const videos = [
  { src: "../videos/chamelion.mp4", type: "video/mp4", active: true },
  { src: "../videos/lizard.mp4", type: "video/mp4", active: false },
  { src: "../videos/turtles.mp4", type: "video/mp4", active: false }
];

// Generate video elements
videos.forEach(videoData => {
  // Create video element
  const videoElement = document.createElement('video');
  videoElement.setAttribute('autoplay', '');
  videoElement.setAttribute('loop', '');
  videoElement.setAttribute('muted', '');
  videoElement.className = videoData.active ? 'video active' : 'video';

  // Create source element
  const sourceElement = document.createElement('source');
  sourceElement.setAttribute('src', videoData.src);
  sourceElement.setAttribute('type', videoData.type);

  // Append source to video
  videoElement.appendChild(sourceElement);

  // Fallback text for unsupported browsers
  videoElement.appendChild(document.createTextNode('Your browser does not support the video tag.'));

  // Append video to container
  videoContainer.appendChild(videoElement);
});


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

    if (window.innerWidth <= 1058) {
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


let reptileFrillNeckedLizard = new Animals("Reptiles","Frill-necked lizard", 20,["small insects", "spiders"], 
        "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
        90,1,"Northern  Austalia",  "../images/frilled_necked_lizard.jpg", 'Reptiles', '../html/Reptiles.html');
   
let reptileHawksbillTurtle = new Animals("Reptiles","Hawksbill Turtle", 50,["sponges", "jellyfish","seaplants"], 
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length",
    80,50,"Tropical coasts of Queensland, Northern Territory and Western Australia",  "../images/Hawksbill Turtle.jpg", 'Reptiles', '../html/Reptiles.html');

    
let reptilePerentie  = new Animals("Reptile","Perentie", 20,["Carnivore", "animals like kangaroos", "rabbits", "lizards and birds"], 
    ": The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    250,20,"Desert",  "../images/perentie.jpg", 'Reptiles', '../html/Reptiles.html');
    

//add the animals into an array
let animalArray = [reptileFrillNeckedLizard,reptileHawksbillTurtle,reptilePerentie];

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

// Function to toggle full text and truncated text
function toggleText(element, fullText) {
    const isTruncated = element.dataset.truncated === "true";

    if (isTruncated) {
        // Show full text
        element.textContent = fullText;
        element.nextElementSibling.textContent = "Read Less";
    } else {
        // Show truncated text
        element.textContent = truncateText(fullText);
        element.nextElementSibling.textContent = "Read More";
    }

    element.dataset.truncated = !isTruncated; // Toggle the state
}

function showDetails(fullDescription) {
    document.querySelector('.animal-description').textContent = fullDescription;
    document.querySelector('.animal-details').style.display = 'block';
}

// JavaScript for highllighting the animal on mouse click / mouse over
const menuItems = document.querySelectorAll('.dropdown-item');
menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
        active_animal_color = rgbToHex(this.style.backgroundColor);
        active_animal_name = this.textContent;

        menuItems.forEach(menu => menu.style.backgroundColor = ''); // resets all animals background color
        if(active_animal_color != '#d8611c'){
            this.style.backgroundColor = '#d8611c';  // Set background color on click as orange

            const myDiv = document.querySelector('.welcome-container') 
            myDiv.style.display = 'none'; //hide the welcome message 

            document.querySelector('.animal-name').textContent  = active_animal_name
            index = findAnimalIndexByName(active_animal_name) //find the clicked animal in the animalArray
            document.querySelector('.animal-image').src  = animalArray[index]['src']
            document.querySelector('.animal-food').textContent  = animalArray[index]['food']

            //document.querySelector('.animal-description').textContent  = truncateText(animalArray[index]['description'])

            const descriptionElement = document.querySelector(`.animal-description`);
            const fullDescription = animalArray[index]['description'];
        
            // Set initial truncated text
            descriptionElement.textContent = truncateText(fullDescription);
            descriptionElement.dataset.truncated = "true"; // Track state
        
            // Create and append the toggle button
            const toggleButton = document.createElement('button');
            toggleButton.textContent = "Read More";
            document.querySelector('.animal-details').style.display = 'none';
            toggleButton.addEventListener('click', () => showDetails(fullDescription));
            document.querySelector('.animal-description').appendChild(toggleButton);
            const selected_animal = document.querySelector('.animal-container')
            document.querySelector('.animal-group').textContent = animalArray[index]['group']
            document.querySelector('.animal-group-link').href  = animalArray[index]['groupLink']
            document.querySelector('.animal-life-span').textContent  = animalArray[index]['lifeSpan']
            document.querySelector('.animal-length').textContent  = animalArray[index]['length']
            document.querySelector('.animal-weight').textContent  = animalArray[index]['weight']
            document.querySelector('.animal-place').textContent  = animalArray[index]['place']
            selected_animal.style.display = 'block'; // show the animal details
            if (window.innerWidth <= 768) {// If the screen width is 768px or less (typically mobile size)
              selected_animal.focus();
              selected_animal.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        else{
            if (window.innerWidth <= 1058) {
                // If the screen width is 1058 or less (typically mobile size)
                document.querySelector('.welcome-container').style.display = 'grid'; // show the welcome message on click
            } else {
                // If the screen width is greater than 768px (typically desktop or larger screen size)
                document.querySelector('.welcome-container').style.display = 'flex'; // show the welcome message on click
            }
            document.querySelector('.animal-container').style.display = 'none'; // hide the animal details
            this.style.backgroundColor = ''; //remove the highlight color for selected animal
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

document.querySelector('.description').textContent = "Frill necked lizard"; // initialise the name when video loaded 
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video');
    const dots = document.querySelectorAll('.dot');
    const descriptionBox = document.querySelector('.description-box');
    const description = descriptionBox.querySelector('.description');
    const readMoreBtn = descriptionBox.querySelector('.read-more-btn');
  
    const descriptions = [
        "Frill necked lizard",
        "Parentie",
        "Hawks bill turtle"
    ];
  
    let currentIndex = 0;
  
    const updateVideo = (index) => {
        videos.forEach((video, i) => {
            video.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        description.textContent = descriptions[index];
        description.classList.remove('expanded');
        currentIndex = index;
    };
  
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            updateVideo(index);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % videos.length;
        updateVideo(currentIndex);
    }, 5000);
  });