const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// GET USER
async function getUser(username) {
    try {
        const { data } = await axios.get(APIURL + username) // destructure the promise response and pull 'data' from the object returned

        console.log(data) // log data
        createUserCard(data)
    } catch(err) {
        console.log(err)
        createErrorCard("Aw, beans! That username does not exist!");
    }
    
}

// GET REPOS
// async function getRepos(username) {
//     try {
//         const { data } = await axios.get(APIURL + username + "/repos") // destructure the promise response and pull 'data' from the object returned
//         createUserCard(data) // log data
//         let repos = data;
//     } catch(err) {
//         console.log(err)
//     }
    
// }


// CREATE USER CARD
function createUserCard(user) {
    const cardHTML = `<div class="card">
    <div>
        <img src="${user.avatar_url}" alt="Profile image" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repositories</strong></li>
        </ul>

        <div id="repos">
        </div>
    </div>
</div>`;

main.innerHTML = cardHTML;
}

// CREATE ERROR CARD
function createErrorCard(msg) {
    const errorCard = `<div class="card"><h2>${msg}</h2></div>`;
    main.innerHTML = errorCard;
}

// Form submit listener
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default

    const user = search.value; // set user to the search query

    if(user) { // if that user exists
        getUser(user); // call getUser() with user

        search.value = ""; // reset search value to empty
    } 

})