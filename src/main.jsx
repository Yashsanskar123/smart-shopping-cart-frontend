import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import { ThemeProvider } from "./context/ThemeContext"
import { CartProvider } from "./context/CartContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
</CartProvider>

)
