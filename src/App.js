import './css/style.css';
import SpotifyCard from './components/SpotifyCard';
import data from './data';

function App() {
  return (
    <div style={{
      maxWidth: '640px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px 0',
      maxHeight: '90vh',
      overflowY: 'auto',
    }}>
      <SpotifyCard
        image='https://zenius-i-vanisher.com/simfiles/DanceDanceRevolution%20HOTTEST%20PARTY%203%20(Wii)%20(North%20America)/Never%20Gonna%20Give%20You%20Up/Never%20Gonna%20Give%20You%20Up-jacket.png'
        title='Never Gonna Give You Up'
        description='Rick Astley'
      />

      {data.map(d =>
        <SpotifyCard
          image={d.image}
          title={d.title}
          description={d.video}
          background={d.background}
        />
      )}
    </div>
  );
}

export default App;
