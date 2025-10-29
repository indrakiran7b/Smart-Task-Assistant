"use client"

import type { Task } from "@/app/page"
import { TaskCard } from "./task-card"

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: string) => void
  onUpdate: (id: string, updates: Partial<Task>) => void
  onDelete: (id: string) => void
}

export function TaskList({ tasks, onToggle, onUpdate, onDelete }: TaskListProps) {
  const activeTasks = tasks.filter((t) => !t.completed)
  const completedTasks = tasks.filter((t) => t.completed)

  return (
    <div className="space-y-6">
      {activeTasks.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3 text-foreground">Active Tasks</h2>
          <div className="space-y-2">
            {activeTasks.map((task) => (
              <TaskCard key={task.id} task={task} onToggle={onToggle} onUpdate={onUpdate} onDelete={onDelete} />
            ))}
          </div>
        </div>
      )}

      {completedTasks.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3 text-muted-foreground">Completed</h2>
          <div className="space-y-2 opacity-60">
            {completedTasks.map((task) => (
              <TaskCard key={task.id} task={task} onToggle={onToggle} onUpdate={onUpdate} onDelete={onDelete} />
            ))}
          </div>
        </div>
      )}

      {tasks.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-card rounded-lg border border-border">
          <div className="text-4xl mb-3">📝</div>
          <p className="text-muted-foreground font-medium">No tasks yet</p>
          <p className="text-sm text-muted-foreground mt-1">Create your first task to get started!</p>
        </div>
      )}
    </div>
  )
}
