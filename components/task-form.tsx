"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Task } from "@/app/page"
import { suggestTaskTitle } from "@/lib/gemini"

interface TaskFormProps {
  onAddTask: (task: Omit<Task, "id" | "createdAt" | "completed">) => void
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium")
  const [suggestingTitle, setSuggestingTitle] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    onAddTask({
      title,
      description,
      priority,
    })

    setTitle("")
    setDescription("")
    setPriority("medium")
  }

  const handleSuggestTitle = async () => {
    if (!description.trim()) return
    setSuggestingTitle(true)
    try {
      const suggested = await suggestTaskTitle(description)
      if (suggested) {
        setTitle(suggested)
      }
    } catch (error) {
      console.error("Error suggesting title:", error)
    } finally {
      setSuggestingTitle(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-card rounded-lg shadow-sm border border-border p-6 space-y-4"
    >
      <div>
        <label className="block text-sm font-medium mb-2">Task Title</label>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1"
          />
          {description && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleSuggestTitle}
              disabled={suggestingTitle}
              className="whitespace-nowrap bg-transparent"
            >
              {suggestingTitle ? "Suggesting..." : "Suggest"}
            </Button>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          placeholder="Add more details..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Priority</label>
        <div className="flex gap-2">
          {(["low", "medium", "high"] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPriority(p)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                priority === p ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Add Task
      </Button>
    </form>
  )
}
