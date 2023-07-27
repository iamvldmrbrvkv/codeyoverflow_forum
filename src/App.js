import {comments} from './commentData';
import Card from './Card';
import './App.css';

function App() {
  const card = comments.map(comment => <Card commentObject={comment} />);
  
  return (
    <div className="App">
      {card}
    </div>
  );
}

export default App;
