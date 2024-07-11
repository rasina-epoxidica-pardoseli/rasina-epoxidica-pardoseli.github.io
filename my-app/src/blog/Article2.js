import BlogArticle from '../components/BlogArticle';
import marcaje from "../static/images/blog/marcaje.jpeg"

const articleContent = [
    { subtitle: '1. Pregătirea Suprafeței', paragraph: 'Înainte de a începe trasarea marcajelor, asigurați-vă că suprafața este curată, uscată și lipsită de orice impurități. Dacă este necesar, utilizați un detergent special pentru a îndepărta grăsimea sau uleiul. Pentru suprafețele poroase, aplicați un strat de grund epoxidic pentru a asigura o aderență optimă.'},
    { subtitle: '2. Alegerea Rășinii Epoxidice Potrivite', paragraph: 'Există o varietate de rășini epoxidice disponibile pe piață, fiecare cu proprietăți specifice. Pentru marcaje, alegeți o rășină cu rezistență ridicată la uzură, abraziune și intemperii. De asemenea, luați în considerare timpul de întărire și grosimea dorită a marcajului.' },
    { subtitle: '3. Amestecarea Rășinii și a Întăritorului', paragraph: 'Urmați cu atenție instrucțiunile producătorului pentru a amesteca rășina și întăritorul în proporțiile corecte. Utilizați un mixer electric la viteză redusă pentru a evita formarea bulelor de aer. Asigurați-vă că amestecul este omogen înainte de a-l aplica.' },
    { subtitle: '4. Trasarea Marcajelor', paragraph: 'Pentru trasarea liniilor drepte, utilizați bandă de mascare sau șabloane special concepute. Pentru forme mai complexe, puteți utiliza un șablon personalizat sau puteți trasa conturul manual. Aplicați rășina epoxidică uniform, utilizând o gletieră sau o racletă.' },
    { subtitle: '5. Îndepărtarea Benzii de Mascare', paragraph: 'Dacă ați utilizat bandă de mascare, îndepărtați-o cu atenție imediat după aplicarea rășinii, înainte ca aceasta să înceapă să se întărească. Acest lucru va asigura margini curate și precise.' },
    { subtitle: '6. Timpul de Întărire', paragraph: 'Timpul de întărire variază în funcție de tipul de rășină epoxidică utilizată și de condițiile de mediu. Respectați timpul de întărire recomandat de producător înainte de a permite traficul sau utilizarea zonei marcate.' },
    { subtitle: '7. Întreținerea Marcajelor', paragraph: 'Marcajele cu rășină epoxidică sunt relativ ușor de întreținut. Curățați-le periodic cu apă și detergent pentru a îndepărta murdăria și praful. Evitați utilizarea substanțelor chimice agresive, care pot deteriora suprafața rășinii.' },
    { subtitle: 'Sfaturi Suplimentare', paragraph: 'Lucrați într-un spațiu bine ventilat, deoarece rășina epoxidică poate emite vapori nocivi. Purtați mănuși și ochelari de protecție pentru a evita contactul direct cu rășina. Dacă este necesar, aplicați un strat de acoperire antiderapant pentru a crește siguranța. Pentru marcaje colorate, adăugați pigmenți speciali în rășina epoxidică înainte de amestecare.' }
];

export default function Article2() {
    return (
        <div>
            <BlogArticle
                title="Ghid Complet pentru Trasarea Marcajelor cu Rășină Epoxidică"
                intro="Rășina epoxidică a devenit un material popular pentru trasarea marcajelor datorită durabilității și esteticii sale deosebite. Fie că doriți să creați marcaje industriale, să delimitați zone de parcare sau să adăugați un element decorativ, acest ghid vă va oferi toate informațiile necesare pentru a obține rezultate profesionale."
                imageUrl={marcaje}
                content={articleContent}
            />
        </div>
    );
}