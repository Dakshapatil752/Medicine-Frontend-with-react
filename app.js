const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));