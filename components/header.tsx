export function Header() {
  return (
    <header className="bg-white dark:bg-card border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">Smart Task Assistant</h1>
            <p className="text-muted-foreground mt-1">AI-powered task management</p>
          </div>
          <div className="text-right">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">Powered by Gemini AI</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
