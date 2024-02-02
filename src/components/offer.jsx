import React, {forwardRef} from 'react'
import './offer.css'

const Offer = forwardRef((props, ref) => {

    return (
        <div ref={ref} className='offer'>
            <h1>oferta</h1>
            <div className='offer--desc'>
                <h2>Konsultacje godzinowe</h2>
                <p>Ta usługa jest skierowana dla klientów, którzy maja silne poczucie osobistego stylu, ale poszukują wskazówek jak urzeczywistnić swoja własną wizje. Konsultacja daje możliwość rozwiązania konkretnego problemu projektowego, przeglądu planów projektowych, porad dotyczących kolorów, układów mebli itp. itd.</p>
            </div>
            <div className='offer--desc'>
                <h2>Wizualizacja (wirtualny projekt wnętrz)</h2>
                <p>Projekt wirtualnego wnętrza zapewnia duży poziom wygody i elastyczności dla klienta i projektanta. Usługa jest skierowana do klientów którzy chcą stworzyć niestandardowy plan projektowy, który będzie odzwierciedlać niepowtarzalny styl klienta równocześnie mieszczący się w budżecie. Wizualizacja może dotyczyć n p odświeżenia już gotowego pokoju jak również stworzenia projektu całego domu od samego początku do końca.</p>
            </div>
            <div className='offer--desc'>
                <h2>Stylizacja wnętrz (dekorowanie)</h2>
                <p>Usługa skierowana jest do klientów którzy pragną odświeżyć, ożywić swoją przestrzeń mieszkalną. Obejmuje zakres usług od planowania przestrzeni po konsultacje kolorystyczna, dobór tkanin czy tekstylni aż po wyposażenie czy pełne umeblowanie przestrzeni, dekoracji okiennych itp. Wszystko dostosowane do unikatowego, wyjątkowego stylu klienta.</p>
            </div>
        </div>
    )

})

export default Offer