
export function getHeroes(){
    return fetch('https://superhero-search.p.rapidapi.com/api/heroes',
    {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':'7b9240adaamsh9935e2fe8867f32p1c0bc2jsn65fd37942a89',
            'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}