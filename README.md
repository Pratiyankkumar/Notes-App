# Notes App

Welcome to the **Notes App**, a simple command-line application built using Node.js. This app allows you to manage your notes efficiently through the terminal. 

## Features

- **Add Notes**: Create new notes with a title and body.
- **Remove Notes**: Delete existing notes by title.
- **List Notes**: View all your notes at once.
- **Read Notes**: View the details of a specific note by title.

## Installation

To get started with the Notes App, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pratiyankkumar/Notes-App.git

2. **Navigate to the project directory:**
    ```bash
    cd Notes-App/notes-app

3. **Install the dependencies**
    ```bash
    npm install
## Usage
Use the following commands to interact with the Notes App:

- Add a note:
   ```bash
   node app.js add --title="Your Note Title" --body="Your Note Body"

- Remove a note:
   ```bash
   node app.js remove --title="Your Note Title"

- Read a note:
   ```bash
   node app.js list
   
- Read a note:
   ```bash
   node app.js read --title="Your Note Title"

## Built With

- Node.js - JavaScript runtime built on Chrome's V8 JavaScript engine.
- Yargs - Used for command-line arguement parsing
- Chalk - USed for styling the command-line output

## Contributing
Contributions are welcome! If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
