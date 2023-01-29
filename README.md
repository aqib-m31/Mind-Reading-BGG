# Mind-Reading-BGG
## Inspiration
An instructor from the University of London's Mathematics for Computer Science online course attempting to guess the number a student is thinking of.

## What it does
A user is presented with 5 cards, each containing numbers. The user must select the cards that correspond to their birthday and birth month and enter the card numbers in respective input fields separated by spaces. It then uses this information to display the user's exact birthday.  

## Working
It works by converting the user's selected card numbers into a binary number. The card number represents the bit position of the binary number, with the rightmost bit (least significant bit) being at position 0. The system turns on the corresponding bits of the binary number "00000" based on the card numbers selected by the user. Then it converts the binary number into its decimal representation, which represents the user's exact birthday. The user's birthday can also be obtained by simply adding the first number of all selected cards.

## How we built it
I used **Velo by Wix** for designing the user interface and **JavaScript** for the logic of the program.

## Challenges we ran into
I was not comfortable with designing the user interface, so I decided to use Velo by Wix to help me with that. It was my first time using Wix, so it was a bit challenging at first, but the documentation provided by Wix was very helpful in getting me up to speed.

## Accomplishments that we're proud of
I was able to apply the knowledge and skills I had learnt to implement the mini project successfully.

## What we learned
- How to use Velo by Wix to design the user interface of a web application.
- How to code the logic of a math game using JavaScript.

## What's next for Mind Reading - Birthday Guessing Game
I plan to modify the game to also guess the user's complete birthday, including the year. This will be a bit challenging as I will need to take the user's input for the year in 3 separate chunks.
