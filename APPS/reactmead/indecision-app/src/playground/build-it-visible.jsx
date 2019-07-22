let visibility = false;
const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  let jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show Details'}
      </button>
      <h2>{visibility ? 'Here are the details' : ''}</h2>
    </div>
  );

  ReactDOM.render(jsx, appRoot);
};

const appRoot = document.getElementById('app');

render();
