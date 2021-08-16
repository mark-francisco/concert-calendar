import ConcertItem from "./ConcertItem";

function ConcertList(props) {
  return (
    <ul>
      {props.concerts.map((concert) => (
        <ConcertItem key={concert.id} concert={concert} />
      ))}
    </ul>
  );
}

export default ConcertList;
