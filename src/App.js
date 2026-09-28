import "./styles.css";

export default function App() {
  return (
    <div className="App" style={{margin: "2.5%"}}>
      {/*Dein Code unter dieser Zeile  */}
      <h1>Fachhochschule Nordwestscheiz</h1>
      <hr />

      <div id="_Container_">
        <div id="_Spalten_">
          <div id="Text">Die <strong>Fachhochschule Nordwestschweiz</strong> (FHNW) ist eine <a href="https://de.wikipedia.org/wiki/Fachhochschule" target="_blank" rel="next">Fachhochschule</a> in der Schweiz und ist in der Lehre, Forschung, Weiterbildung und Dienstleistung tätig. Sie ist eine interkantonale öffentlich-rechtliche Anstalt mit eigener Rechtspersönlichkeit. Träger sind die Kantone Aargau, Basel-Landschaft, Basel-Stadt und Solothurn. Die FHNW umfasst folgende zehn Hochschulen, die auf die Standorte Basel, Brugg-Windisch, Muttenz und Olten konzentriert sind: Angewandte Psychologie, Architektur, Bau und Geomatik, Gestaltung und Kunst, Informatik, Life Sciences, Musik, Lehrerinnen- und Lehrerbildung, Soziale Arbeit, Technik und Umwelt sowie Wirtschaft. Der Hauptsitz ist in Windisch.</div>
        </div>

        <div id="_Spalten_">
          <div id="Box">
            <h2>Fachhochschule Nordwestscheiz</h2>
            <img className="fit-picture" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/FHNW_Logo.svg/500px-FHNW_Logo.svg.png?utm_source=de.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" alt="FHNW-Logo"></img>
            <div id="_Container_">
              <div className="Zeile">
                <div id="Beschreibung">Gründung</div>
                <div id="Beschreibung">Trägerschaft</div>
                <div id="Beschreibung">Ort</div>
              
              </div>

              <div className="Zeile">
                <div id="Detail">1. Januar 2006</div>
                <div id="Detail">Kantone <a href="https://de.wikipedia.org/wiki/Kanton_Aargau" target="_blank" rel="next">Aargau</a>, <a href="https://de.wikipedia.org/wiki/Kanton_Basel-Landschaft" target="_blank" rel="next">Basel-Landschaft</a>, <a href="https://de.wikipedia.org/wiki/Kanton_Basel-Stadt" target="_blank" rel="next">Basel-Stadt</a>, <a href="https://de.wikipedia.org/wiki/Kanton_Solothurn" target="_blank" rel="next">Solothurn</a></div>
                <div id="Detail">Windisch AG, Muttenz, Olten,</div>
              </div>


            </div>

          </div>
        </div>


      </div>











        {/*Dein Code über dieser Zeile  */}
    </div>
  );
}
