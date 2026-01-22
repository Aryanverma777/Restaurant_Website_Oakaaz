import fs from "fs";
import path from "path";

const feedbackFilePath = path.join(process.cwd(), "feedback.json");

// Ensure feedback.json exists
function ensureFeedbackFile() {
  if (!fs.existsSync(feedbackFilePath)) {
    fs.writeFileSync(feedbackFilePath, JSON.stringify([]));
  }
}

// GET - Retrieve all feedback
function getFeedback() {
  try {
    ensureFeedbackFile();
    const data = fs.readFileSync(feedbackFilePath, "utf8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Error reading feedback:", error);
    return [];
  }
}

// POST - Save new feedback
function saveFeedback(feedback) {
  try {
    ensureFeedbackFile();
    const feedbacks = getFeedback();
    feedbacks.push(feedback);
    fs.writeFileSync(feedbackFilePath, JSON.stringify(feedbacks, null, 2));
    return true;
  } catch (error) {
    console.error("Error saving feedback:", error);
    return false;
  }
}

export default function handler(req, res) {
  if (req.method === "GET") {
    const feedbacks = getFeedback();
    res.status(200).json(feedbacks);
  } else if (req.method === "POST") {
    const { name, email, rating, message, timestamp } = req.body;

    // Validate input
    if (!name || !email || !rating || !message) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const feedback = {
      id: Date.now(),
      name,
      email,
      rating: parseInt(rating),
      message,
      timestamp: timestamp || new Date().toLocaleString(),
    };

    if (saveFeedback(feedback)) {
      res.status(200).json({ success: true, feedback });
    } else {
      res.status(500).json({ error: "Failed to save feedback" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
