# DDA 

## Inhoudsopgave

- [DDA](#dda)
  - [Inhoudsopgave](#inhoudsopgave)
  - [Beschrijving](#beschrijving)
  - [Gebruik](#gebruik)
    - [Events filteren](#events-filteren)
    - [Eventdetails bekijken](#eventdetails-bekijken)
  - [Kenmerken](#kenmerken)
    - [Gebruikte technologieën](#gebruikte-technologieën)
  - [Installatie](#installatie)
  - [Bronnen](#bronnen)
  - [Licentie](#licentie)

## Beschrijving
Dit project is een opdracht die ik heb ontvangen van het softwarebedrijf De Voorhoede om de website van DDA te maken en te reviseren. Het doel van deze opdracht was om de bestaande website te verbeteren aan de hand van nieuwe designs. Ook is het van belang dat er dynamische data wordt opgehaald vanuit een API of database.

<figure style="display: inline-block; text-align: center; margin-right: 10px;">
    <img src="./public/assets/filter.jpeg" alt="filter" width="200px">
    <figcaption>filter</figcaption>
  </figure>

  <figure style="display: inline-block; text-align: center; margin-right: 10px;">
    <img src="./public/assets/footer.jpeg" alt="footer" width="200px">
    <figcaption>footer</figcaption>
  </figure>

  <figure style="display: inline-block; text-align: center; margin-right: 10px;">
    <img src="./public/assets/details.jpeg" alt="detailspagina" width="200px">
    <figcaption>detailspagina</figcaption>
  </figure>



## Gebruik
De pagina is deel van een dynamische en interactieve website waar gebruikers aankomende evenementen kunnen vinden en filteren op basis van locatie.

### Events filteren
Op de eventspagina kunnen gebruikers alle opkomende events bekijken. Er is een filterfunctie waarmee je kunt filteren op locatie.  

- Selecteer een locatie (bijvoorbeeld "Ermelo") en de website toont automatisch alle events die in die plaats plaatsvinden.  

### Eventdetails bekijken
Wanneer je een events hebt gevonden dat je interesseert, kun je meer informatie bekijken door op de "Details"-button of button te klikken.  

- Je wordt doorgestuurd naar een detailpagina met uitgebreide informatie over het geselecteerde evenement.  
- Hier vind je onder andere de datum, tijd, locatie en een beschrijving van het event.  
- Een form waarmee je je kunt inschrijven voor het event.


## Kenmerken
Voor dit project heb ik gebruik gemaakt van veel moderne webtechnieken, waaronder:

### Gebruikte technologieën
- **HTML & CSS**  
  De basisstructuur en styling van de website zijn opgebouwd met HTML en CSS.

- **Server-side JavaScript**  
  Voor de back-end is gebruik gemaakt van Node.js en Express om een dynamische en efficiënte webserver te creëren. Nodejs zorgt ervoor dat ik Javascript serverside kan gebruiken en Express maakt mogelijk om routes te maken en responses en requests te verwerken.

- **Liquid Templates**  
  De weergave van de pagina’s gebeurt met behulp van Liquid Templates, waardoor dynamische data eenvoudig kan worden ingeladen en eventueel gemanipuleerd met liquid functies.  

- **Directus APi**
  De data die wordt opgehaald kom uit de Directus Api. Doormiddel van API endpoint url's kunnen vervolgens specifieke data worden opgevraagt.

- **Nodemon**  
  Voor efficienty is er gebruik gemaakt van Nodemon tijdens de development. Dit zorgt ervoor dat de server automatisch herstart bij wijzigingen in de code.

##Responsive
Bij de ontwikkeling van de pagina is gewerkt volgens het mobile first-principe. Hierbij is ook rekening gehouden met de responsiveness van de typografie voor grotere schermen. Dit is gedaan door middel van CSS clamp(). Deze aanpak is verwerkt in de styleguide van de basic-styling.

## Installatie
Project lokaal installeren

1. **Fork de repository**  
   Ga naar de [repository pagina](https://github.com/Ravirkt/server-side-rendering-server-side-website) en klik op de **Fork** knop in de rechterbovenhoek om een kopie van de repository naar je eigen GitHub account te maken.

2. **Clone de repository**  
   Clone je geforkte repository naar je lokale computer door het volgende commando uit te voeren in de terminal: git clone https://github.com/Ravirkt/server-side-rendering-server-side-website

3. **Installeer de packages**  
   Voer in de terminal de command **npm install** uit om de packages uit de package.JSON te installeren.

4. **Start de server**  
   Voer in de terminal de command **npm start** uit om de server te starten.





## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
