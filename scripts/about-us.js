let nameDiv = document.querySelector(".sidebar_content");

function teamMembers(name) {
    this.name = name;
}

let ankita_name = new teamMembers("Ankita");
let lava_name = new teamMembers("Lava");
let priyesh_name = new teamMembers("Priyesh");
let vaishali_name = new teamMembers("Vaishali");

let peopleArray = [ankita_name, lava_name, priyesh_name, vaishali_name];
peopleArray.forEach((member) => {
    let peopleDiv = document.createElement("div");
    peopleDiv.classList.add("members_content");
    nameDiv.appendChild(peopleDiv);

    let membersnameDiv = document.createElement("div");
    membersnameDiv.textContent = member.name;
    membersnameDiv.classList.add("member_name");
    peopleDiv.appendChild(membersnameDiv);

    let isActive = false; // Track toggle state

    membersnameDiv.addEventListener("click", () => {
        if (isActive) {
            displayDefaultMessage(); // Reset to default message
            isActive = false;
        } else {
            displayInfo(member.name);
            isActive = true;
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
    "Attention to Detail: Every feather (or pixel) in its rightful place. \n Aesthetic Brilliance: Balancing beauty and functionality with grace.",
    "https://github.com/VaishaliGovindaraj"
);

let teamArray = [ankita, lava, priyesh, vaishali];

let mainDiv = document.querySelector(".main-content");

// Function to display information for a selected team member
// function displayInfo(selectedName) {
//     mainDiv.innerHTML = "";
//     teamArray.forEach((item) => {
//         if (item.name === selectedName) {
//             let personDiv = document.createElement("div");
//             personDiv.classList.add("person_content");

//             let avatarDiv = document.createElement("img");
//             avatarDiv.setAttribute("src", item.image);
//             avatarDiv.setAttribute("alt", `${item.name}'s Avatar`);
//             avatarDiv.classList.add("person_avatar");
//             personDiv.appendChild(avatarDiv);

//             let nameDiv = document.createElement("div");
//             nameDiv.textContent = item.name;
//             nameDiv.classList.add("person_name");
//             personDiv.appendChild(nameDiv);

//             let shortDescription = document.createElement("div");
//             shortDescription.textContent = item.shortDescription;
//             shortDescription.classList.add("short_description");
//             personDiv.appendChild(shortDescription);

//             let values = document.createElement("div");
//             values.textContent = item.values;
//             values.classList.add("values");
//             personDiv.appendChild(values);

//             let connectLink = document.createElement("a");
//             connectLink.setAttribute("href", item.connectLink);
//             connectLink.textContent = `Connect with  Github`;
//             connectLink.classList.add("github_link");
//             connectLink.setAttribute("target", "_blank");
//             personDiv.appendChild(connectLink);

//             personDiv.classList.add("active");
//             mainDiv.appendChild(personDiv);
//         }
//     });
// }

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
    valueDiv.innerHTML = value; // Using innerHTML to handle links
    valueDiv.classList.add("value");

    row.appendChild(keyDiv);
    row.appendChild(valueDiv);

    return row;
}

// Function to display a default message on page load or reset
function displayDefaultMessage() {
    mainDiv.innerHTML = "<div class='default_message'>Select a team member to learn more!</div>";
}

// Call the default message display on page load
document.addEventListener("DOMContentLoaded", () => {
    displayDefaultMessage();
});
