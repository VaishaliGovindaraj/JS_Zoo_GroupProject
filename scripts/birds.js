const animalDetails = {
    Cassowary: {
        lifespan: "20 years",
        group: "bird",
        food: "Plant matter like fruit, insects, and small animals like mice and lizards",
        description: "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.",
        length: "1.7m",
        weight: "44kg",
        found: "Queensland",
        image: "../images/index/555.jpg"
    },
    Kookaburra: {
        lifespan: "20 years",
        group: "bird",
        food: "Insects and small animals including snakes, frogs, and lizards",
        description: "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
        length: "43cm",
        weight: "300g",
        found: "Australia wide",
        image: "../images/index/999.jpg"
    },
    YellowTailedBlackCockatoo: {
        lifespan: "41 years",
        group: "bird",
        food: "Fruit, seeds, and other plant material",
        description: "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula. Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
        length: "65cm",
        weight: "900g",
        found: "SE Australia",
        image: "../images/index/444.jpg"
    }
};

const animalList = document.getElementById('animal-list');
const animalSummary = document.getElementById('animal-summary');
const button = document.getElementById('button');
const animalInformation = document.getElementById('animal-information');
const pageTitle = document.getElementById('birds_title');

pageTitle.textContent = "Discover the Birds of Australia"
animalSummary.textContent = "Click on a bird to learn more about its unique characteristics, habitat, and behavior."

let clickAnimal = null;

Object.keys(animalDetails).forEach((bird) => {
    const birdList = document.createElement('li');
    birdList.textContent = bird;
    birdList.classList.add('bird-item');

    birdList.addEventListener('click', () => {
        if (birdList.classList.contains('active')) {
            birdList.classList.remove('active');
        } else {
            document.querySelectorAll('.bird-item').forEach(item => item.classList.remove('active'));
            birdList.classList.add('active');
        }

        toggleBirds(bird);
    });
    animalList.appendChild(birdList);
});

function toggleBirds (bird) {
    const details = animalDetails[bird];
    const titleArea = document.querySelector('.title-area');

    if (clickAnimal === bird) {
        pageTitle.textContent = "Discover the Birds of Australia";
        animalSummary.textContent = "Click on a bird to learn more about its unique characteristics, habitat, and behavior";
        animalInformation.style.display = 'none';
        button.style.display = 'none';

        titleArea.style.backgroundImage = '';
        titleArea.style.backgroundSize = '';
        titleArea.style.backgroundPosition = '';
        clickAnimal = null;
        
    } else {
        pageTitle.textContent = bird;
        animalSummary.textContent = `${details.description}`;
        button.style.display = 'inline';
        button.textContent = "Show Details";
        animalInformation.style.display = 'none';

        button.removeEventListener('click', toggleAnimalInformation);
        button.addEventListener('click', toggleAnimalInformation);

        document.getElementById('group').textContent = ` Gropu: ${details.group}`;
        document.getElementById('lifespan').textContent = ` Lifespan: ${details.lifespan}`;
        document.getElementById('found').textContent = ` Found: ${details.found}`;
        document.getElementById('food').textContent = ` Food: ${details.food}`;
        document.getElementById('length').textContent = ` Length: ${details.length}`;
        document.getElementById('weight').textContent = ` Weight: ${details.weight}`;

        titleArea.style.backgroundImage = `url(${details.image})`;
        titleArea.style.backgroundSize = 'cover';
        titleArea.style.backgroundPosition = 'center';

        clickAnimal = bird;
    }
}

function toggleAnimalInformation() {
    if (animalInformation.style.display === 'none') {
        (animalInformation).style.display = 'block';
        button.textContent = "Hide Details";
    } else {
        animalInformation.style.display = 'none';
        button.textContent = "Show Details"
    }
}

