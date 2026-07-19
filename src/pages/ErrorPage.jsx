import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

function ErrorPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/">Return Home</Link>
      </main>
    </>
  )
}

export default ErrorPage
