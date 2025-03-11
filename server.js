// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


console.log('Hieronder moet je waarschijnlijk nog wat veranderen')
// Doe een fetch naar de data die je nodig hebt
const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_events')

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const apiResponseJSON = await apiResponse.json()

// Controleer eventueel de data in je console
// (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log(apiResponseJSON)


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')





// index ophalen alle data van cards
app.get('/events', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_events')
  const apiResponseJSON = await apiResponse.json()
  // console.log(apiResponseJSON.data)


  response.render('events.liquid', { events: apiResponseJSON.data })
})

// details pagina
app.get('/event', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_events')
  const apiResponseJSON = await apiResponse.json()
  // console.log(apiResponseJSON.data)

  response.render('detail-event.liquid', { events: apiResponseJSON.data })
  // response.render('index.liquid', { test: "hallo dit is de specifieke event pagina" })

})













app.get('/events/:id', async function (request, response) {
  const location = request.params.id;

  let apiResponse;

  if (location === 'Alle-locaties') {

    apiResponse = await fetch(`https://fdnd-agency.directus.app/items/dda_events`);

  } else if (location === 'Nog-niet-bekend') {
    apiResponse = await fetch(`https://fdnd-agency.directus.app/items/dda_events?filter={"location":{"_null":true}}`);

  } else if (location) {
    apiResponse = await fetch(`https://fdnd-agency.directus.app/items/dda_events?filter={"location":{"_eq":"${location}"}}`);
    
  } else {

    apiResponse = await fetch(`https://fdnd-agency.directus.app/items/dda_events`);
  }

  const apiResponseJSON = await apiResponse.json();
  console.log(apiResponseJSON);

  response.render('events.liquid', { events: apiResponseJSON.data });
});




// app.get('/Austin, Texas', async function (request, response) {
//   const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_events?filter={"photo":{"_neq":null},"location":{"_eq":"Austin%2C%20Texas"}}')
//   const apiResponseJSON = await apiResponse.json()
//   console.log(apiResponseJSON.data)

//   response.render('index.liquid', { events: apiResponseJSON.data })
// })

// app.get('/Eindhoven', async function (request, response) {
//   const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_events?filter={"photo":{"_neq":null},"location":{"_eq":"Eindhoven"}}')
//   const apiResponseJSON = await apiResponse.json()
//   console.log(apiResponseJSON.data)

//   response.render('index.liquid', { events: apiResponseJSON.data })
// })

// app.get('/Ermelo', async function (request, response) {
//   const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_events?filter={"photo":{"_neq":null},"location":{"_eq":"Ermelo"}}')
//   const apiResponseJSON = await apiResponse.json()
//   console.log(apiResponseJSON.data)

//   response.render('index.liquid', { events: apiResponseJSON.data })
// })

// app.get('/Arnhem', async function (request, response) {
//   const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_events?filter={"photo":{"_neq":null},"location":{"_eq":"Arnhem"}}')
//   const apiResponseJSON = await apiResponse.json()
//   console.log(apiResponseJSON.data)

//   response.render('index.liquid', { events: apiResponseJSON.data })
// })

// app.get('/Online', async function (request, response) {
//   const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_events?filter={"photo":{"_neq":null},"location":{"_eq":"Online"}}')
//   const apiResponseJSON = await apiResponse.json()
//   console.log(apiResponseJSON.data)

//   response.render('index.liquid', { events: apiResponseJSON.data })
// })























// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
