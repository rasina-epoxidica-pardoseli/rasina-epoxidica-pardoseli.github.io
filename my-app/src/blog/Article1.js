import BlogArticle from '../components/BlogArticle';
import hala from "../static/images/blog/hala-industriala.jpeg"

const articleContent = [
    { subtitle: 'Rezistență și durabilitate excepționale', paragraph: 'Rășina epoxidică este un material termoset care, după întărire, formează o suprafață extrem de dură și rezistentă. Aceasta poate suporta cu ușurință traficul intens, greutatea utilajelor și echipamentelor industriale, precum și șocurile mecanice. De asemenea, rășina epoxidică este rezistentă la abraziune, zgârieturi și uzură, asigurând o durată de viață îndelungată a pardoselii.' },
    { subtitle: 'Impermeabilitate și rezistență chimică', paragraph: 'Un alt avantaj major al rășinii epoxidice este impermeabilitatea sa. Aceasta previne infiltrarea lichidelor în structura pardoselii, protejând astfel substratul de beton și prevenind apariția mucegaiului sau a bacteriilor. În plus, rășina epoxidică este rezistentă la o gamă largă de substanțe chimice, inclusiv acizi, baze, solvenți și uleiuri, fiind ideală pentru mediile industriale în care se lucrează cu astfel de substanțe.' },
    { subtitle: 'Igienă și ușurință în întreținere', paragraph: 'Suprafața netedă și fără pori a pardoselilor epoxidice previne acumularea de praf, murdărie și bacterii, fiind ușor de curățat și dezinfectat. Aceasta este o caracteristică esențială pentru industria alimentară, farmaceutică și alte domenii în care igiena este o prioritate.' },
    { subtitle: 'Versatilitate și estetică', paragraph: 'Rășina epoxidică poate fi personalizată într-o varietate de culori, finisaje și modele, permițând crearea unor pardoseli unice și atractive. De asemenea, aceasta poate fi aplicată în straturi subțiri sau groase, în funcție de necesitățile specifice ale fiecărui spațiu industrial.' },
    { subtitle: 'Aderență excelentă și aplicare rapidă', paragraph: 'Rășina epoxidică aderă excelent la substratul de beton, asigurând o legătură puternică și durabilă. Procesul de aplicare este relativ rapid și nu necesită întreruperi lungi ale activității, fiind ideal pentru proiectele cu termene strânse.' },
    { subtitle: 'Siguranță sporită', paragraph: 'Pardoselile epoxidice pot fi tratate cu aditivi antiderapanți, sporind astfel siguranța angajaților și reducând riscul de accidente. De asemenea, acestea pot fi realizate în variante antistatice sau conductive, pentru a preveni acumularea de electricitate statică în mediile sensibile.'},
    { subtitle: 'Concluzie', paragraph: 'Rășina epoxidică oferă o combinație unică de proprietăți tehnice și estetice, fiind alegerea ideală pentru pardoselile industriale. Dacă sunteți în căutarea unei soluții durabile, sigure și ușor de întreținut, rășina epoxidică este răspunsul. Contactează-ne pentru o ofertă personalizată.' },
];

export default function Article1() {
    return (
        <div>
            <BlogArticle
                title="De ce să alegi rășina epoxidică pentru pardoselile industriale?"
                intro="Rășina epoxidică a devenit un standard în domeniul pardoselilor industriale datorită numeroaselor avantaje pe care le oferă. În acest articol, vom explora în detaliu proprietățile tehnice ale rășinii epoxidice și motivele pentru care este alegerea ideală pentru spațiile industriale."
                imageUrl={hala}
                content={articleContent}
            />
        </div>
    );
}