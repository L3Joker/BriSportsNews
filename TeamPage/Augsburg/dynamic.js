const updateDynamicContent = (index) => {
    const dynamicContent = document.getElementById("dynamic-content");
    const teamInfo = [
        {
            name: "Augsburg",
            description: `
                <p><b>Founded in 1907</b>, FC Augsburg has a rich history in German football, steadily rising through the ranks to establish itself as a Bundesliga force. Known for their passionate fans and never-say-die attitude, Augsburg has evolved from underdogs to champions, rewriting the narrative of the league.</p>
                <p>In a <b>historic</b> feat, Augsburg claimed <b>back-to-back Bundesliga titles</b>, cementing their dominance at the pinnacle of German football. Adding to their illustrious run, they are also the current holders of the <b>DFB-Pokal Trophy</b>, showcasing their ability to shine in the country’s most prestigious cup competition.</p>
                <p>With a blend of experienced stars and rising talents, Augsburg continues to set the standard for success in the Bundesliga, driven by a vision of excellence on and off the pitch.</p>
            `,
        },
        {
            name: "Manager - Matthew Brierley",
            description: `
				<p>From humble beginnings in the lower leagues, Matthew Brierley’s journey to the top of football management is nothing short of inspirational. Starting as a part-time coach while working as a PE teacher, Brierley’s passion for the game and tactical ingenuity quickly caught the attention of football insiders. After grinding his way through smaller clubs, he was finally handed the reins at Augsburg in 2023—a decision that would change the club’s history forever.</p>
				<p>In his debut season, Brierley stunned the footballing world by leading Augsburg to a sensational domestic double, claiming both the Bundesliga title and the DFB-Pokal in the 2023-24 season. Far from being a one-season wonder, he proved his mettle the following year by besting fierce rival <b>James Devine</b> in a <b>heated</b> title race, securing an unprecedented <b>treble</b> of the Bundesliga, Pokal, and SuperCup.</p>
				<p>Brierley’s attacking philosophy, encapsulated by his mantra, “<i>My team will score one more than you</i>,” has become a hallmark of Augsburg’s thrilling style of play. His fearless approach nearly brought the elusive quadruple to Augsburg, only narrowly missing out after a dramatic Champions League final against rival <b>Jack Apted</b>.</p>
				<p>Loved by his players and respected by his peers, Brierley has cemented himself as one of the most exciting managers in modern football, delivering glory to Augsburg and etching his name in Bundesliga folklore.</p>
				`
        },
        {
            name: "Active Formation",
            description: `
			<p>Augsburg’s signature 4-2-3-1 formation is the embodiment of Matthew Brierley’s fearless philosophy: “<i>My team will score one more than you</i>.” Designed for maximum impact, this setup emphasizes a dynamic attack while maintaining a defensive core that feels like a brick wall.</p>
			<p>At its heart are three central attacking midfielders, combining agility and technical <b>brilliance</b> to dismantle opposition defenses. Supporting them are two disciplined defensive midfielders, providing a rock-solid base and allowing the attacking players to thrive. Up top, a <b>lethal</b> striker spearheads the attack, ensuring a constant goal threat.</p>
			<p>This formation thrives on players who are quick, smart, and technically gifted, making Augsburg one of the most <b>electrifying</b> teams to watch. It’s not just a strategy; it’s a statement of intent, showcasing Brierley’s unwavering belief in taking the game to the opponent.</p>
			`
			
        },
		{
            name: "Best Eleven",
            description: `
				<ul>
    <li><b>GK - <a href="neuer-stats.html" target="_blank">Manuel Neuer</a></b><br>
    After a dramatic January 2023 transfer from Bayern Munich, Neuer proved his worth with 12 clean sheets in just 18 games. Now a cornerstone for Augsburg, his 33-game performance in 24-25 with 17 clean sheets solidifies his legendary status.</li>
    
    <li><b>LB - <a href="tsimikas-stats.html" target="_blank">Kostas Tsimikas</a></b><br>
    A £22.5m signing from Liverpool, Tsimikas delivered consistency and creativity in the 23-24 season, posting a 7.33 average match rating, scoring once, and assisting four times.</li>
    
    <li><b>LCB - <a href="kjaer-stats.html" target="_blank">Simon Kjær</a></b><br>
    A tactical prodigy at just 17 years old, Kjær silenced doubters with 34 solid appearances in his debut season, proving speed isn't everything when you have a footballing brain.</li>
    
    <li><b>RCB - <a href="naldo-stats.html" target="_blank">Naldo</a></b><br>
    A Bundesliga icon reborn, Naldo brought his legendary defensive presence to Augsburg. Despite injuries limiting him to 21 games in his first season, he remains a pivotal figure when fit.</li>
    
    <li><b>RB - <a href="maffeo-stats.html" target="_blank">Pablo Maffeo</a></b><br>
    Signed for £7m from Mallorca in 23-24, Maffeo contributed heavily with 3 goals and 8 assists across 31 games. His stellar performances earned a lucrative £21m transfer to Barcelona in January 24-25.</li>
    
    <li><b>LDM - <a href="berg-stats.html" target="_blank">Patrick Berg</a></b><br>
    A bargain buy at £3.8m from FK Bodø/Glimt, Berg impressed with a 7.21 average rating in his debut season, providing calm and control in Augsburg’s midfield.</li>
    
    <li><b>RDM - <a href="karazor-stats.html" target="_blank">Atakan Karazor</a></b><br>
    A £5m acquisition from VfB Stuttgart, Karazor grew into a vital part of the midfield engine room, increasing his average match rating from 7.21 in 23-24 to 7.25 in 24-25.</li>
    
    <li><b>LCAM - <a href="bardghji-stats.html" target="_blank">Roony Bardgji</a></b><br>
    A £17m wonderkid signing, Bardghji’s raw talent shone brightly as he racked up 10 goals and 2 assists in 29 appearances, with the potential to become a world-class attacking threat.</li>
    
    <li><b>CAM - <a href="Yamal-stats.html" target="_blank">Lamine Yamal</a></b><br>
    This Spanish wonderkid is thriving at Augsburg, scoring 31 goals and assisting 14 times in just 65 games. His dazzling performances justify the hype and accolades he’s received.</li>
    
    <li><b>RCAM - <a href="messi-stats.html" target="_blank">Lionel Messi</a></b><br>
    The 8-time Ballon d’Or winner has been reborn into a 20-year-old body, unleashing chaos on defenders and rewriting his legacy for another decade.</li>
    
    <li><b>ST - <a href="abraham-stats.html" target="_blank">Tammy Abraham</a></b><br>
    Augsburg’s lethal finisher, Abraham has dominated the Bundesliga, claiming back-to-back top scorer titles with over 30 goals in each of the past two seasons. A true predator in front of goal.</li>
	</ul>`
        },
    ];

    const team = teamInfo[index];
    dynamicContent.innerHTML = `
        <h1>${team.name}</h1>
        <p>${team.description}</p>
    `;
};
