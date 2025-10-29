"use client"

import type { Task } from "@/app/page"

interface TaskStatsProps {
  tasks: Task[]
}

export function TaskStats({ tasks }: TaskStatsProps) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter((t) => t.completed).length
  const activeTasks = totalTasks - completedTasks
  const highPriorityTasks = tasks.filter((t) => !t.completed && t.priority === "high").length

  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      <div className="bg-white dark:bg-card rounded-lg border border-border p-4">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Total Tasks</p>
        <p className="text-2xl font-bold text-foreground mt-2">{totalTasks}</p>
      </div>
      <div className="bg-white dark:bg-card rounded-lg border border-border p-4">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Active</p>
        <p className="text-2xl font-bold text-primary mt-2">{activeTasks}</p>
      </div>
      <div className="bg-white dark:bg-card rounded-lg border border-border p-4">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Completed</p>
        <p className="text-2xl font-bold text-accent mt-2">{completedTasks}</p>
      </div>
      <div className="bg-white dark:bg-card rounded-lg border border-border p-4">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Completion</p>
        <p className="text-2xl font-bold text-secondary mt-2">{completionRate}%</p>
      </div>
    </div>
  )
}
