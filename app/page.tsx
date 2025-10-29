"use client"

import { useState, useEffect } from "react"
import { TaskList } from "@/components/task-list"
import { TaskForm } from "@/components/task-form"
import AIInsights from "@/components/ai-insights"
import { Header } from "@/components/header"
import { TaskStats } from "@/components/task-stats"
import { TaskFilters } from "@/components/task-filters"

export interface Task {
  id: string
  title: string
  description: string
  priority: "low" | "medium" | "high"
  completed: boolean
  createdAt: Date
  dueDate?: Date
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [showAI, setShowAI] = useState(false)
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all")
  const [sortBy, setSortBy] = useState<"date" | "priority">("date")

  useEffect(() => {
    const saved = localStorage.getItem("tasks")
    if (saved) {
      setTasks(
        JSON.parse(saved).map((t: any) => ({
          ...t,
          createdAt: new Date(t.createdAt),
          dueDate: t.dueDate ? new Date(t.dueDate) : undefined,
        })),
      )
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task: Omit<Task, "id" | "createdAt" | "completed">) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date(),
      completed: false,
    }
    setTasks([newTask, ...tasks])
  }

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const toggleTask = (id: string) => {
    updateTask(id, { completed: !tasks.find((t) => t.id === id)?.completed })
  }

  const getFilteredAndSortedTasks = () => {
    let filtered = tasks

    if (filter === "active") {
      filtered = tasks.filter((t) => !t.completed)
    } else if (filter === "completed") {
      filtered = tasks.filter((t) => t.completed)
    }

    if (sortBy === "priority") {
      const priorityOrder = { high: 0, medium: 1, low: 2 }
      filtered.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    } else {
      filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    }

    return filtered
  }

  const displayTasks = getFilteredAndSortedTasks()

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <TaskStats tasks={tasks} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <TaskForm onAddTask={addTask} />
            <TaskFilters filter={filter} sortBy={sortBy} onFilterChange={setFilter} onSortChange={setSortBy} />
            <TaskList tasks={displayTasks} onToggle={toggleTask} onUpdate={updateTask} onDelete={deleteTask} />
          </div>
          <div className="lg:col-span-1">
            <AIInsights tasks={tasks} isOpen={showAI} onToggle={() => setShowAI(!showAI)} />
          </div>
        </div>
      </div>
    </main>
  )
}
