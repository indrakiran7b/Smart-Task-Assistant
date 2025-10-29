"use client";

import { useState } from "react";
import { generateInsights } from "@/lib/gemini";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AIInsights({ tasks }: { tasks: any[] }) {
  const [insights, setInsights] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleGenerateInsights = async () => {
    setLoading(true);
    const result = await generateInsights(tasks);
    setInsights(result);
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <CardHeader className="flex justify-between items-center mb-4">
        <CardTitle className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          🤖 AI Insights
        </CardTitle>
        <Button
          onClick={handleGenerateInsights}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
        >
          {loading ? "Analyzing..." : "Generate Insights"}
        </Button>
      </CardHeader>

      <CardContent>
        {insights ? (
          <div className="bg-gray-50 rounded-xl p-4 max-h-[550px] overflow-y-auto prose prose-sm prose-blue">
            {/* Collapse long text into sections by heading */}
            {insights.split(/##\s+/).map((section, idx) => {
              if (idx === 0) return null; // Skip intro text before first heading
              const [title, ...content] = section.split("\n");
              return (
                <details key={idx} className="my-2 border-b border-gray-200 pb-2">
                  <summary className="cursor-pointer font-semibold text-gray-800">
                    {title.trim()}
                  </summary>
                  <div className="mt-2">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {content.join("\n")}
                    </ReactMarkdown>
                  </div>
                </details>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">
            Click "Generate Insights" to get AI-powered task analysis.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
