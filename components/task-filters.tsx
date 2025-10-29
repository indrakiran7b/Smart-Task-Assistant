"use client"

import { Button } from "@/components/ui/button"

interface TaskFiltersProps {
  filter: "all" | "active" | "completed"
  sortBy: "date" | "priority"
  onFilterChange: (filter: "all" | "active" | "completed") => void
  onSortChange: (sort: "date" | "priority") => void
}

export function TaskFilters({ filter, sortBy, onFilterChange, onSortChange }: TaskFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <div className="flex gap-2">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("all")}
          className={filter === "all" ? "bg-primary text-primary-foreground" : ""}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("active")}
          className={filter === "active" ? "bg-primary text-primary-foreground" : ""}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("completed")}
          className={filter === "completed" ? "bg-primary text-primary-foreground" : ""}
        >
          Completed
        </Button>
      </div>

      <div className="flex gap-2 ml-auto">
        <Button
          variant={sortBy === "date" ? "default" : "outline"}
          size="sm"
          onClick={() => onSortChange("date")}
          className={sortBy === "date" ? "bg-secondary text-secondary-foreground" : ""}
        >
          By Date
        </Button>
        <Button
          variant={sortBy === "priority" ? "default" : "outline"}
          size="sm"
          onClick={() => onSortChange("priority")}
          className={sortBy === "priority" ? "bg-secondary text-secondary-foreground" : ""}
        >
          By Priority
        </Button>
      </div>
    </div>
  )
}
