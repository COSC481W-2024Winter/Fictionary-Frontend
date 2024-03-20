# The Tricksters

## Fictionary

Our project consists of building an interactive web based game, where we will have a host and a limited number of clients (similar to Kahoot, or a Jackbox game). This game will be multiplayer game similar to Pictionary but with a twist.

In a game from 3 to 8 players, there is an artist who receives a word to draw. The other players are tasked with coming up with ‘fake answers’ of what the picture being drawn is in order to throw off their competition. The players will then have to select an answer for what the drawing is, where the options are the (player made) fake answers and the single, true, answer (given by the game). If the real answer is chosen, the artist receives points. If the fake answer is chosen, the author of the fake answer receives points. To win, you must either flex your art skills or lie convincingly.

## Want to try our game?

There are a few ways to try our project. You can try it online or try it yourself locally.

1. **Trying the Game Online**
   - To try the game online, you can visit our site which we have the most recent version here: https://fictionary-frontend-lut5d.ondigitalocean.app/ 

2. **Trying to Game Locally**
    - You can also try the game locally. To do so, please keep reading to installation section.

### Setup Instructions 

To get the game running locally, follow these steps:

1. **Prerequisites:**
   - Ensure Node.js is installed on your system.
   - Clone the repository or download the project files. You also need to download the backend repository as well. That link is here: (https://github.com/COSC481W-2024Winter/Fictionary-Backend)

2. **Installation:**
   - You need to have 2 terminals open for this to work.
   - Navigate to the project directories in your terminals, one for the frontend, another to the backend.
   - Run `npm install` to install all required dependencies.

3. **Running the client side**
   - Enter the frontend folder in your terminal.
   - In the folder with README.md in it, create a new file called `.env`. 
   - Open the  `.env` file in your text editor, enter `REACT_APP_SOCKET_SERVER_URL=http://localhost:8000` inside the folder and save it. This is a required for local machines to connect to the backend.
   - Execute `npm start` in the frontend folder to open the client side.
   - In your preferred browser, navigate to http://localhost:3000 to access the homepage of our application.

4. **Running the Server:**
   - Execute `node index.js` in the backend folder to start the server.
   - The server listens on `http://localhost:8000` for incoming connections.

## Our Team

This project was created by a few students at EMU. Here are the members of this game.

### [Jasmine Broton](https://github.com/jasminebroton) - Team Leader

I'm a senior majoring in Computer Science with a minor in Music. I am an unapologetic Java lover and enjoy working with local software/scripting the most. I like to make things, whether it be an application, a sweater, a song, etc, I always have a project of some kind I'm working on!

### [Ellen Yu](https://github.com/eyu776) - Team Member

I am a junior majoring in Computer Science. I primarily work with TypeScript and enjoy learning and working with TS libraries concerning type safety.

### [Isabela Reimberg](https://github.com/BelaReimberg) - Deputy Leader

I'm a Senior pursuing a degree in Computer Science. I enjoy working in frontend including html/javascript and backend working with PHP and database building. I'm always excited to learn new tools that help me develop projects.

### [NOVA](https://github.com/StellarSparks) - Team Member

Hello, I'm a student at EMU pursuing a degree in computer science. I'm skilled with a range of languages including Java, Python, C/C++, Ruby, JavaScript, and others. Most of my experience with web development has to do with the front-end of things so I'm exited to learn about the back-end for this project.

### [Hunter Cox](https://github.com/CreamTW) - Team Member

Hello there. I am a Senior at EMU working on my degree for Computer Science. I like to code in java and python as they are more enjoyable to code in for me than some other languages and I trying to learn some coding in databases in my off time. I hope this will be a fun project to enjoy.

### [Ali](https://github.com/AliAlJabur24) - Team Member

I'm a student at EMU working towards a Computer Science degree. I have experience with React and will mainly work on the backend.

### [Barbara](https://github.com/) - Team Member

Hi, I'm a student at EMU majoring in computer science. I am confortable with multiple programmming languages, one of them being Java. I hope to develop my skills working in this project and learn new things.

## Our application 

### Versions 
Node.js/Javascript: v20.11.0


### Layout Description 

For our application, we've divided our frontend and our backend into two seperate repositories. This repository contains only our front end. the src folder contains all of our code, while the public folder contains resources that were automatically included with the boiler plate React app. The folder .vscode are extra packages required to allow the use of TailwindCSS in VSCode.


