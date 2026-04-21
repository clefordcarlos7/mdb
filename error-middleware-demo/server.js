const express = require("express");
const app = express();

// JSON parser
app.use(express.json());

const PORT = 5000;

// ===== ROUTES =====

// Success route
app.get("/success", (req, res) => {
    res.json({
        success: true,
        message: "Request successful"
    });
});

// Error route
app.get("/error", (req, res) => {
    throw new Error("Manual error triggered");
});

// Custom error route
app.get("/custom-error", (req, res) => {
    const error = new Error("This is a custom error");
    error.statusCode = 400;
    throw error;
});


// ===== 404 HANDLER (PUT HERE) =====
app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.statusCode = 404;
    next(error);
});


// ===== ERROR MIDDLEWARE (LAST) =====
const errorMiddleware = require("./middleware/errorMiddleware");
app.use(errorMiddleware);


// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});