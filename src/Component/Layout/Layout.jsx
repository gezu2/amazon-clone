
// import Footer from "../Footer/footer"
import Header from "../Header/Header"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div>
    <Header/>
   { children}
 {/* <Footer/> */}
    </div>
  )
}

export default Layout