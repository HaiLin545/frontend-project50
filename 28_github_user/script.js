
const APIURL = 'https://api.github.com/users/'

const search = document.querySelector('#search');
const main = document.querySelector('main');

const loadingCard = document.createElement('div');
loadingCard.classList.add('card');
loadingCard.classList.add('loadingCard');
loadingCard.innerText = 'Loading...';

search.addEventListener('change', (e) => {
    e.preventDefault();
    let val = search.value;
    if (val) {
        main.removeChild(main.firstChild);
        getUser(val);
        search.value = '';
        console.log(123);
    }
})



async function getUser(userId) {
    main.appendChild(loadingCard);
    try {
        const { data } = await axios(APIURL + userId);
        createUserCard(data);
        getRepos(userId);
    } catch (err) {
        if (err.response.status == 404) {
            createErrorCard(`The user '${userId}' is not exist!`)
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        addRepos(data);
    } catch (err) {
        createErrorCard('Problem fetching repos!');
    }
}


function addRepos(data) {
    const repos = document.querySelector('#repos');
    for (let i = 0; i < data.length; i++) {
        const repo = document.createElement('a');
        repo.classList.add('repo');
        repo.href = data[i].html_url;
        repo.innerHTML = data[i].name;
        repos.appendChild(repo);
    }
}

function createUserCard(data) {
    const userCard = document.createElement('div');
    userCard.innerHTML = `
    <div class="card userCard">
    <div id='avatar'>
        <img src="${data.avatar_url}" alt="${data.name}">
    </div>
    <div>
        <h2>${data.name}</h2>
        <p>${data.bio}</p>
        <div id='infos'>
            <span class="info">${data.followers} <strong>Followers</strong></span>
            <span class="info">${data.following} <strong>Following</strong></span>
            <span class="info">${data.public_repos} <strong>Repos</strong></span>
        </div>
        <div id='repos'>
        </div>
    </div>
</div>
    `;
    main.removeChild(loadingCard);
    main.appendChild(userCard);
}

function createErrorCard(text) {
    const errorCard = document.createElement('div');
    errorCard.classList.add('card');
    errorCard.innerText = text;
    main.removeChild(loadingCard);
    main.appendChild(errorCard);
}

