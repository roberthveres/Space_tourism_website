
const primaryNav = document.querySelector('.primary-navigation');
const navIcon = document.querySelector('.menu-icon');

navIcon.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visibile')

    if(visibility === "false") {
        primaryNav.setAttribute('data-visibile', true);
        navIcon.setAttribute('area-expanded', true)
    } else if(visibility === "true"){
        primaryNav.setAttribute('data-visibile', false);
        navIcon.setAttribute('area-expanded', false)
    }
});
const activeLinkPathName = window.location.pathname;


fetch("../data.json")  
.then(res => res.json())
.then((data) => {

    let moon = document.getElementById("moon");

    if (moon){
        document.querySelector("#moon").innerText =
        data.destinations[0].name.toUpperCase();
        document.querySelector("#mars").innerText =
        data.destinations[1].name.toUpperCase();
        document.querySelector("#europa").innerText =
        data.destinations[2].name.toUpperCase();
        document.querySelector("#titan").innerText =
        data.destinations[3].name.toUpperCase();


        moon.addEventListener("click", () => {
        document.querySelector("#title").innerText =
        data.destinations[0].name.toUpperCase();
        document.querySelector("#moon-description").innerText =
        data.destinations[0].description;
        document.querySelector("#distance").innerText =
        data.destinations[0].distance.toUpperCase();
        document.querySelector("#travel-time").innerText= 
        data.destinations[0].travel.toUpperCase();
        document.querySelector("#destination-image").src =
        data.destinations[0].images.png;
        document.getElementById("distance-paragraph").innerText = "AVG. DISTANCE";
        document.getElementById("travel-time-p").innerText = "EST. TRAVEL TIME";
    
        });  
        moon.click();

        let mars = document.getElementById("mars");

        mars.addEventListener("click", () =>{
            document.querySelector("#title").innerText =
            data.destinations[1].name.toUpperCase();
            document.querySelector("#moon-description").innerText =
            data.destinations[1].description; 
            document.querySelector("#distance").innerText =
            data.destinations[1].distance;
            document.querySelector("#travel-time").innerText =
            data.destinations[1].travel;
        })

        
        let europa = document.getElementById("europa");

        europa.addEventListener("click", ()=> {
         document.querySelector("#title").innerText =
            data.destinations[2].name.toUpperCase();
            document.querySelector("#moon-description").innerText =
            data.destinations[2].description; 
            document.querySelector("#distance").innerText =
            data.destinations[2].distance;
            document.querySelector("#travel-time").innerText =
            data.destinations[2].travel;
        });
        
        
        let titan = document.getElementById("titan");

        titan.addEventListener("click", ()=> {
            document.querySelector("#title").innerText =
            data.destinations[3].name.toUpperCase();
            document.querySelector("#moon-description").innerText =
            data.destinations[3].description; 
            document.querySelector("#distance").innerText =
            data.destinations[3].distance;
            document.querySelector("#travel-time").innerText =
            data.destinations[3].travel;
        })
        
     
    }

    
    let duglass = document.getElementById("duglass")

    if(duglass){

            duglass.addEventListener("click", () => {
            document.querySelector("#role").innerText =
            data.crew[0].role.toUpperCase();
            document.querySelector("#name").innerText =
            data.crew[0].name.toUpperCase();
            document.querySelector("#bio").innerText =
            data.crew[0].bio;
            document.querySelector("#crew-image").src =
            data.crew[0].images.png;
        })
        duglass.click();
    
    
    
        let mark = document.getElementById("mark")

          mark.addEventListener("click", ()=> {
             document.querySelector("#role").innerText =
            data.crew[1].role.toUpperCase();
            document.querySelector("#name").innerText =
            data.crew[1].name.toUpperCase();
            document.querySelector("#bio").innerText =
            data.crew[1].bio;
            document.querySelector("#crew-image").src =
            data.crew[1].images.png; 
        })
    
        
        let victor = document.getElementById("victor")

          victor.addEventListener("click", ()=> {
             document.querySelector("#role").innerText =
            data.crew[2].role.toUpperCase();
            document.querySelector("#name").innerText =
            data.crew[2].name.toUpperCase();
            document.querySelector("#bio").innerText =
            data.crew[2].bio;
            document.querySelector("#crew-image").src =
            data.crew[2].images.png; 
        })
    
        
    
        let ansary = document.getElementById("ansary")

          ansary.addEventListener("click", ()=> {
              document.querySelector("#role").innerText =
            data.crew[3].role.toUpperCase();
            document.querySelector("#name").innerText =
            data.crew[3].name.toUpperCase();
            document.querySelector("#bio").innerText =
            data.crew[3].bio;
            document.querySelector("#crew-image").src =
            data.crew[3].images.png; 
        })
    
    }


let launch = document.getElementById("launch");

    if(launch){

        launch.addEventListener("click",() => {
        document.querySelector("#terminology").innerText = 
        "THE TERMINOLOGY…";
        document.querySelector("#name").innerText =
        data.technology[0].name.toUpperCase();
        document.querySelector("#description").innerText =
        data.technology[0].description.toUpperCase();
        document.querySelector("#vehicle-img").src = 
        data.technology[0].images.portrait;
        document.querySelector("#vehicle-img2").src = 
        data.technology[0].images.landscape;
        })

  
        launch.click();

        let spaceport = document.getElementById("spaceport");

          spaceport.addEventListener("click", ()=> {
             document.querySelector("#name").innerText =
            data.technology[1].name.toUpperCase();
            document.querySelector("#description").innerText =
            data.technology[1].description.toUpperCase();
            document.querySelector("#vehicle-img").src = 
            data.technology[1].images.portrait;
            document.querySelector("#vehicle-img2").src = 
            data.technology[1].images.landscape;
        })
        

        let spaceCapsule = document.getElementById("space-capsule");

          spaceCapsule.addEventListener("click", ()=> {
                document.querySelector("#name").innerText =
            data.technology[2].name.toUpperCase();
            document.querySelector("#description").innerText =
            data.technology[2].description.toUpperCase();
            document.querySelector("#vehicle-img").src = 
            data.technology[2].images.portrait;
            document.querySelector("#vehicle-img2").src = 
            data.technology[2].images.landscape; 
        })
    }
});


