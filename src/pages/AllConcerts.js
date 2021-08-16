import { useState, useEffect } from "react";
import ConcertList from "../components/concerts/ConcertList";

function AllConcertsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedConcerts, setLoadedConcerts] = useState([]);

  useEffect(() => {
    const concerts = [
      {
        id: "1k18vbasGAuYxGa",
        name: "kacey musgraves at riviera theatre",
        url: "https://www.ticketweb.com/event/bluegrass-brunch-beat-kitchen-tickets/10291225?REFERRAL_ID=tmfeed",
        date: "2021-07-24",
        time: "11:00:00",
        type: "concert",
        city: "Chicago",
        address: "2100 W Belmont Ave",
        genre: "Country",
        subgenre: "Pop",
        venue: "BEAT KITCHEN",
        market: "Chicagoland and Northern Il",
      },
      {
        id: "KovZpZAEAIlA",
        name: "Bad Bunny Chicago Tour",
        url: "https://concerts.livenation.com/parkwhiz-house-of-blues-chicago-chicago-illinois-08-18-2021/event/04005AA57E9010FF",
        date: "2021-08-18",
        time: "19:00:00",
        type: "event",
        city: "Chicago",
        address: "329 N. Dearborn St.",
        genre: "Latin",
        subgenre: "Latin",
        venue: "House of Blues Chicago",
        market: "Chicagoland and Northern Il",
      },
    ];

    setIsLoading(false);
    setLoadedConcerts(concerts);
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Concerts:</h1>
      <ConcertList concerts={loadedConcerts} />
    </section>
  );
}

export default AllConcertsPage;
