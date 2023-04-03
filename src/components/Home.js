const Home = () => {
  const lineheight = {
    wordSpacing: '0.2rem',
    fontSize: '18px',
    fontWeight: '500',
    fontFamily: "'Courier New', Courier, monospace",
  };
  return (
    <div className="home-wrapper">
      <h2 style={{ fontWeight: '700' }}>
        Welcome to
        <span style={{ color: 'black', paddingLeft: '5px' }}> our </span>
        page!
      </h2>
      <p style={lineheight}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Eos quod sit quos corporis laboriosam cupiditate omnis dignissimos,
        explicabo, voluptatum similique laudantium praesentium tempore.
        Recusandae culpa eos eius, sed ab quibusdam.
      </p>
      <p style={lineheight}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Eos quod sit quos corporis laboriosam cupiditate omnis dignissimos,
        explicabo, voluptatum similique laudantium praesentium tempore.
        Recusandae culpa eos eius, sed ab quibusdam.
      </p>
    </div>
  );
};

export default Home;
