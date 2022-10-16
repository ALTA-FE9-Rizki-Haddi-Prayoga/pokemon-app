### Build a web app using React.js that has 3 pages, Pokemon List, Pokemon Detail, and My Pokemon List. Web app UI/UX should be mobile-first and follow requirements.

### Link Deployment: mong-pokemon-react.vercel.app

### List Task:
1. Using APIs from https://pokeapi.co/
2. Screen:
    - Pokemon List page; should show a list of Pokemons’ names and the owned total. When a Pokemon is clicked, it should go to that Pokemon Detail page.
    - Pokemon Detail page; should show a picture of the Pokemon with its moves and types (this information is from the API, feel free to add more information on the Pokemon if you want to). The mandatory thing is that there should be a button to catch the Pokemon, (success probability is 50%), if success then the user can give the Pokemon a nickname and add that Pokemon to `My Pokemon List’. You can catch the same pokemon multiple times but need to give a different nickname for each pokemon.
    - My Pokemon List page; should show a list (like Pokemon List page, but with each of their nicknames as well) of all Pokemons you have caught. It should also be possible to remove/release a Pokemon from the list on this page. The pokemons in this list persist even after a full page reload.
3. Make your web-app as performant as possible. You can use tools such as Lighthouse or PageSpeed to help you audit your web-app.
4. Deploy your web app using some free platform solutions such as Vercel, Github Pages, Firebase, Netlify or other
