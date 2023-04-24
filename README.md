# Environment
This a default Vite + pnpm + React + Typescript setup for your technical test at IWCI.


You can start the app with

```bash
$ [pnpm | npm] install
$ [pnpm | npm] run dev
```

or

```bash
$ yarn
$ yarn dev
```


# Goal

The goal of this exercise is to provide you with a simple game to code. It aims at allowing us to assess your skills, self-organization ability and decision making.
You are free to realize it however you see fit - meaning : do whatever you want in whatever order you want. Get points wherever you can.

We want to assess your decision making when faced with a constraint (here, the clock). How do you prioritize tasks and why ?

# The game
It's a **Memory**
The goal is to have a set of hidden cards that, when clicked, will display a number.

### Rules :
- A list of N cards is hidden. Each card is associated with a number
- They can never be more than 2 cards with the same number, and each number must appear on exactly 2 cards. Therefore, there can only be a multiple of 2 cards, with a minimum of 4 cards.
- The user can click on a card to display its number
- When two cards are shown, after a small delay, and before the user clicks on any other card, the shown cards should go back to their hidden state
- When two shown cards share the same number, they should stay shown until the end of the game.
- The game stops when all cards are shown

### Main Objective :
The game works accordingly to the rules above

### Additional objectives :
- Make it nice to look. Add css, animations, scene, etc.
- Add any scoring system (highest score, current score, lowest number of clicks to win the game yet)
- Make it multiplayer (usernames, localstorage, node-js server, webrtc...)
- Allow the user to select difficulty (the number of pairs of cards, between 4 and 20)
- Add a timer to complete the game
- Any comabination of this objectives, or any other objective you might find fun to implement

# What we will be looking for
This exercice is hard enough so it's probable you won't finish it in less than 2 hours.
After 2 hours *precisely*, you MUST commit and push your work.
You are free to keep working on it after that, to show what you are capable of with more time.

Beside the above objectives, we will look for :
- How organized are you folders and files
- How commented, clear and readable is your code
- How performant and are you React components : we are not looking for too-early-optimization, but when writing a more future-proof code doesn't cost you more, it should be done
- How do you do your state management
- How did you organized ? Have you pseudo-coded / made some initial specifications ? Maybe it's useful, maybe it's only going to make you loose time.
- How minded are you about your decision making and work ?
- What libraries and dependencies you choosed to use (if any)


### You are free to use google and other ressources however you see fit. But if you use chatGPT => Take care, we won't accept any mistake or unability to precisely explain what you used it for.

You **MUST** save links to any ressource you might have used

## Aftermath
We will debrief your work together, looking at it, discussing about your ressoures, choices, code quality, etc.