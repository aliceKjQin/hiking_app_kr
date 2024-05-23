import Hero from '../components/Hero';
import TrailListings from '../components/TrailListings';
import ViewAllTrails from '../components/ViewAllTrails';
import HomeCards from '../components/HomeCards';

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        {/* isHome prop is used to determine how many trails to how on homepage */}
        <TrailListings isHome={true} />
        <ViewAllTrails />   
    </>
  )
}

export default HomePage