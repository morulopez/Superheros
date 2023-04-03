import '../../styles/style.scss';
import '../../styles/_layout.scss';
import HeroesFetch from './hooks';
import { CardHero } from '../cardHero/cardHero.jsx';
export function App(){
    HeroesFetch()
    const {dataHeroes,isFetching} = HeroesFetch();
    console.log('oooooooo',dataHeroes)
    return(
        <>
        <main className='principal-container'>
            <div className='d-row x-center y-center'>
                <h1 className='title'>
                    SUPER HEROES
                </h1>
            </div>
            <div className='d-row'>
                {
                    dataHeroes.map((hero)=>{
                        return (
                            <CardHero key={hero.id} data={hero}/>
                        )
                    })
                }
            </div>
        </main>
        </>
    )
}