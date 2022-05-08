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
      <div className={`${props.className} secondmenucontents_container_flex holdcontent`}>

        <div className="secondmenucontents">
          <div>
            <img src={Adam} alt="adam teolis" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Andy} alt="andy deonarine" />
          </div>
          <div>
            <h1>andy deonarine</h1>
          </div>
          <div>
            <p>co-ceo, cannsell</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Asad} alt="asad amin" />
          </div>
          <div>
            <h1>asad amin</h1>
          </div>
          <div>
            <p>senior vice president, ipsos</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Chad} alt="chad finkelstein" />
          </div>
          <div>
            <h1>chad finkelstein</h1>
          </div>
          <div>
            <p>partner, dale & lessmann llp</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Cheryl} alt="cheryl appleton" />
          </div>
          <div>
            <h1>cheryl appleton</h1>
          </div>
          <div>
            <p>founder, canadian women in food</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Chris} alt="chris barret" />
          </div>
          <div>
            <h1>chris barret</h1>
          </div>
          <div>
            <p>ceo, operatic agency</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Dana} alt="dana mccauley" />
          </div>
          <div>
            <h1>dana mccauley</h1>
          </div>
          <div>
            <p>chief experience officer, canadian food innovation network</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Douglas} alt="douglas mcmaster" />
          </div>
          <div>
            <h1>douglas mcmaster</h1>
          </div>
          <div>
            <p>founder, silo - london</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Duncan} alt="duncan fulton" />
          </div>
          <div>
            <h1>duncan fulton</h1>
          </div>
          <div>
            <p>chief corporate officer, restaurant brands international inc</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Eric} alt="eric joyal" />
          </div>
          <div>
            <h1>eric joyal</h1>
          </div>
          <div>
            <p>president, ascari hospitality group</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Michel} alt="michel falcon" />
          </div>
          <div>
            <h1>michel falcon</h1>
          </div>
          <div>
            <p>owner, brasa peruvian kitchen</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Estherfl} alt="esther fleurimond" />
          </div>
          <div>
            <h1>esther fleurimond</h1>
          </div>
          <div>
            <p>specialized consultant, healthy workplaces, workplace safety & prevention services (wsps)</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Hasselavi} alt="hassel aviles" />
          </div>
          <div>
            <h1>hassel aviles</h1>
          </div>
          <div>
            <p>executive director, not 9 to 5 org</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Jameswat} alt="james watson" />
          </div>
          <div>
            <h1>james watson</h1>
          </div>
          <div>
            <p>merchandising manager (canada), gordon food service</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Jasongia} alt="jason giagrande" />
          </div>
          <div>
            <h1>jason giagrande</h1>
          </div>
          <div>
            <p>head of business, xtm inc.</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Jennifermén} alt="jennifer ménard-shand" />
          </div>
          <div>
            <h1>jennifer ménard-shand</h1>
          </div>
          <div>
            <p>founder & ceo, staff shop inc.</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Jimtay} alt="jim taylor" />
          </div>
          <div>
            <h1>jim taylor</h1>
          </div>
          <div>
            <p>founder & ceo, benchmarksixty</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Joannmca} alt="jo-ann mcarthur" />
          </div>
          <div>
            <h1>jo-ann mcarthur</h1>
          </div>
          <div>
            <p>president & founder, nourish food marketing</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Juanitadic} alt="juanita dickson" />
          </div>
          <div>
            <h1>juanita dickson</h1>
          </div>
          <div>
            <p>president & cfo, gusto 54 restaurant group</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Julieden} alt="julie denton" />
          </div>
          <div>
            <h1>julie denton</h1>
          </div>
          <div>
            <p>chief people officer, recipe unlimited</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Rogermoo} alt="roger mooking" />
          </div>
          <div>
            <h1>roger mooking</h1>
          </div>
          <div>
            <p>chef, television host & restaurateur</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Kylatuo} alt="kyla tuori" />
          </div>
          <div>
            <h1>kyla tuori</h1>
          </div>
          <div>
            <p>corporate chef, unilever food solutions & #fairkitchens ambassador</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Mattdea} alt="matt dean pettit" />
          </div>
          <div>
            <h1>matt dean pettit</h1>
          </div>
          <div>
            <p>chef, television personality & entrepreneur</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Mattjoh} alt="matt johnston" />
          </div>
          <div>
            <h1>matt johnston</h1>
          </div>
          <div>
            <p>co-founder & ceo, collective arts brewing</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Meerudha} alt="meeru dhalwala" />
          </div>
          <div>
            <h1>meeru dhalwala</h1>
          </div>
          <div>
            <p>co-owner & chef, vij's restaurant</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Michellecai} alt="michelle caine" />
          </div>
          <div>
            <h1>michelle caine</h1>
          </div>
          <div>
            <p>chair, hospitality management, school of hospitality, tourism and culinary arts at centennial college</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Paultay} alt="paul taylor" />
          </div>
          <div>
            <h1>paul taylor</h1>
          </div>
          <div>
            <p>executive director, foodshare</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Rahilhoq} alt="rahil hoque" />
          </div>
          <div>
            <h1>rahil hoque</h1>
          </div>
          <div>
            <p>partner & director of operations, ascari hospitality group</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Rennav} alt="ren navarro" />
          </div>
          <div>
            <h1>ren navarro</h1>
          </div>
          <div>
            <p>owner & operator, beer. diversity.</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Stephanielui} alt="stephanie lui-valentim" />
          </div>
          <div>
            <h1>stephanie lui-valentim</h1>
          </div>
          <div>
            <p>co-founder, quell now inc.</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Sylvaincha} alt="sylvain charlebois" />
          </div>
          <div>
            <h1>sylvain charlebois</h1>
          </div>
          <div>
            <p>scientific director, agri-food analytics lab, dalhousie university</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Trangtri} alt="trang trinh" />
          </div>
          <div>
            <h1>trang trinh</h1>
          </div>
          <div>
            <p>ceo, trec brands</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Vincesga} alt="vince sgabellone" />
          </div>
          <div>
            <h1>vince sgabellone</h1>
          </div>
          <div>
            <p>industry analyst, canada foodservice, npd group</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Yiannifou} alt="yianni fountas" />
          </div>
          <div>
            <h1>yianni fountas</h1>
          </div>
          <div>
            <p>senior director, emerging brands & partnerships, strategic projects & business insights, recipe unlimited</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Tabassumzal} alt="tabassum zalotrawala" />
          </div>
          <div>
            <h1>tabassum zalotrawala</h1>
          </div>
          <div>
            <p>chief development officer, chipotle mexican grill</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Jeanfr} alt="jean-françois archambault" />
          </div>
          <div>
            <h1>jean-françois archambault</h1>
          </div>
          <div>
            <p>general director & founder, la tablée des chefs</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Celestemus} alt="celeste mussio" />
          </div>
          <div>
            <h1>celeste mussio</h1>
          </div>
          <div>
            <p>head of sales, data and adtech, pelmorex corp.</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Gregbau} alt="greg baumken" />
          </div>
          <div>
            <h1>greg baumken</h1>
          </div>
          <div>
            <p>vice president, vibrant marketing</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Vasilikimci} alt="vasiliki mcinnes" />
          </div>
          <div>
            <h1>vasiliki mcinnes</h1>
          </div>
          <div>
            <p>co-founder & chief operating officer, odd burger</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Erwinjoa} alt="erwin joaquin" />
          </div>
          <div>
            <h1>erwin joaquin</h1>
          </div>
          <div>
            <p>industry lead, dining/qsr, tiktok</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Stephaniedon} alt="stephanie donnan" />
          </div>
          <div>
            <h1>stephanie donnan</h1>
          </div>
          <div>
            <p>city manager, uber eats</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Yanickmor} alt="yanick morin" />
          </div>
          <div>
            <h1>yanick morin</h1>
          </div>
          <div>
            <p>general manager, a&w</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Colleennol} alt="colleen nolan" />
          </div>
          <div>
            <h1>colleen nolan</h1>
          </div>
          <div>
            <p>hr development, training & community engagement specialist, indigenous tourism ontario</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Davidcou} alt="david coulter" />
          </div>
          <div>
            <h1>david coulter</h1>
          </div>
          <div>
            <p>director of corporate sales, diversey canada</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Patriciagha} alt="patricia ghamami" />
          </div>
          <div>
            <h1>patricia ghamami</h1>
          </div>
          <div>
            <p>general manager, drake devonshire</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Pattitho} alt="patti thompson" />
          </div>
          <div>
            <h1>patti thompson</h1>
          </div>
          <div>
            <p>vp, sales and marketing, king cole ducks ltd</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Kimberlykuz} alt="kimberly kuzmak" />
          </div>
          <div>
            <h1>kimberly kuzmak</h1>
          </div>
          <div>
            <p>vp client management, global merchant services, american express</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Karendav} alt="karen davidson" />
          </div>
          <div>
            <h1>karen davidson</h1>
          </div>
          <div>
            <p>general manager, marben & the cloak bar</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Carapig} alt="cara piggot" />
          </div>
          <div>
            <h1>cara piggot</h1>
          </div>
          <div>
            <p>senior vice president, operations and food services, boston pizza</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Jonathanbro} alt="jonathan brown" />
          </div>
          <div>
            <h1>jonathan brown</h1>
          </div>
          <div>
            <p>chief sales officer, trend hunter</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Jayash} alt="jay ashton" />
          </div>
          <div>
            <h1>jay ashton</h1>
          </div>
          <div>
            <p>business resources & brand activation manager, sysco</p>
          </div>
        </div>

        <div className="secondmenucontents">
          <div>
            <img src={Chrisklu} alt="chris klugman" />
          </div>
          <div>
            <h1>chris klugman</h1>
          </div>
          <div>
            <p>president & owner, paintbox catering and bistro</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export { Speakers }
