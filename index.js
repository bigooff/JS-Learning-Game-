// import usefull modules
// const fs = require("fs")
// const JDP = require("./scripts/JDP")
// const toJSON = require("./scripts/toJson")
// game locations
const availableLocations = document.querySelectorAll(".locationOptions")
const locationMenu = document.querySelector("#locations")
const locations = [
    forest = {name : "Forest",} ,
    caverns = {name : "Caverns",} ,
    camp = {name : "Camp",} ,
]
//Location Changes//
// sets current location to Forest
const startingLocation = "Forest";
console.log(startingLocation)
let currentLocation;
if(startingLocation === "Forest"){
    currentLocation = startingLocation;
}

function setLocation(){
    currentLocation = locationMenu.value
}
locationMenu.addEventListener("change",setLocation)
//
//PUTS THE LOCATIONS IN THE DROP DOWN MENU //
for(let location of locations){
    const option = document.createElement("option")
    option.textContent = location.name;
    option.value = location.name
    option.classList.add("locationOptions")
    console.log(location.name)
    locationMenu.appendChild(option)
}
 ////// LOGGER //////                                                  <--------
 // devTest button for logging stuff to console
let logButton= document.querySelector(".log");
logButton.addEventListener("click",()=>{
    console.log(playerResources)
})



 const forestMats = locationMaterials("Forest");

 console.log(forestMats)
 //assigns available materials according to the location given
 function locationMaterials(location){
     let mats = {};
     
     if(location === "Forest"){
         mats.wood = "Wood";
         mats.rock = "Rock";
         return mats;
     } else if (location === "Caverns"){
         mats.rock = "Rock";
         mats.iron = "Iron ore";
         mats.gold = "Gold ore"
         mats.crystal = "Crystal";
        return mats;
     } // else if () {}  ADD MORE LOCATIONS HERE LATER 
}




 const enemies = [
    skeleton  = {name : "Skeleton",hp : 30,dmg : 4},
    skeletonMage = {name : "Skeleton Mage",hp : 25,dmg : 10},
    skeletonBrute  = {name : "Skeleton Brute",hp : 90,dmg : 5},
    skeletonKing  = {name : "Skeleton King",hp : 300,dmg : 18}
];


// WORK ON INVENTORY 
const player = {
    stats : [
    hp = 100,
    dmg = 5,
    armor = 2 ,
    critChance = 0.5,
    critDmg = 1.5,
    ],  
    inventory : {
        coins : 0,
        items : ["test"],
        resources : {
            wood : 0,
            stone : 0,
            iron: 0,
            gold: 0,
            crystals: 0
        },
    }
}
 

// DISPLAYS STATS IN STATBOX
showStats();
function showStats(){
    
    const hpli = document.querySelector(".hp");
    const dmgli = document.querySelector(".dmg");
    const armorli = document.querySelector(".armor");
    const critChanceli = document.querySelector(".critChance");
    const critDmgli =document.querySelector(".critDmg");
    stats = player.stats;

          if(hpli.className === "hp"){
            hpli.innerHTML = `: ${hp}`
        } if (dmgli.className === "dmg"){
            dmgli.innerHTML = `: ${dmg}`
        } if (armorli.className === "armor"){
            armorli.innerHTML = `: ${armor}`
        } if (critChanceli.className === "critChance"){
            critChanceli.innerHTML = `: ${critChance}%`
        } if (critDmgli.className === "critDmg"){
            critDmgli.innerHTML = `: x${critDmg}`}

}

//
// Player acquired resources 
//
const playerResources = player.inventory.resources;
    
const woodAmount = document.querySelector("#wood");
woodAmount.textContent = `Wood: ${playerResources.wood}`


//GATHER CORRESPONDING RESOURCES WITH THE GATHER BUTTON

const gatherButton= document.querySelector(".gather");
gatherButton.addEventListener("click", gather)
function gather(){
    if(currentLocation === "Forest"){
        playerResources.wood += 1;
        woodAmount.textContent = `Wood: ${playerResources.wood}`
        // console.log("gathered wood")
    }
}




// const refinedMaterials = [
//     ironIngot,
//     goldIngot,
//     sticks,
//     infusedCrystal,
//     bricks
// ];




console.log(enemies[0].name);
console.log(enemies[0].hp);
console.log(enemies[0].dmg);
