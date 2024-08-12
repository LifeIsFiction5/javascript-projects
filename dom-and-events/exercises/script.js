function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });

    missionAbort.addEventListener("mouseenter", function ( event ) {
        event.target.style.backgroundColor = "red";
    });

    missionAbort.addEventListener("mouseout", function ( event ) {
        event.target.style.backgroundColor = "";
    });

    missionAbort.addEventListener('click', function ( event ) {
        const userConfirmed = confirm("Are you sure you want to abort the mission?");
            if (userConfirmed) {
                paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
            }
    });
}

window.addEventListener("load", init);
