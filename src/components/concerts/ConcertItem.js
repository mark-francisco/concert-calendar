function ConcertItem(props) {
  return (
    <li>
      {/* 
          // url={concert.url}
          // date={concert.date}
          // time={concert.time}
          // type={concert.type}
          // city={concert.city}
          // address={concert.address}
          // genre={concert.genre}
          // subgenre={concert.subgenre}
          // venue={concert.venue}
          // market={concert.market} */}
      <div>
        <p>{props.concert.id}</p>
        <h3>{props.concert.name}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <button>Add to Favorites</button>
      </div>
    </li>
  );
}

export default ConcertItem;
