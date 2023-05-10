import Feed from "@components/Feed"


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center"> 
            Discover & Share
            {/*<br className="max-md:hidden"/>*/}
            <br />
            <span className="blue_gradient text-center ">A Place to Share You Ideas</span>
        </h1>
        <p className="desc text-center">
            With great power comes great responsabilities.
        </p>


        <Feed/>
    </section>
  )
}

export default Home