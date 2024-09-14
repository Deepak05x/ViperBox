import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import("../components/Navbar"))

const Home = () => {
  return (
    <main>
        <Navbar /> 
    </main>
  )
}

export default Home
