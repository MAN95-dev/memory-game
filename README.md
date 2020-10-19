# Halloween Memory Game - Milestone Project 2

(/imgs/memory-game.png) 

This project was created as the second of four milestone projects for Code Institute. 
The challenge was to create a static front-end cooking website. We needed to utilize the skills that were learnt in the first few modules, 
specifically HTML and CSS. This project was built as a recipe index for users wanting access to vegetarian and vegan recipes. The purpose
of the project was to provide recipes for users practicing a vegetarian and vegan diet as well as users wanting to explore vegetarian and 
vegan recipes. It was also built to inform users about a vegetarian and vegan diet.


## Table of Contents
1. [**UX**](#ux)
    - [**Project Goals**](#project-goals)
    - [**Player goals**](#player-goals)
    - [**Developer Goals**](#developer-and-Business-Goals)
    - [**User Stories**](#user-stories)
    - [**Design choices**](#design-choices)
    - [**Wireframes**](#wireframes)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

3. [**Technologies used**](#technologies-used)

4. [**Testing**](#testing)

5. [**Deployment**](#deployment)

6. [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media**](#media)
    - [**Code**](#code)
    - [**Acknowledgements**](#acknowledgements)

## UX

### Project Goals

The primary goal of PicFlip! is to provide a clean, intuitive and child friendly game to entertain and delight it's users.
PicFlip! has two target audiences: Pre-school children and their parents. 

#### Player goals

The central target audience for this game is pre-school children aged 1 to 5 years old.

Players goals are:
- A fun game to play.
- Child friendly controls.
- Large buttons and clickable areas for young fingers to operate.
- All game controls laid out together and in an intuitive way. 
- Fun images and sounds. 
- Visual and audio rewards while playing.

PicFlip! is a great way to help players meet these needs because:
- The planning and design process took all these needs into account before starting to build it. 
- Controls are grouped together clearly.
- Game controls are large, utilising icons and colours to communicate their purpose before any words that a child would not be able to read. 
- PicFlip! includes audio and visual rewards as part of the game.
- The overall feel of PicFLip! is fun and child-friendly.

#### Developer Goals

- A developer looking to use JavaScript to create an interactive game. 
- A project the developer is excited to make a part of her portfolio. 

#### User Stories

As a player aged between 6-14 years old, I want:
1. The ability to easily find and understand the controls for the game, so that I can operate them easily. 
2. Large easy to press buttons and controls, so that my young children can use them on all devices.
3. Visual icons and images that I recognise, so that I understand when I have achieved something in the game. 
4. The ability to see how long it takes me to finish a game, so that I can track my game time. 
5. The ability to see how many moves I make in a game, so that I can track the number of moves made in each game. 
6. The ability to restart a game, if I am not satisfied with my current game. 

### Design Choices

The overall feel of the game is one that is designed for children to enjoy during Halloween, scary events, or in general. 
The following design choices were made with this in mind:

**Fonts**

- The primary font **Creepster** was chosen because it resembles one of many scary fonts used during Halloween.  

- The secondary font **Permanent Marker** was chosen for its childlike qualities, while complementing the primary font nicely in style.

**Icons**

- All icons used were chosen for their obvious meaning and purpose so that they can be understood by everyone.

**Colours**

- The colours - black, orange, and purple were used, as they are common colors used and identified with during Halloween. 
- The white font was chosen, as it contrasts well on the dark background. 

**Backgrounds**

- The background image of a haunted house was chosen to enhance the feeling of Halloween. 

**Card images**

- Halloween icons were chosen for this game because the theme is Halloween.
- The halloween icons were chosen, as Halloween is popular amongst boys and girls. 

### Wireframes

The wireframes were taken from [Scotch](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript) during the research and planning process for this project. 

- Game-page ![Game page](/imgs/game-page.png)
- Win pop-up ![Win pop-up](/imgs/win-popup.png)

## Features
 
### Existing Features

1. **Dashboard**
    - The game dashboard contains the score panel (3 stars), move(s) counter, timer, and reset button.   
    
2. **Score panel**
    - Located above the game cards, provides a score out of 3 stars. 
    - The score is determined by the number of moves a player makes and the time it takes for them to finish the game. 
    
3. **Move(s) counter**
    - Located above the game cards, the move(s) counter counts the number of turns the player has taken in the current game. 
    - This total is then used to give the player a score out of 3 stars when the game is complete.
    
4. **Timer**
    - Located above the game cards, the timer times how long the player takes to finish the game.  
    - This time is then used to give the player a score out of 3 stars when the game is complete.
 
5. **Reset button**
    - The reset button, represented by a curved arrow, resets the game, when it is pressed the game turns any face-up cards back over, reshuffles them and resets         
      the move(s) counter back to 0. 
    
6. **Game board and cards**
    - The game board is where the memory cards are displayed. 
    - The cards are laid out in a grid 4 cards wide on medium to large screens, and 4 cards wide on phones.

7. **Congratulatory modal** 
    - A win modal pops up when a game is completed, congratulating the player.
    - The win modal displays the number of stars the player won for the game they just played, as well the number of moves they made in the game, and the time it         
      took for the player to cmplete the game. 

### Features Left to Implement

1. **Difficulty levels**
    - Add four different levels to the game for players to choose from. 
    - Easy (8 cards), Medium (12 cards), Hard (16 cards), and Expert (20 cards). 
    
2. **Theme selection**
    - Add different themes for each level for players to choose from.
    - Each theme has a unique card deck and background that matches the theme chosen. 
    
3. **Player info modal** 
    - When playing the game for the first time, a modal pops up and asks for the players name.
    - The modal won't close unless the players name has been filled in. 
    - The modal is also activated if stored player data is reset.  
    
4. **Player info display**
    - At the top of the dashboard add the players name to be displayed. 
    - Underneath this add a display to show their highest score (out of 3 stars). 
    - The star display changes if a different level or theme is selected. 
    
5. **Info button**
    - Add an info modal that offers easy to understand instructions on how to play the game. 
    - The modal can be represented by an info icon, which opens the info modal. 
    - The icon will be displayed on the dashboard.
   
## Technologies Used

- This project uses HTML, CSS and JavaScript programming languages.
- [Gitpod](hhttps://www.gitpod.io/) 
    - Developer used **Gitpod** for their IDE while building the website.
- [Google Fonts](https://fonts.google.com/)
    - The project uses **Google fonts** to style the website fonts.
- [Font Awesome](https://fontawesome.com/)
    - The project uses **Font Awesome** to provide icons for the memory game.
- [GitHub](https://github.com/)
    - This project uses **GitHub** to store and share all project code remotely. 
    
## Testing 

The HTML and CSS code was validated using the W3C validator. It had no errors or warnings to show. The website was examined in both
Chrome and Safari to check for cross brower compatibility. The responsive design mode was used in both browsers to examine the site 
at various screen sizes. The site was viewed in both Chrome and Safari on the following devices:

- Galaxy S5
- Pixel 2
- Pixel 2 XL
- iPhone 6/7/8
- iPhone 6/7/8 plus
- iPhone X
- iPad
- iPad Pro
- Laptop screen

I played the memory game to ensure that it worked as it was supposed to. 
I clicked on the 'play again' button to ensure the game restarted once clicked on.

## Deployment
 
This project was developed using [Gitpod](https://www.gitpod.io/), committed to git, pushed to GitHub, and deployed via GitHub pages.  

## Credits

### Content

- The text from the memory game was copied from [Scotch](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript)
- The text from the README.md file was copied from [Picflip!](https://github.com/AJGreaves/picflip)

### Media

#### Images

- The background image for my memory game was taken from [Wallpaper Abyss](https://wall.alphacoders.com/by_sub_category.php?id=152813&name=Halloween+Wallpapers)
- The icons for my card deck were taken from [Font Awesome](https://fontawesome.com/icons?d=gallery&c=halloween&m=free)

### Code

- The code for my memory game was taken from [Scotch](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript)

### Acknowledgements

Special thanks to:
- Code Institute tutors for helping support and guide me in the right direction with my code. 

Many thanks! Michelle
