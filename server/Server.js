// Required packages
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// ** Models **

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// Chef Schema
const chefSchema = new mongoose.Schema({
    name: String,
    availability: [{
        date: String,
        times: [String]
    }]
});
const Chef = mongoose.model("Chef", chefSchema);

// Booking Schema
const bookingSchema = new mongoose.Schema({
    date: String,
    time: String,
    diners: Number,
});
const Booking = mongoose.model("Booking", bookingSchema);

// Order Schema
const orderSchema = new mongoose.Schema({
    customer: String,
    dish: String,
    status: String,
    type: String, // "party" or "one-time"
});
const Order = mongoose.model("Order", orderSchema);

// ** Routes **

// Signup Route
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// Login Route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user: { name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// Get available chefs for a selected date and time
app.post('/api/available-chefs', async (req, res) => {
  try {
    const { date, time } = req.body;
    const availableChefs = await Chef.find({
      "availability.date": date,
      "availability.times": time
    });
    res.json({ availableChefs });
  } catch (error) {
    console.error("Error fetching chefs:", error);  // Log the error
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


// Book a table
app.post("/api/book-table", async (req, res) => {
    try {
        const { date, time, diners } = req.body;

        const newBooking = new Booking({
            date,
            time,
            diners,
        });

        await newBooking.save();
        res.status(201).json({ message: "Booking successful", booking: newBooking });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Get All Orders
app.get("/orders", async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders" });
    }
});

// Create a New Order
app.post("/orders", async (req, res) => {
    const { customer, dish, status, type } = req.body;

    try {
        const newOrder = new Order({ customer, dish, status, type });
        await newOrder.save();
        res.status(201).json({ message: "Order created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating order" });
    }
});

// ** Seed Database (Optional) ** 
const seedOrders = [
    { customer: "John Doe", dish: "Spaghetti Carbonara", status: "Pending", type: "one-time" },
    { customer: "Emma Smith", dish: "Margherita Pizza", status: "In Progress", type: "party" },
    { customer: "Liam Brown", dish: "Caesar Salad", status: "Completed", type: "one-time" }
];

const seedUsers = [
    { name: "John Doe", email: "john@example.com", password: "123456" },
    { name: "Emma Smith", email: "emma@example.com", password: "654321" }
];

async function seedDatabase() {
    try {
        await Order.insertMany(seedOrders);
        console.log("Orders successfully inserted!");

        await User.insertMany(seedUsers);
        console.log("Users successfully inserted!");

        mongoose.connection.close();
    } catch (err) {
        console.error("Error inserting data:", err);
        mongoose.connection.close();
    }
}

// Uncomment to seed database when needed
// seedDatabase();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
