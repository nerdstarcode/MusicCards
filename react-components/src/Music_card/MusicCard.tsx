import './MusicCard.sass';
type CardProps ={
    color?: string;
}
export function MusicCard(props: CardProps){
    return(
        <div className="viewer">
            <article className="content">
                <div className="music_content">
                    <div className="music_display">

                    </div>
                    <p className="music_name">Shibuya - Covet</p>
                </div>
                <div className="layout_content">
                    
                </div>
            </article>
        </div>
    );
}