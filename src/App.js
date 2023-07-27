import {comments} from './commentData';
import Card from './Card';
import './App.css';

function App() {
  const cards = comments.map(comment => <Card commentObject={comment} />);
  
  return (
    <div className="App">
      {cards}
    </div>
  );
}

export default App;
