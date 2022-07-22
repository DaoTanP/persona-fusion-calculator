import './style.css';
import data from './data-video';
import Card from './components/Card';
import Navigator from './components/Navigator';

const gridStyle = {
  height: '100%',
  minHeight: '100%',
  position: 'relative',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateAreas: `'top-bar top-bar'
                      'nav-bar main-view'
                      'now-playing-bar now-playing-bar'`
}
const navBar = {
  gridArea: 'nav-bar'
}

function App() {
  return (
    <div style={gridStyle}>
      <Navigator style={navBar} />

      <div className="flex-container width-90 mar-auto gap-lg align-cross-center hidden">
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
    </div>
  );
}

export default App;
