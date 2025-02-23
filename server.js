const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const shipments = [
    {
      "id": 1,
      "date": "Feb 20, 2025",
      "vehicle": "AEJ-234-DG",
      "origin": "Ibadan",
      "destination": "Kano",
      "status": "In Transit"
    },
    {
      "id": 2,
      "date": "Feb 18, 2025",
      "vehicle": "KJA-876-LK",
      "origin": "Lagos",
      "destination": "Abuja",
      "status": "Delivered"
    },
    {
      "id": 3,
      "date": "Feb 15, 2025",
      "vehicle": "LND-453-TR",
      "origin": "Port Harcourt",
      "destination": "Kaduna",
      "status": "Pending"
    },
    {
      "id": 4,
      "date": "Feb 22, 2025",
      "vehicle": "ABJ-765-YH",
      "origin": "Abuja",
      "destination": "Enugu",
      "status": "In Transit"
    },
    {
      "id": 5,
      "date": "Feb 19, 2025",
      "vehicle": "KAN-223-PL",
      "origin": "Kano",
      "destination": "Ibadan",
      "status": "Delayed"
    },
    {
      "id": 6,
      "date": "Feb 21, 2025",
      "vehicle": "EPE-890-WX",
      "origin": "Lagos",
      "destination": "Port Harcourt",
      "status": "Delivered"
    },
    {
      "id": 7,
      "date": "Feb 17, 2025",
      "vehicle": "PHC-555-QT",
      "origin": "Port Harcourt",
      "destination": "Lagos",
      "status": "In Transit"
    },
    {
      "id": 8,
      "date": "Feb 23, 2025",
      "vehicle": "KAD-111-ER",
      "origin": "Kaduna",
      "destination": "Benin",
      "status": "Pending"
    },
    {
      "id": 9,
      "date": "Feb 16, 2025",
      "vehicle": "BEN-999-JH",
      "origin": "Benin",
      "destination": "Abuja",
      "status": "Delivered"
    },
    {
      "id": 10,
      "date": "Feb 25, 2025",
      "vehicle": "JOS-432-KM",
      "origin": "Jos",
      "destination": "Lagos",
      "status": "In Transit"
    },
    {
      "id": 11,
      "date": "Feb 14, 2025",
      "vehicle": "ENY-678-WQ",
      "origin": "Enugu",
      "destination": "Onitsha",
      "status": "Delivered"
    },
    {
      "id": 12,
      "date": "Feb 26, 2025",
      "vehicle": "OSH-321-LP",
      "origin": "Osogbo",
      "destination": "Ibadan",
      "status": "Pending"
    },
    {
      "id": 13,
      "date": "Feb 27, 2025",
      "vehicle": "AKR-654-YT",
      "origin": "Akure",
      "destination": "Abeokuta",
      "status": "In Transit"
    },
    {
      "id": 14,
      "date": "Feb 28, 2025",
      "vehicle": "ILR-987-BN",
      "origin": "Ilorin",
      "destination": "Lagos",
      "status": "Delivered"
    },
    {
      "id": 15,
      "date": "Feb 24, 2025",
      "vehicle": "ABK-765-QW",
      "origin": "Abeokuta",
      "destination": "Ibadan",
      "status": "Delayed"
    }
  ];

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

module.exports = app;