import BlogArticle from '../components/BlogArticle';
import parcari from "../static/images/blog/parcari.jpeg"

const articleContent = [
    { subtitle: '1. De ce să Folosim Rășina Epoxidică în Garaj?', paragraph: 'Rășina epoxidică formează o suprafață dură și rezistentă la abraziune, impact, greutate și trafic intens. Spre deosebire de betonul netratat, care se poate fisura sau păta ușor, rășina epoxidică rămâne intactă și își păstrează aspectul impecabil ani de zile.'},
    { subtitle: '2. Impermeabilitate și Rezistență la Pete', paragraph: 'Una dintre cele mai mari provocări pentru pardoselile de garaj sunt petele de ulei, benzină sau alte substanțe chimice. Rășina epoxidică este impermeabilă și rezistentă la majoritatea acestor substanțe, ceea ce face curățarea ușoară și previne deteriorarea pe termen lung.' },
    { subtitle: '3. Aspect Estetic și Personalizabil', paragraph: 'Rășina epoxidică oferă o gamă largă de opțiuni de personalizare. Puteți alege dintr-o varietate de culori, finisaje (lucioase, mate sau satinate) și chiar puteți încorpora fulgi decorativi sau logo-uri pentru un aspect unic și personalizat.' },
    { subtitle: '4. Întreținere Simplă', paragraph: 'Suprafața netedă și non-poroasă a rășinii epoxidice previne acumularea de murdărie și praf, făcând curățarea simplă și rapidă. O simplă măturare sau ștergere cu o lavetă umedă este suficientă pentru a menține pardoseala impecabilă.' },
    { subtitle: '5. Procesul de Aplicare a Rășinii Epoxidice în Garaj', paragraph: 'Transformarea garajului dumneavoastră într-un spațiu elegant și funcțional începe cu pregătirea meticuloasă a suprafeței. Betonul trebuie să fie curățat temeinic, reparat de eventualele fisuri sau imperfecțiuni și șlefuit pentru a asigura o aderență optimă a rășinii epoxidice. Odată ce suprafața este pregătită, se aplică un strat de grund epoxidic, care acționează ca o punte de legătură între beton și stratul final de rășină.' },
    { subtitle: '6. Amestecarea rășinii epoxidice', paragraph: 'Amestecarea rășinii epoxidice cu întăritorul este un pas crucial, care necesită precizie și respectarea instrucțiunilor producătorului. Proporțiile trebuie să fie exacte pentru a asigura o întărire corespunzătoare și o durabilitate maximă a pardoselii. Amestecul se toarnă pe suprafața pregătită și se întinde uniform cu ajutorul unei raclete dințate. Pentru un aspect deosebit, se pot adăuga fulgi decorativi sau pigmenți colorați în timpul turnării.' },
    { subtitle: '7. După aplicare', paragraph: 'După aplicare, rășina epoxidică necesită un timp de întărire, care poate varia în funcție de produsul utilizat și de condițiile de mediu. În acest timp, este important să se evite traficul și să se protejeze suprafața de praf și impurități. Odată întărită, pardoseala din rășină epoxidică va deveni o suprafață rezistentă, lucioasă și ușor de întreținut, care va transforma complet aspectul și funcționalitatea garajului dumneavoastră.' },
];

export default function Article3() {
    return (
        <div>
            <BlogArticle
                title="Recomandări pentru o Pardoseală de Garaj Rezistentă"
                intro="Pardoseala garajului este supusă unei varietăți de solicitări, de la greutatea mașinii și a echipamentelor, până la pete de ulei, substanțe chimice și schimbări de temperatură. Alegerea unui material rezistent și durabil este esențială pentru a asigura o pardoseală funcțională și estetică pe termen lung."
                imageUrl={parcari}
                content={articleContent}
            />
        </div>
    );
}