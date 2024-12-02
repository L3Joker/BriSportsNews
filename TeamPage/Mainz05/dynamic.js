const updateDynamicContent = (index) => {
    const dynamicContent = document.getElementById("dynamic-content");
    const teamInfo = [
        {
            name: "Mainz 05",
            description: `
                <p><b>Founded in 1905</b>, 1. FSV Mainz 05, affectionately known as the <i>"05ERs"</i>, has established itself as a <i>resilient and ambitious force</i> in German football. Based in the <b>Mewa Arena</b>, Mainz boasts a rich history of <b>passion</b> and <b>determination</b>, with a loyal fanbase that has supported them through thick and thin.</p><br>
				<p>In the <b>2024-25 season</b>, Mainz 05 <i>dominated the Bundesliga</i> for an incredible <b>30 weeks</b>, sitting at the summit as league leaders. However, a poor run of form in the final stretch saw them slip to a <b>3rd-place finish</b>. Despite this setback, the season ended on a high as Mainz claimed their first-ever <b><u>Europa Conference League Trophy</u></b>, showcasing their <i>grit</i> and <i>ability to bounce back</i> when it mattered most.</p><br>
				<p>Known for their <b>never-give-up attitude</b> and strong connection to their <i>local community</i>, Mainz 05 continues to be a symbol of <b>ambition</b> and <b>perseverance</b> in German football.</p>
            `,
        },
        {
            name: "Manager - James Devine",
            description: `
				<p><b>James Devine’s entry into football management</b> came out of nowhere, as far as records show. With no prior managerial experience, his appointment at <b>Mainz 05</b> raised eyebrows across the footballing world. Many speculate that he "bought" his way into the role—though not through the transaction of cash—but rather through means yet to be uncovered. </p><br>
				<p>Despite these doubts, Devine has made an immediate impact. Known for his <b>attacking football</b> and a relentless <i>gegenpress style</i>, he quickly turned Mainz into a serious contender. However, his inexperience often sees him retreat to safer approaches when plans falter, showcasing both his unpredictability and room for growth.</p><br>
				<p>The <b>2024-25 season</b> was a mix of highs and lows for Devine. Leading the Bundesliga for a remarkable <b>30 weeks</b>, Mainz’s form dipped late, resulting in a <b>3rd-place finish</b>. Yet, the season ended triumphantly with the club lifting their first-ever <b>Europa Conference League Trophy</b>, solidifying his place in Mainz’s history books. Reflecting on this, Devine quipped: <i>"Guess it was alright—should have been more."</i></p><br>
				<p>Devine’s fiery nature has fueled a bitter rivalry with Augsburg manager <b>Matthew Brierley</b>. Their clashes, often marked by explosive exchanges, have become infamous. <b>BriSports News</b> now enforces strict security when they are in the same room. Meanwhile, his relationship with Jack Apted is marked by mutual respect—<i>"for now anyway,"</i> as Devine commented.</p><br>
				<p>Known for his <b>sharp tongue</b> and humor, Devine thrives on <i>mind games</i>. His mantra, <b>"The game is won before kickoff,"</b> reflects his love for calculated jabs to throw opponents off, Devine doesnt fall under the professional category based on the current norms. On the training ground, his blunt, no-nonsense approach demands resilience from players, expecting them to either adapt or be replaced.</p>
				`
        },
        {
            name: "Active Formation",
            description: `
			<p>Mainz 05’s <b>4-2-3-1 formation</b> under James Devine prioritizes <i>relentless attacking football</i> and forward momentum. Every player is encouraged to contribute to the offensive push, with even the <b>central defenders</b> known for making bold, surging runs into the opposition half with the ball. This aggressive approach keeps opponents on the back foot, ensuring Mainz always remains a constant attacking threat.</p><br>
			<p>The midfield plays a <b>crucial playmaking role</b> in this system, dictating the tempo with incisive passing and creative vision. Unlike traditional defensive midfield setups, Mainz’s midfielders are encouraged to focus on unlocking defenses while still dropping back to assist defensively when necessary. This balance between offense and defense ensures fluid transitions throughout the game.</p><br>
			<p>Wide players and the <b>central attacking midfielder</b> are tasked with bringing creativity and flair, while the lone striker operates as the focal point for goals. Devine’s 4-2-3-1 combines tactical discipline with adventurous forward play, creating a style that reflects his commitment to <i>high-energy, attacking football</i> and keeps opponents guessing at every turn.</p>
			`
			
        },
		{
            name: "Best Eleven",
            description: `
				<ul>
    <li><b>GK - <button class="player-link" data-url="rodakstats.html">Marek Rodák</button></b><br>
    A £16.5m signing from Al-Ettifaq Football Club, Rodák quickly became a staple in Mainz 05’s success during the 2024/25 season with his reliable shot-stopping and composure under pressure.</li>
    
    <li><b>LB - <button class="player-link" data-url="aitnouristats.html">Rayan Aït-Nouri</button></b><br>
    Joining on a free transfer from Wolves after a bust-up with the club manager, Aït-Nouri has proven his strength and versatility, becoming a dependable figure for the 05ERs.</li>
    
    <li><b>LCB - <button class="player-link" data-url="godfreystats.html">Ben Godfrey</button></b><br>
    Signed on a free transfer from Atalanta, Godfrey’s commanding performances have reminded his former Serie A club of the talent they lost, solidifying Mainz’s defense.</li>
    
    <li><b>RCB - <button class="player-link" data-url="anelstats.html">Anel Ahmedhodžić</button></b><br>
    A £31m signing from Sheffield United, Anel has become the cornerstone of Mainz’s defense, combining physicality and tactical awareness to dominate opposition attacks.</li>
    
    <li><b>RB - <button class="player-link" data-url="bellerinstats.html">Héctor Bellerín</button></b><br>
    A reborn star, Bellerín has shown that he still possesses the speed and skill to be one of the greatest right-backs to grace the game, thriving in Mainz’s setup.</li>
    
    <li><b>LDM - <button class="player-link" data-url="chotardstats.html">Joris Chotard</button></b><br>
    A £20.5m signing from Montpellier, the Frenchman affectionately known as "Custard" by his teammates has added flair and consistency to Mainz’s midfield. The nickname’s origin remains a mystery!</li>
    
    <li><b>RDM - <button class="player-link" data-url="nevesstats.html">João Neves</button></b><br>
    The Portuguese wonderkid has proven age is just a number, with his exceptional vision and reading of the game rivaling that of seasoned veterans in the Bundesliga.</li>
    
    <li><b>LW - <button class="player-link" data-url="weiperstats.html">Nelson Weiper</button></b><br>
    The Mainz 05 prodigy, Weiper is a product of the club’s academy, inspiring the next generation with his journey from youth ranks to first-team stardom.</li>
    
    <li><b>CAM - <button class="player-link" data-url="diegostats.html">Diego</button></b><br>
    A Bundesliga legend reborn, Diego has brought his raw talent and creativity back to life, proving that class is permanent in the modern game.</li>
    
    <li><b>RW - <button class="player-link" data-url="malcomstats.html">Malcom</button></b><br>
    The Brazilian winger has reinvented himself after past struggles, now dominating with blistering speed and clinical decision-making in Mainz’s attack.</li>
    
    <li><b>ST - <button class="player-link" data-url="podolskistats.html">Lukas Podolski</button></b><br>
    Another Bundesliga icon reborn, Podolski leads the line with finesse and experience, showing that size isn’t everything when you possess world-class finishing and football IQ.</li>
</ul>`
        },
    ];

    const team = teamInfo[index];
    dynamicContent.innerHTML = `
        <h1>${team.name}</h1>
        <p>${team.description}</p>
    `;
};
