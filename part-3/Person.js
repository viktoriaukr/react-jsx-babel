const Person = (props) => {
  let message;
  if (props.age >= 18) {
    message = "please go vote!";
  } else {
    message = "you must be 18";
  }
  let hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);
  return (
    <div>
      <p>Learn some information about this person</p>
      <p>Name: {props.name.slice(0, 6)}</p>
      <p>Age: {props.age}</p>
      <ul>
        Hobbies:
        {hobbies}
      </ul>
      <h3>{message}</h3>
    </div>
  );
};
