// Create web server
// 1. Load express module
// 2. Create web server
// 3. Start server
// 4. Create route
// 5. Create function for route
// 6. Start server
// 7. Test in browser

// 1. Load express module
const express = require('express');

// 2. Create web server
const server = express();

// 4. Create route
// 5. Create function for route
server.get('/', (req, res) => {
    res.send(`
        <form method="POST">
            <input name="username" type="text">
            <button>Submit</button>
        </form>
    `);
});

// 6. Start server
server.listen(3000, () => {
    console.log('Listening on port 3000');
});

// 7. Test in browser
// http://localhost:3000/