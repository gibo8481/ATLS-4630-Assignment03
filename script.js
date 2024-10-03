/**
 * API Documentation:
 * https://github.com/nickatnight/elonmu.sh
 */
const apiUrl = 'https://api.allorigins.win/get?url=https://elonmu.sh/api';


const button = document.getElementById('add-news-button');
button.addEventListener('click', add);

async function add() {
    try { 

        /**
         * Resources:
         * Sept 19 GitHub Example
         * https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
         */
        // timestamp parameter, force a fresh API call
        const response = await fetch(apiUrl, { cache: 'no-store' });

        if (!response.ok) {
            throw new Error('There was an error with NewsAPI. Please try again later.');
        }

        const data = await response.json();
        const json = JSON.parse(data.contents); 


        const { source, 
            title, 
            description, 
            url: articleUrl, 
            urlImage, 
            publishDate } = json;


        const article = document.createElement('div');
        article.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Description:</strong> ${description}</p>
            <a href="${articleUrl}" target="_blank">Read more</a>
            <img src="${urlImage}" alt="${title}" style="max-width: 100%; height: auto;">
            <p><em>Published on: ${new Date(publishDate).toLocaleString()}</em></p>
        `;
        document.body.appendChild(article);

    } catch (error) {
        console.error(error);
    }
}
