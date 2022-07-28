import SpotifyCard from './SpotifyCard';
import data from "../data/data-yt";

function SpotifyCardList() {
    return (
        <SpotifyCard
            image='https://zenius-i-vanisher.com/simfiles/DanceDanceRevolution%20HOTTEST%20PARTY%203%20(Wii)%20(North%20America)/Never%20Gonna%20Give%20You%20Up/Never%20Gonna%20Give%20You%20Up-jacket.png'
            title='Never Gonna Give You Up'
            description='Rick Astley'
        />,

        data.map(d =>
            <SpotifyCard
                image={d.image}
                title={d.title}
                description={d.video}
                background={d.background}
            />
        )
    );
}

export default SpotifyCardList;