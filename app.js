window.addEventListener("load", () => {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // const api = `some api address for weather${lat},${long};`
        });

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
    }
});