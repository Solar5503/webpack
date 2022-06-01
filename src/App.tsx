import mushroom from './assets/saxon.jpg';
const App = () => {
  const x: number = 5;
  return (
    <div>
      React App with TS! {x}
      <img src={mushroom} alt="Mushroom" />
    </div>
  );
};

export default App;
