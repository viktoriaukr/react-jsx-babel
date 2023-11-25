const App = () => {
  return (
    <div>
      <Tweet
        name="Nikol"
        username="nikoleta"
        date={new Date().toDateString()}
        message="I love to read books."
      />
      <Tweet
        name="Garriet"
        username="garird"
        date={new Date().toDateString()}
        message="I love to make YouTube videos."
      />
      <Tweet
        name="Carolina"
        username="carolina"
        date={new Date().toDateString()}
        message="I love to travel."
      />
    </div>
  );
};
