import React, { Suspense } from 'react';

import '../App.css';
import CompImg1 from '../comps/image-comp';

import xarta12 from '../img/xarta_10_12.jpg';
import { ReactComponent as Rigas } from '../img/rhgaw.svg';
import Footer from '../comps/footer';
import Header from '../comps/header';

import ReactTooltip from 'react-tooltip';
import './rigas-documentary'


function Home() {


	return (
		<Suspense fallback="loading">
			<div className="main">

				<Header
					title={"Ο Ρήγας Φεραίος"}
				/>
				<div className="main-content">
					<div className="flex-center-column">
						<div className="starter-image">
							<Rigas className="rigas" />
							<h1 style={{marginBottom: "0", fontSize: "223%"}} >Ρήγας Βελεστινλής <p style={{ fontSize: "15px", direction: "ltr" }}>(πραγματικό όνομα: Αντώνιος Κυριαζής)</p> <p style={{ fontSize: "18px", direction: "ltr" }}>(Βελεστίνο, 1757 - Βελιγράδι, 24 Ιουνίου 1798) </p> 
								<a data-tip="Δοκιμαντερ" target="__blank" href="https://www.youtube.com/watch?v=klZsouta-W8">
									<i className="fab fa-youtube"></i>
								</a>
								<ReactTooltip/>

								<a data-tip="Βικιπεδια" target="__blank" href="https://el.wikipedia.org/wiki/%CE%A1%CE%AE%CE%B3%CE%B1%CF%82_%CE%92%CE%B5%CE%BB%CE%B5%CF%83%CF%84%CE%B9%CE%BD%CE%BB%CE%AE%CF%82">							
									<i className="fab fa-wikipedia-w"></i>
								</a>
								<ReactTooltip/>
								<a data-tip="Βιβλια" target="__blank" href="https://www.google.com/search?sa=X&hl=en&sxsrf=ALeKk00BdBcQ-uh2CK0wkceE_zNBZyAVYg:1611376725111&q=rigas+feraios+books&stick=H4sIAAAAAAAAAOPgE-LUz9U3MElJyijXkspOttJPys_P1k8sLcnIL7ICsYsV8vNyKhexChdlpicWK6SlFiVm5hcrgKUAi9o0TD8AAAA&ved=2ahUKEwjLpLKKnrHuAhUPDewKHSjPC7cQ6BMoADAYegQIFhAC">
									<i className="fas fa-book"></i>
								</a>
								<ReactTooltip/>
								<a data-tip="Σχολείο" target="__blank" href="https://el.wikipedia.org/wiki/%CE%9D%CE%B5%CE%BF%CE%B5%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CF%8C%CF%82_%CE%94%CE%B9%CE%B1%CF%86%CF%89%CF%84%CE%B9%CF%83%CE%BC%CF%8C%CF%82">
									<i className="fas fa-school"></i>
								</a>
								<ReactTooltip/>
								
							</h1>
						</div>
						<hr style={{maxWidth: "686px"}}/>
					</div>
				
					<CompImg1
						src={xarta12}
						h="Χαρτας Ν. 12"

						p={`Ενα κοματι απο την Χάρτα του Ρήγα ή Χάρτα της Ελλάδος.  Πρόκειται για ένα από τα πιο σημαντικά έργα του Νεοελληνικού Διαφωτισμού, 
						έργο του Ρήγα Βελεστινλή, και το πιο σημαντικό δείγμα της ελληνικής 
						χαρτογραφίας της προεπαναστατικής περιόδου.`}
					/>
					<CompImg1
					imgstyle={{height: "300px"}}
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/%CE%A1%CE%AE%CE%B3%CE%B1%CF%82_%CE%A6%CE%B5%CF%81%CE%B1%CE%AF%CE%BF%CF%82%2C_%CE%A0%CE%B1%CE%BD%CE%B5%CF%80%CE%B9%CF%83%CF%84%CE%AE%CE%BC%CE%B9%CE%BF_%CE%91%CE%B8%CE%B7%CE%BD%CF%8E%CE%BD_6627.jpg/250px-%CE%A1%CE%AE%CE%B3%CE%B1%CF%82_%CE%A6%CE%B5%CF%81%CE%B1%CE%AF%CE%BF%CF%82%2C_%CE%A0%CE%B1%CE%BD%CE%B5%CF%80%CE%B9%CF%83%CF%84%CE%AE%CE%BC%CE%B9%CE%BF_%CE%91%CE%B8%CE%B7%CE%BD%CF%8E%CE%BD_6627.jpg"
						p={`Εικάζεται ότι αιτία για τη θανάτωσή τους υπήρξε η πεποίθηση των Αυστριακών και Τουρκικών Αρχών πως ο Ρήγας και οι σύντροφοί του είχαν στενές σχέσεις με το Ναπολέοντα Α΄, θεωρούμενοι έτσι ως άκρως επικίνδυνοι. Οι διαδόσεις περί διαφυγής των εγκλείστων, τις οποίες «κατεσκεύασε» ο καϊμακάμης, είχαν σκοπό να παραπλανήσουν τις κυβερνήσεις της Ευρώπης, προς τις οποίες η Οθωμανική Αρχή της Πόλης είχε παράσχει διαβεβαιώσεις ότι δε θα σκότωνε τους οκτώ Έλληνες φυλακισμένους χωρίς ανάκριση. Πέρα από αυτό, η Οθωμανική κυβέρνηση ανησυχούσε για τις διασυνδέσεις του Ρήγα με τον Πασβάνογλου, φοβούμενη ακόμη και επίθεση του τελευταίου κατά του Βελιγραδίου, ενώ επιπλέον, δίσταζε να διατάξει τη μεταφορά τους από το Βελιγράδι προς την Πόλη, από την πιθανότητα να σταλούν δυνάμεις του Πασβάνογλου στο δρόμο και να τους απελευθερώσουν. Για τον ακριβή γεωγραφικό εντοπισμό-τοποθεσία του αγάλματος του Ρήγα στο Βελιγράδι, καθώς και της οδού Riga od Fere (Ρήγας Φεραίος στα Σέρβικα).
						χαρτογραφίας της προεπαναστατικής περιόδου.`}
						h={`Ο ανδριάντας του \n Ρήγα Βελεστινλή, `}
					/>
					<CompImg1
					imgstyle={{height: "300px"}}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/%CE%98%CE%BF%CF%8D%CF%81%CE%B9%CE%BF%CF%82-%CE%A1%CE%AE%CE%B3%CE%B1%CF%82_%CE%A6%CE%B5%CF%81%CE%B1%CE%AF%CE%BF%CF%82-1797.JPG/220px-%CE%98%CE%BF%CF%8D%CF%81%CE%B9%CE%BF%CF%82-%CE%A1%CE%AE%CE%B3%CE%B1%CF%82_%CE%A6%CE%B5%CF%81%CE%B1%CE%AF%CE%BF%CF%82-1797.JPG"
					p={<ul style={{textAlign: "left"}}>
						<li>Το Σαγανάκι της Τρέλας, 1786. Το έργο αυτό τελικά αποδεικνύεται ότι δεν είναι του Ρήγα σύμφωνα με τις έρευνες που δημοσιεύτηκαν.</li>
						<li>Σχολείον των ντελικάτων Εραστών, Βιέννη 1790.</li>
						<li>Ο Στρατηγός Κεβενχύλλερ ή Στρατιωτικόν Εγκόλπιον.</li>
						<li>Επιπεδογραφία της Κωνσταντινουπόλεως, Βιέννη, 1796, στην ψηφιακή Βιβλιοθήκη Ελληνομνήμων.</li>
						<li>Χαλκογραφία του Μεγάλου Αλεξάνδρου,Βιέννη, 1797</li>
						<li>Νέα Χάρτα της Βλαχίας και μέρους της Τρανσυλβανίας, Βιέννη, 1797.</li>
						<li>Γενική Χάρτα της Μολδαβίας, Βιέννη 1797.</li>
						<li>Χάρτα της Ελλάδος, Βιέννη 1797, στην ψηφιακή Βιβλιοθήκη Ελληνομνήμων.</li>
						<li>Νέα Πολιτική Διοίκησις των κατοίκων της Ρούμελης, της Μικράς ασίας, των Μεσογείων νήσων και της Βλαχομπογδανίας, Βιέννη 1797. Περιλάμβανε τέσσερα τμήματα: <ul style={{fontSize: "12px", textAlign: "left"}}>
							<li>Επαναστατική Προκήρυξις Υπέρ των νόμων και της πατρίδος</li>
							<li>Τα Δίκαια του ανθρώπου σε 35 άρθρα</li>
							<li>Το Σύνταγμα της Ελληνικής Δημοκρατίας, σε 124 άρθρα</li>
							<li>Θούριος.</li>

							</ul></li>

					</ul>}
					h="Τα Εργα του"
					hrstyle={{display : "none"}}
				/>

					
				</div>
				<Footer />
			</div>
			
		</Suspense>
	); 
}

export default Home;
