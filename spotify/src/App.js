import './style.css';
import data from './data-video';
import Card from './components/Card';

function App() {
  return (
    <div className="flex-container width-90 mar-auto gap-lg align-cross-center">
      {
        data.map(card =>
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            viewCount={card.yt_view_count}
            likeCount={card.yt_like_count}
            video={card.video}
          />)
      }
    </div>
  );
}

export default App;
