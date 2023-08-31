//import Nav from '../components/Nav';

function Tools() {
    const jsonExample = {
        name: 'John Doe',
        age: 30,
        location: 'Example City',
      };

    return (
        <div id="App">
        {JSON.stringify(jsonExample, null, 2)}
        </div>
    )
}

export default Tools;