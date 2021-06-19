This is a space to note the flow of data from component to component.

App ->   
        Navbar
        Deck  ------>    Spread  
        SortBtn 

There are 3 sets of 5 different resources to make up a deck of 15 cards.  These cards are drafted 3 at a time, randomly, for a player to select.  Once selected, a new set of cards will be drafted and selected from until the deck runs out.  Once the deck runs out, the cards are then shuffled back together.

Thinking the base deck should be held in the Deck Component.  There needs to be a Held state and Discard State.  

The Held State will track the games progress and resources, showing the player what they have selected through the session.  

The Discard state should be hold selected (and not select spread) until the deck needs to be reshuffled.  (once the baseDeck === 0 && discard === 15)
