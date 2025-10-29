"use client"

import type { Task } from "@/app/page"
import { Button } from "@/components/ui/button"

interface TaskCardProps {
  task: Task
  onToggle: (id: string) => void
  onUpdate: (id: string, updates: Partial<Task>) => void
  onDelete: (id: string) => void
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  const priorityColors = {
    low: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  }

  const priorityIcons = {
    low: "🔵",
    medium: "🟡",
    high: "🔴",
  }

  return (
    <div className="bg-white dark:bg-card rounded-lg border border-border p-4 flex items-start gap-4 hover:shadow-md transition-shadow">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="mt-1 w-5 h-5 rounded border-border cursor-pointer accent-primary"
        aria-label={`Mark ${task.title} as ${task.completed ? "incomplete" : "complete"}`}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3
              className={`font-semibold ${task.completed ? "line-through text-muted-foreground" : "text-foreground"}`}
            >
              {task.title}
            </h3>
            {task.description && <p className="text-sm text-muted-foreground mt-1">{task.description}</p>}
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-lg">{priorityIcons[task.priority]}</span>
            <span className={`text-xs font-medium px-2 py-1 rounded ${priorityColors[task.priority]}`}>
              {task.priority}
            </span>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onDelete(task.id)}
        className="text-destructive hover:bg-destructive/10"
        aria-label={`Delete ${task.title}`}
      >
        ✕
      </Button>
    </div>
  )
}
