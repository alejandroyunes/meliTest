import { Outlet } from "react-router-dom"
import SearchBar from "./components/searchBar/Index"

export default function Layout() {
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  )
}
