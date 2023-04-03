import getElementByRef from './hooks';
import { InfoHero } from '../infoHero/infoHero';
import './cardCss.scss';
export function CardHero(props){
    const {id,images,biography,name} = props.data;
    const elementRef = getElementByRef();
    return(
        <div className="hero-card all-bases" key={id} ref={elementRef}>
            <section class="main-section">
                <header>
                    <img src={images.lg} className="hero-img" alt={`Image ${biography.firstAppearance}`} />
                </header>
                <main>
                    <InfoHero data={props.data}/>
                </main>
                <footer>
                    {name}
                </footer>
            </section>
        </div>
    )
}