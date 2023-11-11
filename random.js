function RandomUsers(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://randomuser.me/api/",true);

    xhr.onload = function(){

        if(this.status == 200){
            // console.log(JSON.parse(this.responseText));
            console.log(JSON.parse(this.responseText).results[0]);
            const name = document.getElementById("name");
            const gender = document.getElementById("gen");
            const mail = document.getElementById("mail") ;
            const city = document.getElementById("city");
            const img = document.getElementById("img");

            gender.innerText = JSON.parse(this.responseText).results[0].gender;

            name.innerText = JSON.parse(this.responseText).results[0].name.first + " " + JSON.parse(this.responseText).results[0].name.last;

            mail.innerText = JSON.parse(this.responseText).results[0].email;

            city.innerText = JSON.parse(this.responseText).results[0].location.state + " / " + JSON.parse(this.responseText).results[0].location.city + " / " +JSON.parse(this.responseText).results[0].location.postcode;

            img.setAttribute("src",`${JSON.parse(this.responseText).results[0].picture.medium}`);

        }
    } 


    xhr.send();
}

RandomUsers();