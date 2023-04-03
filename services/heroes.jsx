
export function getHeroes(){
    return fetch('https://superhero-search.p.rapidapi.com/api/heroes',
    {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':'API-KEY',
            'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}