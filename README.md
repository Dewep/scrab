# Scrab

Scrabble FR

## Events

### Client:Connect `connect`

```json
{
  "deviceId": "..."
}
```

=> `Server:Connect`

### Server:Connect `connect`

```json
{
  "gameId": "..." // or null if no-game started for this device
}
```

### Client:Lobby `lobby`

```json
{
  "online": true,
  "players": ["Robert","Raymonde"],
  "duration": "1m",
  "dict": "OSD17"
}
```

=> `Server:Lobby`

### Server:Lobby `lobby`

```json
{
  "online": true,
  "players": ["Robert","Raymonde"],
  "remote": ["Sylvie"],
  "duration": "1m",
  "dict": "OSD17"
}
```

### Client:StartGame `start-game`

```json
{}
```

=> `Server:Game`
=> `Server:Message`

### Server:Game `game`

```json
{
  "gameId": "...",
  "players": [
    {
      "name": "Robert",
      "score": 220,
      "local": true,
      "letters": ["A", "B", "C", "D", "E", "F", "G"],
      "abandon": false
    },
    {
      "name": "Raymonde",
      "score": 180,
      "local": true,
      "letters": ["A", "B", "C", "D", "E", "F", "G"],
      "abandon": false
    },
    {
      "name": "Sylvie",
      "score": 150,
      "local": false, // remote player
      "letters": ["_", "_", "_", "_", "_", "_", "_"],
      "abandon": false
    }
  ],
  "currentPlayer": 0,
  "timeRemaining": 34, // seconds
  "lettersRemaining": 65,
  "board": [
    { "letter": "A", "x": 5, "y": 8, "player": 0 },
    { "letter": "_", "x": 6, "y": 8, "player": 0, "joker": "I" },
    { "letter": "R", "x": 7, "y": 8, "player": 0 },
    { "letter": "T", "x": 7, "y": 7, "player": 1, "tmp": true },
  ]
}
```

### Server:Message `message`

```json
{
  "gameId": "...",
  "error": true,
  "message": "...", // null if just a sound
  "sound": "start" // "start", "letter", "shuffle", ...
}
```

Examples: `C'est au tour de Robert`, `Le mot "TOTO" n'existe pas`, `Vous avez gagné 24 points`, `Raymonde remporte la partie !`

### Client:Letter `letter`

```json
{
  "gameId": "...",
  "letter": "I",
  "x": 7,
  "y": 9
}
```

=> `Server:Game`

### Client:Play `play`

```json
{
  "gameId": "...",
  "type": "validate", // "validate", "pass", "abandon"
  "letters": [2, 6] // letters to exchange, only if "pass"
}
```

=> `Server:Game`
=> `Server:Message`

### Client:Undo `undo`

```json
{
  "gameId": "...",
  "shuffle": true
}
```

=> `Server:Game`

## Rules

https://www.regles-de-jeux.com/regle-du-scrabble/

https://www.fisf.net/scrabble/decouverte-du-scrabble/r%C3%A8gles-du-jeu.html

https://fr.wikipedia.org/wiki/Scrabble

## IA

https://ericsink.com/downloads/faster-scrabble-gordon.pdf
