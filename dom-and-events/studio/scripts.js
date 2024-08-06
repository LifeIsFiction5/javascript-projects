// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;

    let takeoff = this.document.getElementById("takeoff");
    let flightStatus = this.document.getElementById("flightStatus") //flightStatus element
    let shuttleBackground = this.document.getElementById("shuttleBackground");
    let spaceShuttleHeight = this.document.getElementById("spaceShuttleHeight");
    let land = this.document.getElementById("landing");
    let abortMission = this.document.getElementById("missionAbort");
    let rocket = document.getElementById('rocket');


    takeoff.addEventListener("click", function() {
        let confirmed = window.confirm("Confirm that the shuttle is ready for takeoff.");

            if (confirmed) { 
                window.alert("Liftoff!");
                    
                    flightStatus.innerHTML = "Now it reads this!";
                    shuttleBackground.style.backgroundColor = "blue";
                    altitude = 1000;
                    spaceShuttleHeight.innerHTML = altitude;



            }
    });

    land.addEventListener("click", function(){

        window.alert("The shuttle is landing.  Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        altitude = 0;
        spaceShuttleHeight.innerHTML = altitude;

    });

    abortMission.addEventListener("click", function() {
        let abort = window.confirm("Confirm that you want to abort the mission.")

            if (abort) {
                flightStatus.innerHTML = "Mission Aborted.";
                shuttleBackground.style.backgroundColor = "green";
                altitude = 0;
                spaceShuttleHeight.innerHTML = altitude;
            }


    });

    // Use event delegation for directional buttons

    this.document.addEventListener("click", function(event) {
        if (event.target.id === "left") {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "right") {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "up") {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
        if (event.target.id === "down") {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;

        }

    });


});

