const express = require("express");
const cors = require("cors");
const http = require("http");
const WebSocket = require("ws");

const app = express();
app.use(cors());

// Create an HTTP server
const server = http.createServer(app);

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

const shipments = [
    {
        "id": 1,
        "date": "Feb 20, 2025",
        "vehicle": "JCB-234-DG",
        "origin": "Ibadan",
        "destination": "Kano",
        "status": "In Transit"
    },
    {
        "id": 2,
        "date": "Feb 18, 2025",
        "vehicle": "LAG-876-LK",
        "origin": "Lagos",
        "destination": "Abuja",
        "status": "Delivered"
    },
    {
        "id": 3,
        "date": "Feb 15, 2025",
        "vehicle": "PHC-453-TR",
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
        "vehicle": "LAG-890-WX",
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
        "vehicle": "ENU-678-WQ",
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
        "vehicle": "AKU-654-YT",
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
    },
    {
        "id": 16,
        "date": "Feb 13, 2025",
        "vehicle": "LAG-123-PL",
        "origin": "Lagos",
        "destination": "Kaduna",
        "status": "In Transit"
    },
    {
        "id": 17,
        "date": "Feb 21, 2025",
        "vehicle": "KAN-555-ER",
        "origin": "Kano",
        "destination": "Osogbo",
        "status": "Delivered"
    },
    {
        "id": 18,
        "date": "Feb 20, 2025",
        "vehicle": "JOS-777-WQ",
        "origin": "Jos",
        "destination": "Ilorin",
        "status": "Pending"
    },
    {
        "id": 19,
        "date": "Feb 22, 2025",
        "vehicle": "ABJ-999-LP",
        "origin": "Abuja",
        "destination": "Abeokuta",
        "status": "Delayed"
    },
    {
        "id": 20,
        "date": "Feb 19, 2025",
        "vehicle": "BEN-432-KM",
        "origin": "Benin",
        "destination": "Kaduna",
        "status": "In Transit"
    },
    {
        "id": 21,
        "date": "Feb 23, 2025",
        "vehicle": "AKU-876-YT",
        "origin": "Akure",
        "destination": "Lagos",
        "status": "Delivered"
    },
    {
        "id": 22,
        "date": "Feb 27, 2025",
        "vehicle": "ENU-111-QT",
        "origin": "Enugu",
        "destination": "Port Harcourt",
        "status": "Pending"
    },
    {
        "id": 23,
        "date": "Feb 24, 2025",
        "vehicle": "OSH-654-TR",
        "origin": "Osogbo",
        "destination": "Ilorin",
        "status": "Delayed"
    },
    {
        "id": 24,
        "date": "Feb 16, 2025",
        "vehicle": "KAD-321-DG",
        "origin": "Kaduna",
        "destination": "Ibadan",
        "status": "Delivered"
    },
    {
        "id": 25,
        "date": "Feb 15, 2025",
        "vehicle": "JOS-765-PL",
        "origin": "Jos",
        "destination": "Enugu",
        "status": "Pending"
    },
    {
        "id": 26,
        "date": "Feb 18, 2025",
        "vehicle": "IBD-123-KM",
        "origin": "Ibadan",
        "destination": "Abuja",
        "status": "Delayed"
    },
    {
        "id": 27,
        "date": "Feb 26, 2025",
        "vehicle": "PHC-890-LP",
        "origin": "Port Harcourt",
        "destination": "Kano",
        "status": "In Transit"
    },
    {
        "id": 28,
        "date": "Feb 28, 2025",
        "vehicle": "BEN-555-YH",
        "origin": "Benin",
        "destination": "Osogbo",
        "status": "Delivered"
    },
    {
        "id": 29,
        "date": "Feb 14, 2025",
        "vehicle": "KAD-999-QT",
        "origin": "Kaduna",
        "destination": "Abeokuta",
        "status": "Pending"
    },
    {
        "id": 30,
        "date": "Feb 17, 2025",
        "vehicle": "OSH-777-WQ",
        "origin": "Osogbo",
        "destination": "Ibadan",
        "status": "Delayed"
    }
];

// WebSocket connection handler
wss.on("connection", (ws) => {
    console.log("New WebSocket connection");

    // Send initial shipments data to the client
    ws.send(JSON.stringify({
        type: "INITIAL_DATA", data: shipments

    }));

    // Handle WebSocket close
    ws.on("close", () => {
        console.log("WebSocket connection closed");
    });
});

// REST API endpoints
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

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;






// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());

// const shipments = [
//   {
//       "id": 1,
//       "date": "Feb 20, 2025",
//       "vehicle": "IBA-234-DG",
//       "origin": "Ibadan",
//       "destination": "Kano",
//       "status": "In Transit"
//   },
//   {
//       "id": 2,
//       "date": "Feb 18, 2025",
//       "vehicle": "LAG-876-LK",
//       "origin": "Lagos",
//       "destination": "Abuja",
//       "status": "Delivered"
//   },
//   {
//       "id": 3,
//       "date": "Feb 15, 2025",
//       "vehicle": "PHC-453-TR",
//       "origin": "Port Harcourt",
//       "destination": "Kaduna",
//       "status": "Pending"
//   },
//   {
//       "id": 4,
//       "date": "Feb 22, 2025",
//       "vehicle": "ABJ-765-YH",
//       "origin": "Abuja",
//       "destination": "Enugu",
//       "status": "In Transit"
//   },
//   {
//       "id": 5,
//       "date": "Feb 19, 2025",
//       "vehicle": "KAN-223-PL",
//       "origin": "Kano",
//       "destination": "Ibadan",
//       "status": "Delayed"
//   },
//   {
//       "id": 6,
//       "date": "Feb 21, 2025",
//       "vehicle": "LAG-890-WX",
//       "origin": "Lagos",
//       "destination": "Port Harcourt",
//       "status": "Delivered"
//   },
//   {
//       "id": 7,
//       "date": "Feb 17, 2025",
//       "vehicle": "PHC-555-QT",
//       "origin": "Port Harcourt",
//       "destination": "Lagos",
//       "status": "In Transit"
//   },
//   {
//       "id": 8,
//       "date": "Feb 23, 2025",
//       "vehicle": "KAD-111-ER",
//       "origin": "Kaduna",
//       "destination": "Benin",
//       "status": "Pending"
//   },
//   {
//       "id": 9,
//       "date": "Feb 16, 2025",
//       "vehicle": "BEN-999-JH",
//       "origin": "Benin",
//       "destination": "Abuja",
//       "status": "Delivered"
//   },
//   {
//       "id": 10,
//       "date": "Feb 25, 2025",
//       "vehicle": "JOS-432-KM",
//       "origin": "Jos",
//       "destination": "Lagos",
//       "status": "In Transit"
//   },
//   {
//       "id": 11,
//       "date": "Feb 14, 2025",
//       "vehicle": "ENU-678-WQ",
//       "origin": "Enugu",
//       "destination": "Onitsha",
//       "status": "Delivered"
//   },
//   {
//       "id": 12,
//       "date": "Feb 26, 2025",
//       "vehicle": "OSH-321-LP",
//       "origin": "Osogbo",
//       "destination": "Ibadan",
//       "status": "Pending"
//   },
//   {
//       "id": 13,
//       "date": "Feb 27, 2025",
//       "vehicle": "AKU-654-YT",
//       "origin": "Akure",
//       "destination": "Abeokuta",
//       "status": "In Transit"
//   },
//   {
//       "id": 14,
//       "date": "Feb 28, 2025",
//       "vehicle": "ILR-987-BN",
//       "origin": "Ilorin",
//       "destination": "Lagos",
//       "status": "Delivered"
//   },
//   {
//       "id": 15,
//       "date": "Feb 24, 2025",
//       "vehicle": "ABK-765-QW",
//       "origin": "Abeokuta",
//       "destination": "Ibadan",
//       "status": "Delayed"
//   },
//   {
//       "id": 16,
//       "date": "Feb 13, 2025",
//       "vehicle": "LAG-123-PL",
//       "origin": "Lagos",
//       "destination": "Kaduna",
//       "status": "In Transit"
//   },
//   {
//       "id": 17,
//       "date": "Feb 21, 2025",
//       "vehicle": "KAN-555-ER",
//       "origin": "Kano",
//       "destination": "Osogbo",
//       "status": "Delivered"
//   },
//   {
//       "id": 18,
//       "date": "Feb 20, 2025",
//       "vehicle": "JOS-777-WQ",
//       "origin": "Jos",
//       "destination": "Ilorin",
//       "status": "Pending"
//   },
//   {
//       "id": 19,
//       "date": "Feb 22, 2025",
//       "vehicle": "ABJ-999-LP",
//       "origin": "Abuja",
//       "destination": "Abeokuta",
//       "status": "Delayed"
//   },
//   {
//       "id": 20,
//       "date": "Feb 19, 2025",
//       "vehicle": "BEN-432-KM",
//       "origin": "Benin",
//       "destination": "Kaduna",
//       "status": "In Transit"
//   },
//   {
//       "id": 21,
//       "date": "Feb 23, 2025",
//       "vehicle": "AKU-876-YT",
//       "origin": "Akure",
//       "destination": "Lagos",
//       "status": "Delivered"
//   },
//   {
//       "id": 22,
//       "date": "Feb 27, 2025",
//       "vehicle": "ENU-111-QT",
//       "origin": "Enugu",
//       "destination": "Port Harcourt",
//       "status": "Pending"
//   },
//   {
//       "id": 23,
//       "date": "Feb 24, 2025",
//       "vehicle": "OSH-654-TR",
//       "origin": "Osogbo",
//       "destination": "Ilorin",
//       "status": "Delayed"
//   },
//   {
//       "id": 24,
//       "date": "Feb 16, 2025",
//       "vehicle": "KAD-321-DG",
//       "origin": "Kaduna",
//       "destination": "Ibadan",
//       "status": "Delivered"
//   },
//   {
//       "id": 25,
//       "date": "Feb 15, 2025",
//       "vehicle": "JOS-765-PL",
//       "origin": "Jos",
//       "destination": "Enugu",
//       "status": "Pending"
//   },
//   {
//       "id": 26,
//       "date": "Feb 18, 2025",
//       "vehicle": "IBD-123-KM",
//       "origin": "Ibadan",
//       "destination": "Abuja",
//       "status": "Delayed"
//   },
//   {
//       "id": 27,
//       "date": "Feb 26, 2025",
//       "vehicle": "PHC-890-LP",
//       "origin": "Port Harcourt",
//       "destination": "Kano",
//       "status": "In Transit"
//   },
//   {
//       "id": 28,
//       "date": "Feb 28, 2025",
//       "vehicle": "BEN-555-YH",
//       "origin": "Benin",
//       "destination": "Osogbo",
//       "status": "Delivered"
//   },
//   {
//       "id": 29,
//       "date": "Feb 14, 2025",
//       "vehicle": "KAD-999-QT",
//       "origin": "Kaduna",
//       "destination": "Abeokuta",
//       "status": "Pending"
//   },
//   {
//       "id": 30,
//       "date": "Feb 17, 2025",
//       "vehicle": "OSH-777-WQ",
//       "origin": "Osogbo",
//       "destination": "Ibadan",
//       "status": "Delayed"
//   }
// ];

// app.get("/api/shipments", (req, res) => {
//   res.json(shipments);
// });

// app.get("/api/shipments/:id", (req, res) => {
//   const shipmentId = parseInt(req.params.id);
//   const shipment = shipments.find((s) => s.id === shipmentId);

//   if (shipment) {
//     res.json(shipment);
//   } else {
//     res.status(404).json({ message: "Shipment not found" });
//   }
// });

// module.exports = app;