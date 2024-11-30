const updateDynamicContent = (index) => {
    const dynamicContent = document.getElementById("dynamic-content");
    const teamInfo = [
        {
            name: "SV Werder",
            description: `
                <p><b>Founded in 1899</b>, SV Werder Bremen is one of Germany’s most historic football clubs, known for its <i>passionate fanbase</i> and storied legacy. Based at the iconic <b>Weserstadion</b>, the club has claimed multiple <b>Bundesliga titles</b>, <b>DFB-Pokal trophies</b>, and made its mark on European football over the decades.</p><br>
                <p>In the <b>2024-25 season</b>, Werder Bremen reached <i>new heights</i>, winning the <b><u>Champions League</u></b> in a thrilling final against rival manager <span style="color:#d9534f;">Matthew Brierley</span> of Augsburg—a match widely regarded as <i>one for the ages</i>. Despite finishing <b>2nd in the Bundesliga</b> that season, narrowly behind Brierley’s Augsburg, Bremen’s relentless determination saw them <b>leapfrog Mainz 05</b>, who had led the league for over <b>30 weeks</b>.</p><br>
                <p>This remarkable campaign exemplified Werder Bremen’s <i>never-give-up mindset</i>, earning them admiration and cementing their status as a force to be reckoned with in European football.</p>
            `,
        },
        {
            name: "Manager - Jack Apted",
            description: `
				<p><b>Jack Apted’s journey</b> to football management began humbly in the gritty depths of the <i>English lower leagues</i>, where he earned his stripes managing a struggling semi-professional team. Known for his <b>insatiable thirst for knowledge</b>, Apted immersed himself in football’s tactical evolution, blending philosophies from some of the game’s greatest minds. His <i>adaptable approach</i> on the pitch has made him one of the most unpredictable managers in modern football, constantly leaving opponents guessing about what style he’ll bring next.</p><br>
				<p>The <b>SV Werder Bremen</b> job in 2023 was Apted’s <u>breakout moment</u>—a chance to prove his methods on the grandest stage. In just two years, he transformed the club into a <b>European powerhouse</b>. The <b>2023-24 season</b> saw Werder secure a respectable <b>4th-place finish in the Bundesliga</b>, but it was in the <b>2024-25 season</b> that Apted’s brilliance truly shone. Leading Werder to <b>2nd place in the Bundesliga</b>, he also guided the team to <u><i>Champions League glory</i></u>, defeating rival Matthew Brierley’s Augsburg in an <i>unforgettable final</i>. This triumph solidified his reputation as one of football’s elite managers.</p><br>
				<p>On the training ground, Apted is a <b>players’ manager</b> through and through. He prides himself on his <i>exceptional communication skills</i> and creating a cohesive dressing room atmosphere. However, he is no pushover—those who mistake his kindness for weakness often find themselves swiftly shown the door. Balancing his belief in <b>spending on developed talent</b> with his commitment to <i>nurturing rising stars</i>, Apted’s squads are a blend of experience and youthful potential, creating a harmonious yet dangerous team dynamic.</p><br>
				<p>Off the pitch, Jack Apted is as <b>witty and humorous</b> as he is calculating on it. Known for cracking jokes at press conferences and even pulling off a <i>spot-on Roy Keane impression</i> in the changing rooms, he is a <b>respected and beloved figure</b> among players, staff, and fans alike. Unlike some of his contemporaries, Apted avoids unnecessary drama, letting his results and his dedication to <i>data-driven decision-making</i> do the talking.</p>
				`
        },
        {
            name: "Active Formation",
            description: `
			<p>Jack Apted’s <b>4-2-3-1 formation</b> is a proven system designed to balance <i>defensive stability</i> and <i>attacking flair</i>. The setup relies on a <b>Left Winger (LW)</b>, <b>Right Winger (RW)</b>, and <b>Central Attacking Midfielder (CAM)</b>, supported by <b>two Defensive Midfielders</b> who act as the team’s anchor, protecting the backline while initiating attacks.</p><br>
			<p>This formation demands <b>versatile</b> and <b>intelligent players</b>. The wingers must combine <i>pace</i> and <i>creativity</i> to stretch defenses, while the CAM is the <u>playmaker</u>, orchestrating attacks and linking the midfield to the forward line. The Defensive Midfielders are essential, offering <b>positional awareness</b>, <b>strength</b>, and the ability to transition quickly between defense and attack.</p><br>
			<p>Built to adapt to any situation, the <b>4-2-3-1</b> allows for a <i>dynamic style of play</i>, whether it’s <b>controlling possession</b>, <b>counter-attacking</b>, or <b>pressing high</b>. With the right players, it becomes a <i>formidable system</i> capable of <b>dominating opponents</b> and thriving on Europe’s biggest stages.</p>
			`
			
        },
		{
            name: "Best Eleven",
            description: `
				<ul>
    <li><b>GK - <button class="player-link" data-url="butlandstats.html">Jack Butland</button><br>
    Reborn at 17 years old, Butland’s 2024-25 season was a standout as he conceded only 25 goals while securing 17 clean sheets. His composure and reflexes made him a cornerstone in Werder’s defense.</li>
    
    <li><b>LB - <button class="player-link" data-url="bardstats.html">Melvin Bard</button><br>
    A £14m transfer from OGC Nice, Bard has been a reliable presence at left-back. With a 7.15 average match rating over the past two seasons, he’s been crucial in creating chances and providing width in attack.</li>
    
    <li><b>LCB - <button class="player-link" data-url="struijkstats.html">Pascal Struijk</button><br>
    Signed on a free transfer midway through the 23-24 season, Struijk impressed with his solidity and consistency. His performances earned him a blockbuster £45m transfer to Borussia Dortmund at the end of 24-25.</li>
    
    <li><b>RCB - <button class="player-link" data-url="perstats.html">Per Mertesacker</button><br>
    A Bundesliga legend reborn, Mertesacker’s towering 6ft 6in frame and exceptional jumping reach have been critical in Werder’s backline. His 7.14 average rating in 24-25 reflects his enduring quality.</li>
    
    <li><b>RB - <button class="player-link" data-url="jelertstats.html">Elias Jelert</button><br>
    A £21.5m signing from Galatasaray in 2024, Jelert has been pivotal in both defense and attack. His ability to overlap and deliver quality balls into the box has made him a key player on the right flank.</li>
    
    <li><b>LDM - <button class="player-link" data-url="lynenstats.html">Senne Lynen</button><br>
    A £1.7m bargain from Royale Union Saint-Gilloise, Lynen has been a workhorse in midfield, missing only seven games across two seasons. His reliability and vision have anchored Werder’s midfield brilliantly.</li>
    
    <li><b>RDM - <button class="player-link" data-url="weiglstats.html">Julian Weigl</button><br>
    Arriving on a free transfer from Borussia Mönchengladbach, Weigl had a point to prove. His 7.0 average rating in 24-25 highlighted his ability to control the midfield and dictate the tempo of games.</li>
    
    <li><b>LW - <button class="player-link" data-url="gouiristats.html">Amine Gouiri</button><br>
    Plagued by injuries, Gouiri’s appearances were limited, but when he played, he delivered. Before his £25m transfer to Al-Ittihad Club Jeddah in January 2024, he scored 7 goals in 20 games and earned 3 Player of the Match awards, showcasing his clinical ability in key moments.</li>
    
    <li><b>CAM - <button class="player-link" data-url="judestats.html">Jude Bellingham</button><br>
    After a high-profile fallout with Real Madrid, Bellingham found a home at Werder. Playing nearly every match across two seasons, he contributed 20 goals and 11 assists, showcasing his world-class talent.</li>
    
    <li>RCAM - <button class="player-link" data-url="welbeckstats.html">Danny Welbeck</button><br>
    Known for his striking prowess, Welbeck adapted to life on the wing, combining his raw speed and versatility. His ability to cut inside and create danger made him a valuable asset to Werder’s attacking force.</li>
    
    <li><b>ST - <button class="player-link" data-url="haalandstats.html">Erling Haaland</button><br>
    The Norwegian wonderkid joined Werder on loan in 2024 under mysterious circumstances. Haaland’s stint proved unforgettable as he dominated defenses, showing why he’s at the top of the footballing food chain.</li>
	</ul>`
        },
    ];

    const team = teamInfo[index];
    dynamicContent.innerHTML = `
        <h1>${team.name}</h1>
        <p>${team.description}</p>
    `;
};
