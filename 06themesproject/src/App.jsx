import { useEffect } from "react";
import { ThemeProvider } from "./context/theme";

function App() {
  // const [count, setCount] = useState(0)

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themebtn */}
          </div>

          <div className="w-full max-w-sm mx-auto">{/* card */}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
