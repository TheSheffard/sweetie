document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    const departmentStaff = {
        'ICT': [
            { name: "Ibrahim Dauda", duty: "Web Dev" },
            { name: "Emmanuel Chuma" },
            { name: "Seungwater Kelvin" },
            { name: "Emmanuel Toriola" },
            { name: "Daniel Ademola" },
            { name: "Munira Usman" },
            { name: "Treasure Isah" },
            { name: "Ibrahim Dauda" },
            { name: "David Ekaeda" }
        ],
        'AIS': [
            { name: 'Favour Byencit' },
            { name: 'John Okafor' },
            { name: "Paul Silas" },
            { name: "Cynthia Ofori" },
            { name: "David Adeyemi" },
            { name: "Dabiel Nnamdi" },
            { name: "Samuel Amos" }

        ],
        'communication': [
            { name: 'Nathan Bassey' },
            { name: "Abduljeleen Sabo" },
            { name: "Victor Emenike" },
            { name: "Patience Ojokwor" },
            { name: "Ruth Kadiri" },
            { name: "Salle Muhammad" }
        ],
        'account': [
            { name: "Zayyan Habibat" },
            { name: "Rashedat Umar" },
            { name: "Victory Dorcas" },
            { name: "Paul Passey" },
            { name: "Halima Esuola" },
            { name: "Zayyan Habibat" },
            { name: "David Polycap" },
        ],
        'mechanic': [
            { name: "Abdul Jalal" },
            { name: "Sani Abubarkar" },
            { name: "Esther Jacob" },
            { name: "Taiwo Oye" },
            { name: "Miracle Endurance" },
            { name: "Bello Vincent" },
            { name: "Kabir Usman" },
            { name: "Amos Abah" }
        ],
    }

    let selectedDept = document.getElementById("department")
    let list = document.querySelector(".shape-container")
    console.log(list)

    if (selectedDept) {
        selectedDept.addEventListener('change', (event) => {
            let selectedDeptValue = event.target.value;
            list.innerHTML = "";

            if (selectedDept && departmentStaff[selectedDeptValue]) {
                let allStaff = departmentStaff[selectedDeptValue];

                allStaff.forEach(element => {
                    list.innerHTML += `
        <div class="rectangle first">

                       <p>${element.name} </p>
        </div>

                    `
                });
            }



        })
    }






    const toggleMenu = () => {
        mobileNav.classList.toggle('is-open');
        menuToggle.classList.toggle('is-open');
    };

    // Toggle menu when the hamburger icon is clicked
    menuToggle.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });


})
