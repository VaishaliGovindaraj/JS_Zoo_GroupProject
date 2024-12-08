let nameDiv = document.querySelector(".sidebar_content");

function teamMembers(name) {
    this.name = name;
}

let ankita_name = new teamMembers("Ankita");
let lava_name = new teamMembers("Lava");
let priyesh_name = new teamMembers("Priyesh");
let vaishali_name = new teamMembers("Vaishali");
let rob_name = new teamMembers("Rob");

let peopleArray = [ankita_name, lava_name, priyesh_name, vaishali_name, rob_name];
let activeMemberDiv = null; // Track the active member's div

peopleArray.forEach((member) => {
    let peopleDiv = document.createElement("div");
    peopleDiv.classList.add("members_content");
    nameDiv.appendChild(peopleDiv);

    let membersnameDiv = document.createElement("div");
    membersnameDiv.textContent = member.name;
    membersnameDiv.classList.add("member_name");
    peopleDiv.appendChild(membersnameDiv);

    membersnameDiv.addEventListener("click", () => {
        if (activeMemberDiv === membersnameDiv) {
            // If the same member is clicked, toggle the default message
            activeMemberDiv.classList.remove("active");
            activeMemberDiv = null;
            displayDefaultMessage();
        } else {
            // Display the selected member's info
            if (activeMemberDiv) {
                activeMemberDiv.classList.remove("active"); // Remove the 'active' class from the previously active member
            }
            membersnameDiv.classList.add("active"); // Add 'active' class to the clicked member
            activeMemberDiv = membersnameDiv; // Update the active member tracker
            displayInfo(member.name);
        }
    });
});

function teamInfo(name, image, shortDescription, values, connectLink) {
    this.name = name;
    this.image = image;
    this.shortDescription = shortDescription;
    this.values = values;
    this.connectLink = connectLink;
}

let ankita = new teamInfo(
    "Ankita",
    "../images/about_us/Ankita.png",
    "I orchestrate seamless symphonies of code, conducting the front and back ends into harmony. My work ensures every keystroke resonates with brilliance.",
    "Coordination: Like a flock of birds, I align the team’s efforts for a flawless migration of ideas. Creativity: Turning blank screens into vibrant zoos of innovation.",
    "https://github.com/Ankita"
);
let lava = new teamInfo(
    "Lava",
    "../images/about_us/Lava.jpg",
    "Crafting magical user experiences is my forte. My designs are as rare and captivating as the mythical unicorn.",
    "Imagination: I transform plain interfaces into dazzling spectacles. \n Empathy: Understanding users like a unicorn reading the hearts of visitors in the enchanted forest.",
    "https://github.com/Lava"
);
let priyesh = new teamInfo(
    "Priyesh",
    "../images/about_us/Priyesh.png",
    "Venturing into the dense jungle of code and clearing paths for innovative solutions. I make sure no bug gets past my machete!.",
    "Exploration: Discovering new ways to streamline development. \n Tenacity: Tackling challenges head-on, no matter how wild.",
    "https://github.com/Priyesh"
);
let vaishali = new teamInfo(
    "Vaishali",
    "../images/about_us/Vaishali.jpg",
    "As a team player, I believe in building strong foundations and carrying the weight of development with my squad. Together, we create marvels one step at a time.",
    "Collaboration: Like ants working in sync, I value collective effort.Efficiency: Achieving big results with small, calculated moves.",
    "https://github.com/VaishaliGovindaraj"
);

let rob = new teamInfo(
    "Rob",
    "../images/about_us/Rob_avatar.jpg",
    "Rising from the flames of challenges, I ignite the spark of creativity and resilience in my students. Together, we create interfaces that rise above the ordinary.",
    "Resilience: Teaching how to embrace challenges and thrive through them.Innovation: Encouraging bold, unique solutions that stand out.",
    "https://github.com/"
);

let teamArray = [ankita, lava, priyesh, vaishali, rob];

let mainDiv = document.querySelector(".main-content");

function displayInfo(selectedName) {
    mainDiv.innerHTML = "";
    teamArray.forEach((item) => {
        if (item.name === selectedName) {
            let personDiv = document.createElement("div");
            personDiv.classList.add("person_content");

            let avatarDiv = document.createElement("img");
            avatarDiv.setAttribute("src", item.image);
            avatarDiv.setAttribute("alt", `${item.name}'s Avatar`);
            avatarDiv.classList.add("person_avatar");
            personDiv.appendChild(avatarDiv);

            let infoContainer = document.createElement("div");
            infoContainer.classList.add("info_container");

            let nameRow = createKeyValueRow("Name", item.name);
            infoContainer.appendChild(nameRow);

            let descRow = createKeyValueRow("Description", item.shortDescription);
            infoContainer.appendChild(descRow);

            let valuesRow = createKeyValueRow("Values", item.values);
            infoContainer.appendChild(valuesRow);

            let linkRow = createKeyValueRow(
                "GitHub Link",
                `<a href="${item.connectLink}" target="_blank">${item.connectLink}</a>`
            );
            infoContainer.appendChild(linkRow);

            personDiv.appendChild(infoContainer);
            mainDiv.appendChild(personDiv);
        }
    });
}

function createKeyValueRow(key, value) {
    let row = document.createElement("div");
    row.classList.add("key_value_row");

    let keyDiv = document.createElement("div");
    keyDiv.textContent = `${key}:`;
    keyDiv.classList.add("key");

    let valueDiv = document.createElement("div");
    valueDiv.innerHTML = value;
    valueDiv.classList.add("value");

    row.appendChild(keyDiv);
    row.appendChild(valueDiv);

    return row;
}

// Function to display a default message on page load or reset
function displayDefaultMessage() {
    mainDiv.innerHTML = "<div class='default_message'>Welcome to the team behind JS-Zoo, where web development meets the wild! We're a group of passionate learners (and a wise mentor) with a mission to create an interactive and engaging virtual zoo experience. Meet the people who bring this project to life by clicking on the Team member names</div>";
}

// Call the default message display on page load
document.addEventListener("DOMContentLoaded", () => {
    displayDefaultMessage();
});
