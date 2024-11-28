
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
    "Djurpark is open from 9:30-5 pm, all year except Christmas Day.Child entry is for 3-14 year olds. Free entry for children younger than 3 years old.Under 14s need to have an adult with them.Please bring your ID, as we offer discounts to students, Community Services card holders, and Gold Card holders.Caregivers of disabled persons are given complimentary entry to the Zoo upon presentation of suitable supporting documentation or identification.Please note that Te Nukuao Wellington Zoo does not have luggage storage facilities i.e. lockers.  If you have large bags, please chat with one of our Visitor Advisors, who may be able to store them in the front office during your visit.");

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
    "Experience the thrill of getting up close and personal with some of the world’s most fascinating animals through our exclusive Close Encounter programs! At Djurpark, we provide a unique opportunity for visitors to meet and interact with a variety of creatures in a safe and controlled environment. Imagine hand-feeding giraffes, walking alongside curious meerkats, or even spending time with majestic big cats under the guidance of our expert keepers. These encounters are designed to deepen your connection with wildlife and foster a greater appreciation for conservation efforts."
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
