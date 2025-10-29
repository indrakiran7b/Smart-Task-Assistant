import { GoogleGenerativeAI } from "@google/generative-ai";
import type { Task } from "@/app/page";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Use the latest multimodal model
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

// 🔹 Helper function for safe text extraction
async function getTextResponse(prompt: string): Promise<string> {
  const result = await model.generateContent(prompt);
  return result.response.text().trim();
}

// ✅ Generate overall insights
export async function generateInsights(tasks: Task[]): Promise<string> {
  try {
    const prompt = `
      You are an AI productivity assistant. Analyze these tasks and give detailed, structured insights:
      - Identify main themes or goals
      - Suggest areas of improvement
      - Highlight high-priority tasks

      Tasks:
      ${tasks
        .map(
          (t) =>
            `• Title: ${t.title}\n  Description: ${t.description}\n  Priority: ${t.priority}`
        )
        .join("\n")}
    `;
    return await getTextResponse(prompt);
  } catch (error: any) {
    console.error("Gemini generateInsights Error:", error);
    return "⚠️ Failed to generate insights.";
  }
}

// ✅ Categorize tasks logically
export async function categorizeTasks(
  tasks: Task[]
): Promise<Record<string, string[]>> {
  try {
    const prompt = `
      Categorize these tasks into logical groups like "Work", "Personal", "Urgent", etc.
      Return valid JSON ONLY in this format:
      {
        "CategoryName": ["Task 1", "Task 2"],
        "AnotherCategory": ["Task 3"]
      }

      Tasks: ${tasks.map((t) => t.title).join(", ")}
    `;
    const result = await getTextResponse(prompt);

    // Clean and parse the model output safely
    const cleanText = result.replace(/```json|```/g, "").trim();
    return JSON.parse(cleanText);
  } catch (error: any) {
    console.error("Gemini categorizeTasks Error:", error);
    return { Error: ["Failed to categorize tasks."] };
  }
}

// ✅ Suggest better or clearer task titles
export async function suggestTaskTitle(description: string): Promise<string> {
  try {
    const prompt = `
      Suggest a short, clear, and professional title for this task description:
      "${description}"
    `;
    return await getTextResponse(prompt);
  } catch (error: any) {
    console.error("Gemini suggestTaskTitle Error:", error);
    return "Untitled Task";
  }
}

// ✅ Estimate how long a task might take
export async function estimateTaskDuration(task: Task): Promise<string> {
  try {
    const prompt = `
      Estimate the realistic time to complete this task:
      Title: ${task.title}
      Description: ${task.description}
      Priority: ${task.priority}

      Respond briefly like "30 minutes", "2 hours", or "3 days".
    `;
    return await getTextResponse(prompt);
  } catch (error: any) {
    console.error("Gemini estimateTaskDuration Error:", error);
    return "Unknown duration";
  }
}
