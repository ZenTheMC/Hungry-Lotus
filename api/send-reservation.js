import { Reservation } from "./models/reservation.js";
import { dbConnection } from "./database/dbConnection.js";

export default async (req, res) => {
  await dbConnection(); // Ensures DB connection is available
  if (req.method === 'POST') {
    const { firstName, lastName, email, date, time, phone } = req.body;
    if (!firstName || !lastName || !email || !date || !time || !phone) {
      return res.status(400).json({ error: "Please fill out all fields." });
    }

    try {
      await Reservation.create({ firstName, lastName, email, date, time, phone });
      return res.status(201).json({ success: true, message: "Reservation made successfully." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
