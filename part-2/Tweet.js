const Tweet = (props) => {
  return (
    <div>
      <hr />
      <h3>{props.name}</h3>
      <h3>{props.username}</h3>
      <h3>{props.date}</h3>
      <h3>{props.message}</h3>
      <hr />
    </div>
  );
};
