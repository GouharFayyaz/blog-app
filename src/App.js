import Screen from "./screen";
// import Blogpost from "./blogs/blogPost";
import Nav from "./nav";
import Footer from "./footer";
function App() {
  return (
    
     <div className='max-w-[100rem] mx-auto shadow-2xl  min-h-[100vh] box-border    flex flex-grow flex-col  ' 
      style={{
        backgroundImage: ` linear-gradient(212deg, #97cd7f 0%, #78d8e4 82%
)` }}>
        <Nav/>
        <Screen />
        {/* <Blogpost/> */}
        <Footer/>
      </div>
    
  );
}

export default App;
