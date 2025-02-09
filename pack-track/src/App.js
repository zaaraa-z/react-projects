const initialItems = [
  { id: 1, desc: 'medicine', quantity: 10, packed: false },
  { id: 2, desc: 'jacket', quantity: 2, packed: true },
  { id: 2, desc: 'jacket', quantity: 2, packed: true },
  { id: 2, desc: 'jacket', quantity: 2, packed: false },
  { id: 2, desc: 'jacket', quantity: 2, packed: false },
  { id: 2, desc: 'jacket', quantity: 2, packed: true },
  { id: 2, desc: 'jacket', quantity: 2, packed: false },
  { id: 2, desc: 'jacket', quantity: 2, packed: false },
  { id: 2, desc: 'jacket', quantity: 2, packed: true },
  { id: 2, desc: 'jacket', quantity: 2, packed: true },
];

export default function App() {
  return (
    <div className='app'>
      <Banner />
      <Form />
      <List />
      <Status />
    </div>
  );
}

function Banner() {
  return (
    <div className='banner-container'>
      <h1>Pack Track</h1>
      <h2>
        😒 Remember them asking 1000 times if you're sure you've packed
        everything?
        <br />
        No more needed!
      </h2>
    </div>
  );
}

function Form() {
  function handleAdd(e) {
    e.preventDefault();
  }

  return (
    <div className='form-container'>
      <h4>So, what we need for our trip?</h4>
      <form onSubmit={handleAdd}>
        <select>
          {/* create an array of number from 1 to 20, and then map through them: */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type='text' placeholder='Enter the item ...' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

function List() {
  return (
    <div className='list-container'>
      <ul>
        {initialItems.map((i) => (
          <ListItem item={i} key={i.id} />
        ))}
      </ul>
    </div>
  );
}

function Status() {
  return (
    <footer className='status-container'>
      Z% packecd (You have packed X items - Y items more to go!)
    </footer>
  );
}

function ListItem({ item }) {
  return (
    <li>
      <input type='checkbox' />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.desc}
      </span>
      <button title='Remove item'>X</button>
    </li>
  );
}
