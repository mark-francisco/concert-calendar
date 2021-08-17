function ConcertItem(props) {
  return (
    <li>
      <div>
        <p>ID: {props.concert.id}</p>
        <h3>Name: {props.concert.name}</h3>
        <p>URL: {props.concert.url}</p>
        <p>Date: {props.concert.date}</p>
        <p>Time: {props.concert.time}</p>
        <p>Type: {props.concert.type}</p>
        <p>City: {props.concert.city}</p>
        <p>Address: {props.concert.address}</p>
        <p>Genre: {props.concert.genre}</p>
        <p>Subgenre: {props.concert.subgenre}</p>
        <p>Venue: {props.concert.venue}</p>
        <p>Market: {props.concert.market}</p>
      </div>
      <div>
        <button>More Info</button>
        <button>Add to Favorites</button>
      </div>
    </li>
  );
}

export default ConcertItem;
