# TINY TOWNS SOLO
### Site Structure
This is a Site Manual for Tiny Towns Solo Deck React Web Application.
Created and Designed by: Eric Winebrenner 2021

## Main Concept:
The purpose of this build is to become a bit more familiar with the React library.  For users, I aim to provide something simple to pull up when they choose to play a solo version of Tiny Towns.

## Mission Statement:
I aim to make a mobile friend site where Tiny Town players can play solo sessions quickly without needing to shuffle the deck.  If at all possible, it would be nice to gain back the funds required to have this deployed and maintained utilizing Stripe as a donation method.

## Wireframe:
[Figma](https://www.figma.com/file/jl6MledrobDKbph3H8qUaq/Tiny-Towns-Solo-Wireframe?node-id=0%3A1)
[Prototype Example](https://www.figma.com/proto/jl6MledrobDKbph3H8qUaq/Tiny-Towns-Solo-Wireframe?node-id=1%3A2&scaling=scale-down&page-id=0%3A1)

## Site Structure:
[Trello Board](https://trello.com/b/MlL4A15e/tiny-towns-solo)

### Data Flow
[Data Flow Figma](https://www.figma.com/file/uaM1msWYXopjaxrbCFA7UU/Tiny-Towns-Solo?node-id=0%3A1)

### Navigation
Navigation houses "last selected" image held by the lastPicked state variable within App.js.  
Users will also be able to view the count of their previous selected resources.  These are displayed through badges that change through local state variables.
Both Rules and About modals will be accessed through this menu option as well.
Users will also be able to reset the complete deck, badge count, last picked via a clearCount function.

### Landing
  Main displays house OnLoadModal, Navbar, Deck, and Footer components.

### Components
- **OnLoadModal**
  - The intention of this modal is to quickly detail concepts of what this web application is meant to do for the user.
- **Navbar**
  - **AboutModal**
    - This is to detail the purpose of this application and provide a brief description of who I am as a developer.
    - This is also meant to be a point where a user can provide feedback via a contact form to help manage any bugs and/or general comments.
  - **RulesModal**
    - Provide a quick view of the Solo Rules of Tiny Towns and links to the complete rule book pdf available through AEGs website.
- **Deck**
  - This component displays what the current spread is available or "deal" button.  
  - v1+ may incorporate a way to alternate how the deck is dealt.  
  - **Spread**
    - This component handles the bulk of the logic to determine the random cards to be dealt from the deck, checks against the main deck values to determine if it needs to be "reshuffled" and provides the details as to what the user selects for other components.
    - **SortButton**
      - Main function is to simply fire off the "deal" function so that the Spread component can handle the logic.
- **Footer**
  - version display links to my github page.
  - Link to AEGs main page.
  - **DonateModal**
    - This is meant to proivde the user the capability to donate to me if they so desire.

## Site Maintenance:
This section will detail the sites maintenance log to help track progress and latest build process.  If a field is left blank, it will reference the row above it.  (ie: version notes v.0.1.0 until otherwise noted in a later row.).  Greater detail will be displayed within **Patch Notes** and/or the **Bug Log**.  

This is also meant to track the last point of when upkeep was handled.

Index   | Date    | Version | Detail        | Status    | Notes
---     | ---     |    ---  |  ---          |   ---     |  ---  
001     | 6.21.21 | 0.01.00 | Unclear Notes |   WIP     | Created Maint Log      
        |         |         |               |           |        


## Patch Notes:
Greater detail of versioning notes will be displayed here.

#### 6.21
- v.0.1.0:
  -  Beta build completed pre-deployment.  

## Bug Log:
Noted list of bugs and the current status.

#### 6.21.21
  - Resource counter (badge) not displaying final count on last draw of a deck prior to reshuffle.  Count displays afterwards.
    - Status: Fixed - 6/22
  - Rulebook Modal
    - Padding-Top is off on larger screens.
      - Status: Fixed - 6/23
### 6.22.21
  - About Modal
    - Padding-Top is off on larger screens.
      - Status: Fixed - 6/23

## Developer Notes:
This sections is mainly for general notes and resources to help with material (how-to resources) and practice build structure.

- [Markdown Guide](https://www.markdownguide.org/basic-syntax)
- [Wiki Software Versioning](https://en.wikipedia.org/wiki/Software_versioning)
- [Markdown to PDF](http://markdown2pdf.com/)
- [Tiny Towns Rule Book](https://www.alderac.com/wp-content/uploads/2018/11/Tiny_Towns_Rules_FINAL.pdf)