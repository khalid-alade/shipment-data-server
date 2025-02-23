const express = require("express");
const app = express();

// Mock shipment data
const shipments = [
  {
    id: 1,
    trackingNumber: "TN123456789",
    status: "Shipped",
    origin: "New York, USA",
    destination: "Los Angeles, USA",
    estimatedDelivery: "2023-10-25",
  },
  {
    id: 2,
    trackingNumber: "TN987654321",
    status: "In Transit",
    origin: "Chicago, USA",
    destination: "Miami, USA",
    estimatedDelivery: "2023-10-28",
  },
  {
    id: 3,
    trackingNumber: "TN456789123",
    status: "Delivered",
    origin: "San Francisco, USA",
    destination: "Seattle, USA",
    estimatedDelivery: "2023-10-20",
  },
];

// Routes
app.get("/api/shipments", (req, res) => {
  res.json(shipments);
});

app.get("/api/shipments/:id", (req, res) => {
  const shipmentId = parseInt(req.params.id);
  const shipment = shipments.find((s) => s.id === shipmentId);

  if (shipment) {
    res.json(shipment);
  } else {
    res.status(404).json({ message: "Shipment not found" });
  }
});

// Export the Express app as a serverless function
module.exports = app;