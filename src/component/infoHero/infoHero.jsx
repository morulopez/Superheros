import './infoCardCss.scss';
export function InfoHero(props){
    const {biography,appearance} = props.data;
    return(
        <>
        <div className="info-hero-card">
            <section>
                {props.data.name}
            </section>
            <section>
                <span className="info-title">Publisher: </span>
                <span>{biography.publisher}</span>
            </section>
            <section>
                <span className="info-title">Gender: </span>
                <span>{appearance.gender}</span>
            </section>
            <section>
                <span className="info-title">Eye Color: </span>
                <span>{appearance.eyeColor}</span>
            </section>
            <section>
                <span className="info-title">Hair Color: </span>
                <span>{appearance.hairColor}</span>
            </section>
            <section>
                <span className="info-title">Weigth: </span>
                <span>{appearance.weight[1]}</span>
            </section>
            <section>
                <span className="info-title">Height: </span>
                <span>{appearance.height[1]}</span>
            </section>
            <section>
                <span className="info-title">Place Of Birth: </span>
                <span>{biography.placeOfBirth}</span>
            </section>
            <section>
                <span className="info-title">Race: </span>
                <span>{appearance.race}</span>
            </section>
            <section>
                <span className="info-title">First Appearance: </span>
                <span>{biography.firstAppearance}</span>
            </section>
            <section>
                <span className="info-title">Aliases: </span>
                {
                    biography.aliases.map((alias,index)=>{
                        return (
                            <span key={index} className='aliases'>
                                {alias}
                            </span>
                        )
                    })
                }
            </section>
        </div>
        </>
    )
}