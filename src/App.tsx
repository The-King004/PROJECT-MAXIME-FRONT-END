import { ThemeProvider } from "@/components/Tools/Theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="App">
        <h1>Vite UI</h1>
        <button>Hello Vite UI!</button>
      </div>
    </ThemeProvider>
  )
}

export default App
