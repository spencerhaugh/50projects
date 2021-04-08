// DEPENDENCIES
const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');



// GET USER
async function getUser(username) {
    try {
        const { data } = await axios.get(APIURL + username); // destructure the promise response and pull 'data' from the object returned

        console.log(data); // log data
        createUserCard(data);
        getRepos(username);
    } catch(err) {
        console.log(err)
        createErrorCard("Aw, beans! That username does not exist!");
    }
    
}


// GET REPOS
// Called from within getUsers()
async function getRepos(username) {
    try {
        const { data } = await axios.get(APIURL + username + "/repos?sort=created"); // destructure the promise response and pull 'data' from the object returned
        addReposToCard(data); // Call addReposToCard with the data returned
    } catch(err) {
        createErrorCard("Aw, beans! Not found!");
    }
    
}


// CREATE USER CARD
function createUserCard(user) {
    // Build the card HTML here and pass into user data via object literals. Append cardHTML to main.
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

// ADD REPOS TO USER CARD
// Helper function will add a-tag/link elements with data from the repo API. Called from within getRepos()
function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos
        .slice(0, 8)
        .forEach(repo => {
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo');
            repoEl.href = repo.html_url; // set element href to repo html url
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
    })
}

// CREATE ERROR CARD
// In case of error with API calls. 
function createErrorCard(msg) {
    const errorCard = `<div class="card"><h2>${msg}</h2></div>`;
    main.innerHTML = errorCard;
}


// FORM SUBMIT EVENT LISTENER
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default

    const user = search.value; // set user to the search query

    if(user) { // if that user exists
        getUser(user); // call getUser() with user

        search.value = ""; // reset search value to empty
    } 

})