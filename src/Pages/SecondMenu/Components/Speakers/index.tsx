import "./styles.css"

import Adam from "../../../../Assets/speakers_v2/adam-teolis-circle.jpg";
import Andy from "../../../../Assets/speakers_v2/andy-deonarine-circle.jpg";
import Asad from "../../../../Assets/speakers_v2/asad-amin-circle.jpg";
import Chad from "../../../../Assets/speakers_v2/chad-finkelstein-circle.jpg";
import Cheryl from "../../../../Assets/speakers_v2/cheryl-appleton-circle.jpg";
import Chris from "../../../../Assets/speakers_v2/chris-barrett-circle.jpg";
import Dana from "../../../../Assets/speakers_v2/dana-mccauley-circle.jpg";
import Douglas from "../../../../Assets/speakers_v2/douglas-mcmaster-circle.jpg";
import Duncan from "../../../../Assets/speakers_v2/duncan-fulton-circle.jpg";
import Eric from "../../../../Assets/speakers_v2/erik-joyal-circle.jpg";
import Michel from "../../../../Assets/speakers_v2/michel-falcon-circle.jpg";
import Estherfl from "../../../../Assets/speakers_v2/esther-fleurimond-circle.jpg";
import Hasselavi from "../../../../Assets/speakers_v2/hassel-aviles-circle.jpg";
import Jameswat from "../../../../Assets/speakers_v2/james-watson-circle.jpg";
import Jasongia from "../../../../Assets/speakers_v2/jason-giagrande-1-circle.jpg";
import Jennifermén from "../../../../Assets/speakers_v2/jennifer-menard-shand-circle.jpg";
import Jimtay from "../../../../Assets/speakers_v2/jim-taylor-circle.jpg";
import Joannmca from "../../../../Assets/speakers_v2/jo-ann-mcarthur-circle.jpg";
import Juanitadic from "../../../../Assets/speakers_v2/juanita-dickson-circle.jpg";
import Julieden from "../../../../Assets/speakers_v2/julie-denton-circle.jpg";
import Rogermoo from "../../../../Assets/speakers_v2/roger-mooking-1-circle.jpg";
import Kylatuo from "../../../../Assets/speakers_v2/kyla-tuori-circle.jpg";
import Mattdea from "../../../../Assets/speakers_v2/matt-dean-pettit-circle.jpg";
import Mattjoh from "../../../../Assets/speakers_v2/matt-johnston-circle.jpg";
import Meerudha from "../../../../Assets/speakers_v2/meeru-dhalwala-circle.jpg";
import Michellecai from "../../../../Assets/speakers_v2/michelle-caine-circle.jpg";
import Paultay from "../../../../Assets/speakers_v2/paul-taylor-circle.jpg";
import Rahilhoq from "../../../../Assets/speakers_v2/rahil-hoque-circle.jpg";
import Rennav from "../../../../Assets/speakers_v2/ren-navarro-circle.jpg";
import Stephanielui from "../../../../Assets/speakers_v2/stephanie-lui-valentim-circle.jpg";
import Sylvaincha from "../../../../Assets/speakers_v2/sylvain-charlebois-circle.jpg";
import Trangtri from "../../../../Assets/speakers_v2/trang-trinh-circle.jpg";
import Vincesga from "../../../../Assets/speakers_v2/vince-sgabellone-circle.jpg";
import Yiannifou from "../../../../Assets/speakers_v2/yianni-fountas-circle.jpg";
import Tabassumzal from "../../../../Assets/speakers_v2/tabassum-zalotrawala-circle.jpg";
import Jeanfr from "../../../../Assets/speakers_v2/jean-francois-archambault-circle.jpg";
import Celestemus from "../../../../Assets/speakers_v2/celeste-mussio-circle.jpg";
import Gregbau from "../../../../Assets/speakers_v2/greg-baumken-circle.jpg";
import Vasilikimci from "../../../../Assets/speakers_v2/vasiliki-mcinnes-circle.jpg";
import Erwinjoa from "../../../../Assets/speakers_v2/erwin-joaquin-circle.jpg";
import Stephaniedon from "../../../../Assets/speakers_v2/stephanie-donnan-circle.jpg";
import Yanickmor from "../../../../Assets/speakers_v2/yanick-morin-circle.jpg";
import Colleennol from "../../../../Assets/speakers_v2/colleen-nolan-circle.jpg";
import Davidcou from "../../../../Assets/speakers_v2/david-coulter-circle.jpg";
import Patriciagha from "../../../../Assets/speakers_v2/patricia-ghamami2-circle.jpg";
import Pattitho from "../../../../Assets/speakers_v2/patti-thompson-circle.jpg";
import Kimberlykuz from "../../../../Assets/speakers_v2/kimberly-kuzmak-circle.jpg";
import Karendav from "../../../../Assets/speakers_v2/karen-davidson-circle.jpg";
import Carapig from "../../../../Assets/speakers_v2/cara-piggot-circle.jpg";
import Jonathanbro from "../../../../Assets/speakers_v2/jonathon-brown-circle.jpg";
import Jayash from "../../../../Assets/speakers_v2/jay-ashton-circle.jpg";
import Chrisklu from "../../../../Assets/speakers_v2/chris-klugman-circle.jpg";

interface Props {
  className: string;
}

const Speakers = (props: Props) => {
  return (
    <div>
      <div className="topheader">
        <div>
          <h1>Speakers</h1>
        </div>
      </div>
      <div className={`${props.className} speakerscontents_container_flex holdcontent`}>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="adam teolis" />
          </div>
          <div>
            <h1>ADAM TEOLIS</h1>
          </div>
          <div>
            <p>Founder & Ceo, Chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Andy} alt="andy deonarine" />
          </div>
          <div>
            <h1>ANDY DEONARINE</h1>
          </div>
          <div>
            <p>Co-Ceo, Cannsell</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Asad} alt="asad amin" />
          </div>
          <div>
            <h1>ASAD AMIN</h1>
          </div>
          <div>
            <p>Senior Vice President, Ipsos</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Chad} alt="chad finkelstein" />
          </div>
          <div>
            <h1>CHAD FINKELSTEIN</h1>
          </div>
          <div>
            <p>Partner, Dale & Lessmann Llp</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Cheryl} alt="cheryl appleton" />
          </div>
          <div>
            <h1>CHERYL APPLETON</h1>
          </div>
          <div>
            <p>Founder, Canadian Women In Food</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Chris} alt="chris barret" />
          </div>
          <div>
            <h1>CHRIS BARRET</h1>
          </div>
          <div>
            <p>Ceo, Operatic Agency</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Dana} alt="dana mccauley" />
          </div>
          <div>
            <h1>DANA</h1>
          </div>
          <div>
            <p>Chief Experience Officer, Canadian Food Innovation Network</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Douglas} alt="douglas mcmaster" />
          </div>
          <div>
            <h1>DOUGLAS MCMASTER</h1>
          </div>
          <div>
            <p>Founder, Silo - London</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Duncan} alt="duncan fulton" />
          </div>
          <div>
            <h1>DUNCAN FULTON</h1>
          </div>
          <div>
            <p>Chief Corporate Officer, Restaurant Brands International Inc</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Eric} alt="eric joyal" />
          </div>
          <div>
            <h1>ERIC JOYAL</h1>
          </div>
          <div>
            <p>President, Ascari Hospitality Group</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Michel} alt="michel falcon" />
          </div>
          <div>
            <h1>MICHEL FALCON</h1>
          </div>
          <div>
            <p>Owner, Brasa Peruvian Kitchen</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Estherfl} alt="esther fleurimond" />
          </div>
          <div>
            <h1>ESTHER FLEURIMOND</h1>
          </div>
          <div>
            <p>Specialized Consultant, Healthy Workplaces, Workplace Safety & Prevention Services (wsps)</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Hasselavi} alt="hassel aviles" />
          </div>
          <div>
            <h1>HASSEL AVILES</h1>
          </div>
          <div>
            <p>Executive Director, not 9 to 5 org</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Jameswat} alt="james watson" />
          </div>
          <div>
            <h1>JAMES WATSON</h1>
          </div>
          <div>
            <p>Merchandising Manager (canada), Gordon Food Service</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Jasongia} alt="jason giagrande" />
          </div>
          <div>
            <h1>JASON GIAGRANDE</h1>
          </div>
          <div>
            <p>Head Of Business, Xtm Inc.</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Jennifermén} alt="jennifer ménard-shand" />
          </div>
          <div>
            <h1>JENNIFER MÉNARD-SHAND</h1>
          </div>
          <div>
            <p>Founder & Ceo, Staff Shop Inc.</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Jimtay} alt="jim taylor" />
          </div>
          <div>
            <h1>JIM TAYLOR</h1>
          </div>
          <div>
            <p>Founder & Ceo, Benchmarksixty</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Joannmca} alt="jo-ann mcarthur" />
          </div>
          <div>
            <h1>JO-ANN MCARTHUR</h1>
          </div>
          <div>
            <p>President & Founder, Nourish Food Marketing</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Juanitadic} alt="juanita dickson" />
          </div>
          <div>
            <h1>JUANITA DICKSON</h1>
          </div>
          <div>
            <p>President & Cfo, Gusto 54 Restaurant Group</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Julieden} alt="julie denton" />
          </div>
          <div>
            <h1>JULIE DENTON</h1>
          </div>
          <div>
            <p>Chief People Officer, Recipe Unlimited</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Rogermoo} alt="roger mooking" />
          </div>
          <div>
            <h1>ROGER MOOKING</h1>
          </div>
          <div>
            <p>Chef, Television Host & Restaurateur</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Kylatuo} alt="kyla tuori" />
          </div>
          <div>
            <h1>KYLA TUORI</h1>
          </div>
          <div>
            <p>Corporate Chef, Unilever Food Solutions & #Fairkitchens Ambassador</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Mattdea} alt="matt dean pettit" />
          </div>
          <div>
            <h1>MATT DEAN PETTIT</h1>
          </div>
          <div>
            <p>Chef, Television Personality & Entrepreneur</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Mattjoh} alt="matt johnston" />
          </div>
          <div>
            <h1>MATT JOHNSTON</h1>
          </div>
          <div>
            <p>Co-founder & Ceo, Collective Arts Brewing</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Meerudha} alt="meeru dhalwala" />
          </div>
          <div>
            <h1>MEERU DHALWALA</h1>
          </div>
          <div>
            <p>Co-owner & Chef, Vij's Restaurant</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Michellecai} alt="michelle caine" />
          </div>
          <div>
            <h1>MICHELLE CAINE</h1>
          </div>
          <div>
            <p>Chair, Hospitality Management, School Of Hospitality, Tourism And Culinary Arts At Centennial College</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Paultay} alt="paul taylor" />
          </div>
          <div>
            <h1>PAUL TAYLOR</h1>
          </div>
          <div>
            <p>Executive Director, Foodshare</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Rahilhoq} alt="rahil hoque" />
          </div>
          <div>
            <h1>RAHIL HOQUE</h1>
          </div>
          <div>
            <p>Partner & Director Of Operations, Ascari Hospitality Group</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Rennav} alt="ren navarro" />
          </div>
          <div>
            <h1>REN NAVARRO</h1>
          </div>
          <div>
            <p>Owner & Operator, Beer. Diversity.</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Stephanielui} alt="stephanie lui-valentim" />
          </div>
          <div>
            <h1>STEPHANIE LUI-VALENTIM</h1>
          </div>
          <div>
            <p>Co-Founder, Quell Now Inc.</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Sylvaincha} alt="sylvain charlebois" />
          </div>
          <div>
            <h1>SYLVAIN CHARLEBOIS</h1>
          </div>
          <div>
            <p>Scientific Director, Agri-Food Analytics Lab, Dalhousie University</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Trangtri} alt="trang trinh" />
          </div>
          <div>
            <h1>TRANG TRINH</h1>
          </div>
          <div>
            <p>Ceo, Trec Brands</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Vincesga} alt="vince sgabellone" />
          </div>
          <div>
            <h1>VINCE SGABELLONE</h1>
          </div>
          <div>
            <p>Industry Analyst, Canada Foodservice, Npd Group</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Yiannifou} alt="yianni fountas" />
          </div>
          <div>
            <h1>YIANNI FOUNTAS</h1>
          </div>
          <div>
            <p>Senior Director, Emerging Brands & Partnerships, Strategic Projects & Business Insights, Recipe Unlimited</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Tabassumzal} alt="tabassum zalotrawala" />
          </div>
          <div>
            <h1>TABASSUM ZALOTRAWALA</h1>
          </div>
          <div>
            <p>Chief Development Officer, Chipotle Mexican Grill</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Jeanfr} alt="jean-françois archambault" />
          </div>
          <div>
            <h1>JEAN-FRANÇOIS ARCHAMBAULT</h1>
          </div>
          <div>
            <p>General Director & Founder, La Tablée Des Chefs</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Celestemus} alt="celeste mussio" />
          </div>
          <div>
            <h1>CELESTE MUSSIO</h1>
          </div>
          <div>
            <p>Head Of Sales, Data And Adtech, Pelmorex Corp.</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Gregbau} alt="greg baumken" />
          </div>
          <div>
            <h1>GREG BAUMKEN</h1>
          </div>
          <div>
            <p>Vice President, Vibrant Marketing</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Vasilikimci} alt="vasiliki mcinnes" />
          </div>
          <div>
            <h1>VASILIKI MCINNES</h1>
          </div>
          <div>
            <p>Co-Founder & Chief Operating Officer, Odd Burger</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Erwinjoa} alt="erwin joaquin" />
          </div>
          <div>
            <h1>ERWIN JOAQUIN</h1>
          </div>
          <div>
            <p>Industry Lead, Dining/qsr, Tiktok</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Stephaniedon} alt="stephanie donnan" />
          </div>
          <div>
            <h1>STEPHANIE DONNAN</h1>
          </div>
          <div>
            <p>City Manager, Uber Eats</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Yanickmor} alt="yanick morin" />
          </div>
          <div>
            <h1>YANICK MORIN</h1>
          </div>
          <div>
            <p>General Manager, A&w</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Colleennol} alt="colleen nolan" />
          </div>
          <div>
            <h1>COLLEEN NOLAN</h1>
          </div>
          <div>
            <p>Hr Development, Training & Community Engagement Specialist, Indigenous Tourism Ontario</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Davidcou} alt="david coulter" />
          </div>
          <div>
            <h1>DAVID COULTER</h1>
          </div>
          <div>
            <p>Director Of Corporate Sales, Diversey Canada</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Patriciagha} alt="patricia ghamami" />
          </div>
          <div>
            <h1>PATRICIA GHAMAMI</h1>
          </div>
          <div>
            <p>General Manager, Drake Devonshire</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Pattitho} alt="patti thompson" />
          </div>
          <div>
            <h1>PATTI THOMPSON</h1>
          </div>
          <div>
            <p>Vp, Sales And Marketing, King Cole Ducks Ltd</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Kimberlykuz} alt="kimberly kuzmak" />
          </div>
          <div>
            <h1>KIMBERLY KUZMAK</h1>
          </div>
          <div>
            <p>Vp Client Management, Global Merchant Services, American Express</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Karendav} alt="karen davidson" />
          </div>
          <div>
            <h1>KAREN DAVIDSON</h1>
          </div>
          <div>
            <p>General Manager, Marben & The Cloak Bar</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Carapig} alt="cara piggot" />
          </div>
          <div>
            <h1>CARA PIGGOT</h1>
          </div>
          <div>
            <p>Senior Vice President, Operations And Food Services, Boston Pizza</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Jonathanbro} alt="jonathan brown" />
          </div>
          <div>
            <h1>JONATHAN BROWN</h1>
          </div>
          <div>
            <p>Chief Sales Officer, Trend Hunter</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Jayash} alt="jay ashton" />
          </div>
          <div>
            <h1>JAY ASHTON</h1>
          </div>
          <div>
            <p>Business Resources & Brand Activation Manager, Sysco</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Chrisklu} alt="chris klugman" />
          </div>
          <div>
            <h1>CHRIS KLUGMAN</h1>
          </div>
          <div>
            <p>President & Owner, Paintbox Catering And Bistro</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export { Speakers }
