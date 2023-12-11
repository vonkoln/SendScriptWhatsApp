async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

					THE MATRIX



					Written by

				Larry and Andy Wachowski
					April 8, 1996
	FADE IN ON:

	COMPUTER SCREEN

	So close it has no boundaries.

	A blinking cursor pulses in the electric darkness like a
	heart coursing with phosphorous light, burning beneath
	the derma of black-neon glass.

	A PHONE begins to RING, we hear it as though we were 
	making the call.  The cursor continues to throb,
	relentlessly patient, until --

					MAN (V.O.)
			Hello?

	Data now slashes across the screen, information flashing
	faster than we read.

					SCREEN
			Call trans opt:  received.
			2-19-96  13:24:18  REC:Log>

					WOMAN (V.O.)
			I'm inside.  Anything to report?

	We listen to the phone conversation as though we were on
	a third line.  The man's name is CYPHER.  The woman, 
	TRINITY.

					CYPHER (V.O.)
			Let's see.  Target left work at
			5:01 PM.

					SCREEN
			Trace program:  running.

	The entire screen fills with racing columns of numbers.
	Shimmering like green-electric rivets, they rush at a 10-
	digit phone number in the top corner.

					CYPHER (V.O.)
			He caught the northbound Howard 
			line. Got off at Sheridan.  
			Stopped at 7-11.  Purchased six-
			pack of beer and a box of Captain 
			Crunch.  Returned home.

	The area code is identified.  The first three numbers
	suddenly fixed, leaving only seven flowing columns.

	We begin MOVING TOWARD the screen, CLOSING IN as each 
	digit is matched, one by one, snapping into place like
	the wheels of a slot machine.

					TRINITY (V.O.)
			All right, you're relieved.  Use
			the usual exit.

					CYPHER (V.O.)
			Do you know when we're going to
			make contact?

					TRINITY
			Soon.

	Only two thin digits left.

					CYPHER (V.O.)
			Just between you and me, you don't 
			believe it, do you?  You don't 
			believe this guy is the one?

					TRINITY (V.O.)
			I think Morpheus believes he is.

					CYPHER (V.O.)
			I know.  But what about you?

					TRINITY (V.O.)
			I think Morpheus knows things that
			I don't.

					CYPHER (V.O.)
			Yeah, but if he's wrong --

	The final number pops into place --

					TRINITY (V.O.)
			Did you hear that?

					CYPHER (V.O.)
			Hear what?

					SCREEN
			Trace complete.  Call origin:
			#312-555-0690

					TRINITY (V.O.)
			Are you sure this line is clean?

					CYPHER (V.O.)
			Yeah, course I'm sure.

	We MOVE STILL CLOSER, the ELECTRIC HUM of the green 
	numbers GROWING INTO an OMINOUS ROAR.

					TRINITY (V.O.)
			I better go.

					CYPHER (V.O.) 
			Yeah.  Right.  See you on the other side.

	She hangs up as we PASS THROUGH the numbers, entering the
	netherworld of the computer screen.

	Where gradually the sound of a police radio grows around 
	us.

					RADIO (V.O.)
			Attention all units.  Attention
			all units.

	Suddenly, a flashlight cuts open the darkness and we find
	ourselves in --


	INT.  CHASE HOTEL - NIGHT

	The hotel was abandoned after a fire licked its way 
	across the polyester carpeting, destroying several rooms 
	as it spooled soot up the walls and ceiling leaving 
	patterns of permanent shadow.

	We FOLLOW four armed POLICE officers using flashlights as 
	they creep down the blackened hall and ready themselves
	on either side of room 303.

	The biggest of them violently kicks in the door --

	The other cops pour in behind him, guns thrust before
	them.

					BIG COP
			Police!  Freeze!

	The room is almost devoid of furniture.  There is a fold-
	up table and chair with a phone, a modern, and a powerbook 
	computer.  The only light in the room is the glow of the
	computer.

	Sitting there, her hands still on the keyboard, is 
	TRINITY; a woman in black leather.

					BIG COP
			Get your hands behind your head!

	Trinity rises.

					BIG COP
			Hands behind your head!  Now!  Do
			it!

	She slowly puts her hands behind her head.


	EXT.  CHASE HOTEL - NIGHT

	A black sedan with tinted windows glides in through the 
	police cruisers.

	AGENT SMITH and AGENT BROWN get out of the car.

	They wear dark suits and sunglasses even at night.  They 
	are also always hardwired; small Secret Service earphones 
	in one ear, its cord coiling back into their shirt
	collars.

					AGENT SMITH
			Lieutenant?

					LIEUTENANT
			Oh shit.

					AGENT SMITH 
			Lieutenant, you were given 
			specific orders --

					LIEUTENANT
			I'm just doing my job.  You gimme 
			that Juris-my dick-tion and you 
			can cran it up your ass.

					AGENT SMITH
			The orders were for your protection.

	The Lieutenant laughs.

					LIEUTENANT
			I think we can handle one little
			girl.

	Agent Smith nods to Agent Brown as they start toward the
	hotel.

					LIEUTENANT
			I sent two units.  They're 
			bringing her down now.

					AGENT SMITH
			No, Lieutenant, your men are dead.


	INT.  CHASE HOTEL

	The Big Cop flicks out his cuffs, the other cops holding 
	a bead.  They've done this a hundred times, they know 
	they've got her, until the Big Cop reaches with the cuff 
	and Trinity moves --

	It almost doesn't register, so smooth and fast, inhumanly 
	fast.

	The eye blinks and Trinity's palm. snaps up and the nose 
	explodes, blood erupting.  The cop is dead before he
	begins to fall.

	And Trinity is moving again --

	Seizing a wrist, misdirecting a gun, as a startled cop 
	FIRES --

	A head explodes.

	In blind panic, another airs his gun, the barrel, a fixed 
	black hole --

	And FIRES --

	Trinity twists out of the way, the bullet missing as she 
	reverses into a roundhouse kick, knocking the gun away.

	The cop begins to scream when a jump kick crushes his 
	windpipe, killing the scream as he falls to the ground.

	She looks at the four bodies.

					TRINITY
			Shit.


	EXT.  CHASE HOTEL

	Agent Brown enters the hotel, while Agent Smith heads for 
	the alley.


	INT.  CHASE HOTEL

	Trinity is on the phone, pacing.  The other end is 
	answered.

					MAN (V.O.)
			Operator.

					TRINITY
			Morpheus!  The link was traced!  I
			don't know how.

					MORPHEUS (V.O.)
			I know.  Stay calm.

					TRINITY
			Are there any agents?

					MORPHEUS (V.O.)
			Yes.

					TRINITY
			Goddamnit!

					MORPHEUS (V.O.)
			You have to focus.  There is a 
			phone.  Wells and Laxe.  You can
			make it.

	She takes a deep breath, centering herself.

					TRINITY
			All right --

					MORPHEUS (V.O.)
			Go.

	She drops the phone.


	INT.  HALL

	She bursts out of the room as Agent Brown enters the hall,
	leading another unit of police.  Trinity races to the 
	opposite end, exiting through a broken window onto the 
	fire escape.


	EXT.  FIRE E5CAPE

	In the alley below, Trinity sees Agent Smith staring at 
	her.  She can only go up.


	EXT.  ROOF

	On the roof, Trinity is running as Agent Brown rises over 
	the parapet, leading the cops in pursuit.

	Trinity begins to jump from one roof to the next, her 
	moverents so clean, gliding in and out of each jump,
	contrasted to the wild jumps of the cops.

	Agent Brown, however, has the same unnatural grace.

	The METAL SCREAM of an EL TRAIN is heard and Trinity 
	turns to it, racing for the back of the building.

	The edge falls away into a wide back alley.  The next 
	building is over 40 feet away, but Trinity's face is 
	perfectly calm, staring at some point beyond the other 
	roof.

	The cops slow, realizing they are about to see something 
	ugly as Trinity drives at the edge, launching herself 
	into the air.

	From above, the ground seems to flow beneath her as she 
	hangs in flight

	Then hitting, somersaulting up, still running hard.

					COP
			Motherfucker -- that's impossible!

	They stare, slack-jawed, as Agent Brown duplicates the 
	move exactly, landing, rolling over a shoulder, up onto 
	one knee.

	Just below the building are the runbling tracks of 
	riveted steel.  The TRAIN SCREECHES beneath her, a 
	rattling blur of gray metal.  Trinity junps, landing
	easily.

	She looks back just as Agent Brown hurls through the air 
	barely reaching the last car

	Agent Brown stands, yanking out a gun.

	Trinity is running hard as BULLETS WHISTLE past her head.

	Ahead she sees her only chance, 50 feet beyond the point 
	where the train has begun to turn, there is --

	A window; a yellow glow in the midst of a dark brick
	building.

	Trinity zeroes in on it, running as hard as she can, her 
	speed compounded by the train.  The SCREAM of the STEEL 
	rises as she nears the edge where the train rocks into the
	turn.

	Trinity hurtles into the empty night space, her body 
	leveling into a dive.  She falls, arms covering her head
	as --

	The whole world seems to spin on its axis --

	And she crashes with an EXPLOSION of GLASS and WOOD, then 
	falls onto a back stairwell, tumbling, bouncing down
	stairs bleeding, broken --

	But still alive.

	Through the smashed window, she glimpses Agent Brown,
	still on the train, his tie and coat whipping in the
	wind; stone-faced, he touches his ear piece as the train 
	slides him past the window.

	Trinity tries to move.  Everything hurts.

					TRINITY
			Get up, Trinity.  You're fine.
			Get up -- just get up!

	She stands and limps down the rest of the stairs.


	EXT.  STREET

	Trinity emerges from the shadows of an alley and, at the 
	end of the block, in a pool of white street light, she
	sees it.

	The telephone booth.

	Obviously hurt, she starts down the concrete walk,
	focusing in completely, her pace quickening, as the PHONE
	begins to RING.

	Across the street, a garbage truck suddenly u-turns, its 
	TIRES SCREAMING as it accelerates.

	Trinity sees the headlights on the truck arcing at the
	telephone booth as if taking aim.

	Gritting through the pain, she races the truck --

	Slamming into the booth, the headlights blindingly
	bright, bearing down on the box of Plexiglas just as --

	She answers the phone.

	There is a frozen instant of silence before the hulking 
	mass of dark metal lurches up onto the sidewalk --

	Barreling through the booth, bulldozing it into a brick
	wall, smashing it to Plexiglas pulp.

	After a moment, a black loafer steps down from the cab of 
	the garbage truck.  Agent Smith inspects the wreckage.
	There is no body.  Trinity is gone.

	His jaw sets as he grinds his molars in frustration.
	AGENT JONES walks up behind him.

					AGENT SMITH
			Did you get anything from the
			room?

					AGENT JONES
			Their next target.  The name is
			Neo.

	The handset of the pay phone lays on the ground,
	separated in the crash like a severed limb.

					AGENT SMITH
			We'll need a search running.

					AGENT JONES
			It's already begun.

	We are SUCKED TOWARDS the mouthpiece of the phone, CLOSER 
	and CLOSER, UNTIL the smooth gray plastic spreads out 
	like a horizon and the small HOLES WIDEN until we fall
	through one --

	Swallowed by the darkness that becomes --

	A computer screen.

	We are on-line, inside a chat room called "The Matrix." 
	It is an exklusive web-site where hackers hang out.

					SCREEN
			JACKON:  I heard Morpheus has been
			on this board.
			SUPERASTIC:  Morpheus doesn't even
			exist and the Matrix is nothing 
			but an advertising gimmick 4 a new
			game.
			TIMAXE:  All I want to know is
			Trinity really a girl?
			LODIII:  87% of all women on line
			are really men.
			QUARK:  The Matrix is a euphemism 
			for the government.
			SUPERASTIC:  No, The Matrix is the
			system controlling our lives.
			TIMAXE:  You mean MTV.
			SUPERASTIC:  I mean Sega.
			FOS4:  ALL HAIL SEGA!!!

	We drift back from the electric conversation entering --


	INT.  NEO'S APARTMENT

	It is a studio apartirent that seems overgrown with
	technology.

	Weed-like cables coil everywhere, duct-taped into
	thickets that wind up and around the legs of several
	desks.

	Tabletops are filled with cannibalized equipment that lay
	open like an autopsied corpse.

	We turn towards the center of this rat-nest of
	technology, following the slurping and crunching of
	cereal.  We pass an open box of Capln Crunch as we find --

	NEO, a younger man who knows more about living inside a 
	computer than living outside one.

					NEO
			Fuckin' idiots don't know shit.

	He finishes his cereal and is about to disconnect when an 
	anonynous message slices onto the screen.

					SCREEN
			Do you want to know what the
			Matrix is, Neo?

	Neo is frozen when he reads his name.

					SCREEN
			SUPERASTIC:  Who said that?
			JACKON:  Who's Neo?
			GIBSON:  This is a private board.

			If you want to know, follow the
			white rabbit.

					NEO
			What the hell...

					SCREEN
			TIMAXE:  Someone is hacking the
			hackers!
			FOS4:  It's Morpheus!!!!!
			JACKON:  Identify yourself.

			Knock, knock, Neo.

	A chill runs down his spine and when someone KNOCKS on
	his door he almost jumps out of his chair.

	He looks at the door, then back at the computer but the
	message is gone.

	He shakes his head, not completely sure what happened.
	Again, someone knocks.

	Cautiously, Neo approaches the door.

					VOICE (O.S.)
			Hey, Tommy-boy!  You in there?

	Recognizing the voice, he relaxes and opens it.  ANTHONY,
	who lives down the hall, is standing outside with a group
	of friends.

					NEO
			What do you want, Anthony?

					ANTHONY
			I need your help, man.  Desperate.
			They got me, man.  The shackles of 
			fascism.

	He holds up the red notice that accompanies the Denver
	boot.

					NEO
			You got the money this time?

	He holds up two hundred dollars and Neo opens the door.
	Anthony's girlfriend, DUJOUR, stops in front of Neo.

					DUJOUR
			You can really get that thing off,
			right now?

					ANTHONY
			I told you, honey, he may look 
			like just another geek but this 
			here is all we got left standing 
			between Big Brother and the New
			World Order.


	EXT.  STREET

	A police officer unlocks a yellow metal boot from the
	wheel of an enormous oldsmobile.


	INT.  NEO'S APARTMENT

	They watch from the window as the cops, silently,
	robotically, climb into their van.

					ANTHONY
			Look at 'em.  Automatons.  Don't 
			think about what they're- doing or
			why.  Computer tells 'em what to
			do and they do it.

					FRIEND #l
			Thc banality of evil.

	He slaps the money in Neo's hand.

					ANTHONY
			Thanks, neighbor.

					DUJOUR
			Why don't you come to the party
			with us?

					NEO
			I don't know.  I have to work
			tomorrow.

					DUJOUR
			Come on.  It'll be fun.

	He looks up at her and suddenly notices on her black
	leather motorcycle jacket dozens of pins:  bands,
	symbols, slogans, military medals and --

	A small white rabbit.

	The ROOM TILTS.

					NEO
			Yeah, yeah.  Sure, I'll go.


	INT.  APARTMENT

	An older Chicago apartment; a series of halls connects a 
	chain of small high-ceilinged rooms lined with heavy
	casements.

	Smoke hangs like a veil, blurring the few lights there 
	are.

	Dressed predominantly in black, people are everywhere,
	gathered in cliques around pieces of furniture like
	jungle cats around a tree.

	Neo stands against a wall, alone, sipping from a bottle
	of beer, feeling completely out of place, he is about to
	leave when he notices a woman staring at him.

	The woman is Trinity.  She walks straight up to him.

	In the nearest room, shadow-like figures grind against
	each other to the pneumatic beat of INDUSTRIAL MUSIC.

					TRINITY
			Hello, Neo.

					NEO
			How did you know that --

					TRINITY
			I know a lot about you.  I've been
			wanting to meet you for some time.

					NEO
			Who are you?

					TRINITY
			My name is Trinity.

					NEO
			Trinity?  The Trinity?  The
			Trinity that cracked the I.R.S.
			Kansas City D-Base?

					TRINITY
			That was a long time ago.

					NEO
			Gee-zus.

					TRINITY
			What?

					NEO
			I just thought... you were a guy.

					TRINITY
			Most guys do.

	Neo is a little embarrassed.

					NEO
			Do you want to go sorewhere and
			talk?

					TRINITY
			No.  It's safe here and I don't
			have much time.

	The MUSIC is so loud they must stand very close, talking
	directly into each other's ear.

					NEO
			That was you on the board tonight.
			That was your note, wasn't it?

					TRINITY
			I had to gamble that you would see
			and they wouldn't.

					NEO
			Who wouldn't?

					TRINITY
			I can't explain everything to you.
			I'm sure that it's all going to
			seem very strange, but I brought
			you here to warn you, Neo.  You
			are in a lot of danger.

					NEO
			What?  Why?

					TRINITY
			They're watching you.  Something
			happened and they found out about
			you.  Normally, if our target is
			exposed we let it go.  But this
			time, we can't do that.

					NEO
			I don't understand --

					TRINITY
			You came here because you wanted
			to know the answer to a hacker's
			question.

					NEO
			The Matrix.  What is the Matrix?

					TRINITY
			Twelve years ago I met a man, a
			great man, who said that no one
			could be told the answer to that
			question.  That they had to see
			it, to believe it.

	Her body is against his; her lips very close to his ear.

					TRINITY
			He told me that no one should look
			for the answer unless they have to
			because once you see it,
			everything changes.  Your life and
			the world you live in will never
			be the same.  It's as if you wake
			up one morning and the sky is
			falling.

	There is a hypnotic quality to her voice and Neo feels
	the words like a drug, seeping into him.

					TRINITY
			The truth is out there, Neo.  It's
			looking for you and it will find
			you, if you want it to.

	She takes hold of him with her eyes.

					TRINITY
			That's all I can tell you right
			now.  Good-bye, Neo.  And good
			luck.

					NEO
			Wait.  Who was it?  Who was the
			man?

	She leans close, her lips alrost touching his ear as she
	whispers.

					TRINITY
			You know who.

	She turns and he watches her melt into the shifting wall
	of bodies.

	A SOUND RISES steadily, growing out of the music,
	pressing in on Neo until it is all he can hear as we --

							CUT TO:


	INT.  NEO'S APARTMENT

	The sound is an ALARM CLOCK, slowly dragging Neo to
	consciousness.  He strains to read the clock face:
	9:15 A.M.

					NEO
			Shitshitshit.


	EXT.  SKYSCRAPER

	The downtown office of CorTechs, a software development
	company.


	INT.  CORTECHS OFFICE

	The main offices are along each wall, the windows
	overlooking downtown Chicago.

	RHINEHEART, the ultimate company man, lectures Neo
	without looking at him, typing at his computer
	continuously.

	Neo stares at two window cleaners on a scaffolding
	outside, dragging their rubber squeegees down across the
	surface of the glass.

					RHINEHEART
			You have a problem, Mr. Anderson.
			You think that you're special.
			You believe that somehow the rules
			do not apply to you.

	He stops, glancing over his glasses at Neo, who turns in
	time.

					RHINEHEART
			Obviously, you are mistaken.

	His long, bony fingers resume clicking the keyboard.

					RHINEHEART
			This company is one of the top
			software companies in the world
			because every single employee
			understands that they are a part
			of a whole.  Thus, if an employee
			has a problem, the company has a
			problem.

	He turns again.

					RHINEHEART
			The time has come to make a 
			choice, Mr. Anderson.  Either you
			choose to be at your desk on time
			from this day forth, or you choose
			to find yourself another job.  Do
			I make myself clear?

					NEO
			Yes, Mr. Rhineheart.  Perfectly
			clear.

	INT.  NEO'S CUBICLE

	The entire floor looks like a human honeycomb, with a
	labyrinth of cubicles structured around a core of
	elevators.

	Neo slumps down into his chair.  A TALL EMPLOYEE stands
	up in the adjacent cubicle, leaning over the partition.

					TALL EMPLOYEE
			What did he say?

					NEO
			If I was late again, I'm going to
			be fired.

	He smirks.

					TALL EMPLOYEE
			Well, it was nice working with
			you.

	Neo glares at him, as he sinks down.

					VOICE (O.S.)
			Thomas Anderson?

	Neo turns and finds a FEDERAL EXPRESS MAN at his cubicle
	door.

					NEO
			Yeah.  That's me.

	Neo signs the electronic pad and the Fedex guy hands him
	the softpak.

					FEDEX
			Have a nice day.

	He opens the bag.  Inside is a CELLULAR PHONE.  It seems
	the instant it is in his hand, it RINGS.  Unnerved, he
	flips it open.

					NEO
			Hello?

					MORPHEUS (V.O.)
			Hello, Neo.  This is Morpheus.

	Neo's knees give and he falls into his chair.

					MORPHEUS (V.O.)
			I had hoped for this conversation
			to take place under less adverse
			conditions, but you can never
			count on hope, can you, Neo?

					NEO
			... no.

					MORPHEUS (V.O.)
			I've been watching you, Neo, and I
			want to meet you.  I don't know if
			you're ready to see what I want to
			show you, but unfortunately, we
			have run out of time.  They're
			coming for you, Neo.  And I'm not
			sure what they're going to do.

					NEO
			Who's coming for me?

					MORPHEUS (V.O.)
			Stand up and see for yourself.

					NEO
			Right now?

					MORPHEUS (V.O.)
			Yes.  Now.

	Neo starts to stand.

					MORPHEUS (V.O.)
			Do it slowly.  Slowly.  The elevator.

	His head slowly peeks up over the partition.

	At the elevator, he sees Agent Brown and Agent Jones
	leading a group of cops.  A female employee turns and
	points out Neo's cubicle.

	Neo ducks.

					NEO
			Holy fuckin' shit!

					MORPHEUS (V.O.)
			Yes.

	One cop stays at the elevator, the others follow the
	agents.

					NEO
			What the fuck do they want with
			me?!

					MORPHEUS (V.O.)
			I'm not sure.  But, if you don't
			want to find out, you better get
			out of there.

					NEO
			How?!

					MORPHEUS (V.O.)
			I can guide you out, but you have
			to do exactly what I say.

	The agents are moving quickly towards the cubicle.

					MORPHEUS (V.O.)
			The cubicle across from you is
			empty.

					NEO
			But what if...?

					MORPHEUS (V.O.)
			Go!  Now!

	Neo lunges across the hall, diving into the other cubicle
	just as the agents turn into his row.

	Neo crams himself into a dark corner, clutching the phone
	tightly to him.

					MORPHEUS (V.O.)
			Stay here for a moment.

	The agents enter Neo's empty cubicle.  A cop is sent to
	search the bathroom.

	Morpheus' voice is a whisper in Neo's ear.

					MORPHEUS (V.O.)
			A little longer...

	Brown is talking to the tall employee.

					MORPHEUS (V.O.)
			When I tell you, go to the end of
			the row to the first office on the
			left, stay.as low as you can.

	Sweat trickles down his forehead.

					MORPHEUS (V.O.)
			Now.

	Neo rolls out of the cubicle, his eyes popping as he
	freezes right behind a cop who has just turned around.

	Staying crouched, he sneaks away, down the row, SHOOTING
	across the opening to the first office on the left.

	The room is empty.

					MORPHEUS (V.O.)
			Good.  Now there is a window.
			Open it.

					NEO
			How do you know all this?

	Morpheus laughs quietly.

					MORPHEUS (V.O.)
			The answer is coming, Neo.

	He opens the window.  The window howls into the room.

					MORPHEUS (V.O.)
			Outside, there's a scaffold.  You
			can use it to get to the roof.

	Leaning out the window, he sees that the scaffold is
	several offices away.

					NEO
			No! It's too far away.

					MORPHEUS (V.O.)
			There's a small ledge.  It's a
			short climb.  You can make it.

	Neo looks down; the building's glass wall vertigos into a
	concrete chasm.

					NEO
			No way, no way, this is crazy.

					MORPHEUS (V.O.)
			Don't be controlled by your fear,
			Neo.  There are only two ways out
			of this building.  One is that
			scaffold.  The other is in their
			custody.  You take a chance either
			way.  I leave it to you.

	CLICK.  He hangs up.  Neo looks at the door, then back at
	the scaffold.

					NEO
			This is insane!  Why is this
			happening to me?  What did I do?
			I'm nobody.  I didn't do anything.
			Fuck! Fuck!  Fuck!

	He climbs up onto the window ledge.  Hanging onto the
	frame, he steps onto the small ledge.

	The scaffold seems even farther away.

					NEO
			I'm going to die.

	The WIND suddenly BLASTS up the face of the building,
	knocking Neo off balance.  Recoiling, he clings harder to
	the frame, and the phone falls out of his hand.

	He watches as it is swallowed by the distance beneath him.

					NEO
			This is insane.  I can't do this!
			Forget it!

	He climbs back into the office just as a cop opens the
	door.

					NEO
			I didn't do anything!


	EXT.  SKYSCRAPER

	The agents lead a handcuffed Neo out of the revolving
	doors, forcing his head down as they push him into the
	dark sedan.

	Trinity watches in the rear view mirror of her
	motorcycle.

					TRINITY
			Shit.

	INT.  INTERROGATION ROOM - CLOSE ON CAMERA MONITOR

	A wide angle view of a white roon, where Neo is sitting at
	a table alone.

	We MOVE INTO the monitor, ENTERING the room as if the
	monitor were a window.

	At the same moment, the door opens and the agents enter.

	Smith sits down across from Neo.  A thick manila envelope
	slaps down on the table between them.

	Neo glances at the name on the file: "Anderson, Thomas 
	A."

					AGENT SMITH
			As you can see, we've had our eye
			on you for some time now, Mr.
			Anderson.

	He opens the file.  Paper rattle marks the silence as he
	flips several pages.  Neo cannot tell if he is looking at
	the file or at him.

					AGENT SMITH
			It seems that you have been living
			two lives.  In one life, you are
			Thomas A. Anderson, program writer
			for a respectable software
			company.  You have a social
			security number, you pay your
			taxes and you help your land lady
			carry out her garbage.

	The pages continue to turn.

					AGENT SMITH
			The other life is lived in
			computers where you go by the
			hacker alias Neo, and are guilty
			of virtually every computer crime
			we have a law for, including the
			unauthorized use of the D.M.V.
			system for the removal of
			automobile boots.

	Neo feels himself sinking into a pit of shit.

					AGENT SMITH
			One of these,lives has a future.
			One of them does not.

	He closes the file.

					AGENT SMITH
			I'm going to be as forthcoming as
			I can be, Mr. Anderson.  You are
			here because we need your help.

	He removes his sunglasses; his eyes are an unnatural ice-
	blue.

					AGENT SMITH
			We know that you have been
			contacted by a certain individual.
			A man who calls himself Morpheus.
			Whatever you think you know about
			this man is irrelevant to the fact
			that he is wanted for acts of
			terrorism in more countries than
			any other man in the world.  He is
			considered by many authorities to
			be the most dangerous man alive.

	He leans closer.

					AGENT SMITH
			My colleagues believe that I am
			wasting my time with you, but I
			believe you want to do the right
			thing.  It is obvious that you are
			an intelligent man, Mr. Anderson,
			and that you are interested in the
			future.  That is why I believe you
			are ready to put your past
			mistakes behind you and get on
			with your life.

	Neo tries to match his stare.

					AGENT SMITH
			We are willing to wipe the slate
			clean, to give you a fresh start
			and all we are asking in return is
			your cooperation in bringing a
			known terrorist to justice.

	Neo nods to himself.

					NEO
			Yeah.  Wow.  That sounds like a
			real good deal.  But I think I
			have a better one.  How about I
			give you the finger --

	He does.

					NEO
			And you can cram that file up your
			Secret Service sphincter.

	Agent Smith puts his glasses back on.

					AGENT SMITH
			You disappoint me, Mr. Anderson.

					NEO
			You ain't seen nothing yet.

					AGENT SMITH
			The irony of your situation is
			that you have no choice.

					NEO
			You can't scare me with this
			gestapo crap.  I know my rights.
			I want my phone call.

	Agent Smith smiles.

					AGENT SMITH
			And tell me, Mr. Anderson, what
			good is a phone call iy you are
			unable to speak?

	The question unnerves Neo and strangely, he begins to
	feel the muscles in his jaw tighten.

	The standing agents snicker, watching Neo's confusion
	grow into panic.

	Neo feels his lips grow soft and sticky as they slowly
	seal shut, melding into each other until all trace of his
	mouth is gone.

	Wild with fear, he lunges for the door but the agents
	restrain him holding him in the chair.

					AGENT SMITH
			You are going to help us, Mr.
			Anderson, whether you want to or
			not.

	Smith nods and the other two rip open his shirt.

	From a case taken out of his suit coat, Smith removes a
	long, fiber-optic wire tap.

	Neo struggles helplessly as Smith dangles the wire over
	his exposed abdomen.  Horrified, he watches as the
	electronic device animates, become an organic creature
	that resembles a hybrid of an insect and a fluke worm.

	Thin, whisker-like tendrils reach out and probe into
	Neo's navel.  He bucks wildly as Smith drops the creature
	which looks for a moment like an uncut umbilical cord --

	Before it begins to burrow its, tail thrashing as it
	worms its way inside.


	INT.  NEO'S APARTMENT - NIGHT

	Screaming, Neo bolts upright in bed.

	He realizes that he is home.  Was it a dream?  His mouth
	is normal.  His stomach looks fine.  He starts to take a
	deep, everything-is-okay breath, when --

	The PHONE RINGS.

	It almost stops his heart.  It CONTINUES RINGING,
	building pressure in the room, forcing him up out of bed,
	sucking him in with an almost gravitational force.

	He answers it, saying nothing.

					MORPHEUS (V.O.).
			This line is tapped, so I must be
			brief.

					NEO
			The agents --

					MORPHEUS (V.O.)
			They got to you first, but they've
			underestimated how important you
			are.  If they knew what I know,
			you would probably be dead.

	Neo feels sick.

					MORPHEUS (V.O.)
			I don't know what you are thinking
			right now but I want you to
			understand that I will not give up
			on you until you give up on me.

	Neo's throat cracks, dry as the Sahara.

					MORPHEUS (V.O.)
			Do you still want to meet?

					NEO
			... Yes.

					MORPHEUS (V.O.)
			Take the Howard line south.

	CLICK.  He closes his eyes, unsure of what he has done.


	EXT.  EL TRAIN

	An EL TRAIN RAGES against its metal rails.


	INT.  TRAIN

	It is three a.m., and the train carries the usual urban
	night crawlers.  Neo sits alone, eyes shifting, watching
	everything nervously.

	There is a METAL BANG and TRAIN CLATTER fills the car as
	the door is opened.

	Neo turns and sees a large man enter.  He is wearing
	sunglasses and a black leather jacket.  His name is APOC
	and he walks straight at Neo.

					APOC
			Come with me.

	Neo stands just as the door at the opposite end opens and
	two police officers rush in, drawing their guns.

	Apoc grabs Neo, muscling him to the nearest exit.  There
	is no upcoming station.

	Apoc yanks the emergency brake and the train buckles
	against its own speed.  The cops are thrown back.  Neo
	slams against the metal rail.

	The doors open onto nothing and just when Neo regains his
	balance, Apoc shoves him backwards --

	He flies out from the train, arms windrilling as he falls
	from, the raised tracks --

	Hurtling towards a busy city street when, out of nowhere,
	a truck races under him and --

	He crashes into a large dumpster-bed filled with empty
	boxes.


	INT.  TRUCK BED

	Still shaking his head, Neo realizes he is not alone.  A
	man named Cabie is aiming a big gun at him.  Trinity is
	next to him, talking into a cellular phone.

					TRINITY
			We got him.  Call the chop-shop.

	She hangs up.

					TRINITY
			Listen to me, Neo.  You have to,
			trust us.

	She tears off a long strip of black duct-tape and reaches
	for his face.

					NEO
			What are you doing?

					TRINITY
			This has to be done for your
			protection and ours.

	She seals his eyes shut with the tape.

					TRINITY
			You can't understand right now,
			but if you're not one of us,
			you're one of them.


	EXT.  LOWER WACKER

	A featureless black van glides up to a staircase that
	curls down from the city's surface.

	trinity guides the blind Neo down the steps.  The back of
	the van slaps open, revealing a young, skinny man who
	looks to be still in his teens, wearing an outfit that is
	a cross between a surgeon and a telephone repair man.

	His name is GIZMO and he smiles lewdly at Trinity,
	exposing his teeth that are wired with weird-looking
	braces.

					GIZMO
			Va va va voom.  Still the hottest
			software around.

					TRINITY
			Hello, Gizmo.

	Neo hears the voices around him.

					GIZMO
			This is really the guy?  The guy
			that Morpheus thinks --

					TRINITY
			Yeah.

					GIZMO
			But he's so old.

					TRINITY
			Are you going to help us or aren't
			you?

					GIZMO
			Hacksaw.  Load up the copper-top
			and let's get the hell outta here.

	Hacksaw is a huge man in a leather welder's apron.  He
	shoulders Neo and hauls him into the van.

	A moment later the green lights of Lower Wacker curve
	over the tinted windshield as the van rushes through the
	underworld.


	INT.  VAN

	The chop-shop is filled with electronic gadgets, wired to
	meters and monitors.  There are shelves lined with
	medical supplies and rows of hanging tools, knives,
	cleavers, and stainless steel clamps.

	Neo is strapped down to an ambulance cart, listening
	nervously as Gizmo gets to work.

					GIZMO
			Okay, first we take a little look
			under the hood.

	He pulls up the goggles hanging at his neck and they
	blink to life with tiny halogen lights and lenses irising
	to varying levels of magnification.

					GIZMO
			You're going to feel a little
			prick.

	He inserts acupuncture-like needles into Neo's lower
	abdomen.  The needles are wired to video monitors.
	Hacksaw pilots the fiber-optic lens.

					NEO
			What are you doing?

					TRINITY
			We think you're bugged.  We can't
			take you to Morpheus until you're
			clean.

					GIZMO
			There it is.

	On a monitor, we see the bug nestled in among Neols large
	intestines.

					GIZMO
			Hit him with 10 ccs of local.

	Hacksaw loads a hypodermic needle and pumps an anesthetic
	around Neols navel.

	Using a device that looks like a miniature speculum,
	Gizmo inserts a knuckled dental pick.  Typing into a
	calculator keypad wired to the pick, he automates the
	tip.

	On the monitor, we watch it telescope out and the end
	separate into a tiny hooked, metal claw.

					GIZMO
			Here, kitty, kitty, kitty.

	The claw snags hold of the bug.

					GIZMO
			Gotcha!

	But the bug reacts violently.  Neo screams as it wraps
	itself around the soft tissue web of intestine.

					GIZMO
			Shit.

					TRINITY
			What's happening?

					GIZMO
			I don't know.  They've never done
			that before.

	Neo writhes in pain.

					GIZMO
			Hold him down.

					NEO
			Jesus!  God!

					TRINITY
			Do something!

					GIZMO
			I got it!  Maybe we can stun it.

					TRINITY
			Are you crazy?  That will kill
			him.

	We watch Neo, who can't see what they are talking about.

					GIZMO
			It'll work.  Come on, do it or
			Hacksaw will.

					NEO
			Do what?

	The instant he hears the word, he knows.

					TRINITY
			Clear.

					NEO
			Oh, shit --

	The cry is frozen in his mouth as the paddles hit his
	chest.  Gizmo wrestles with the bug.

					GIZMO
			Hit him again!

	Again, the electricity convulses through him as Gizmo
	yanks the speculum out.

					GIZMO
			Got it!

	Trinity touches Neo, who is just beginning to breathe.
	She eases the tape off his eyes.

					TRINITY
			Neo, are you okay?

	He nods.

					TRINITY
			It's over.  We got it.

	Hanging from the claw pick is the inanimate metal wire-
	tap.

					GIZMO
			Nasty little bugger, ain't it?


	INT.  HOTEL LAFAYETTE

	The van stops in a deserted alley behind a forgotten
	hotel.  The doors open and Trinity helps Neo get out.

					TRINITY
			Thanks for your help, Gizmo.

					GIZMO
			I just hope the man knows what
			he's doing.

	She nods then climbs out of the van.  Gizmo ogles the
	tight leather pants.

					GIZMO
			Goddamn, what I wouldn't give for
			a copy of that software.

	Trinity turns around.

					TRINITY
			Gizmo, you don't have the hardware
			to handle this software.

	He howls with adolescent laughter as the van pulls away.
	Trinity turns to Neo.

					TRINITY
			Let's go.  He's waiting.


	INT.  HOTEL LAFAYETTE

	It is a place of putrefying elegance, a rotting host of
	urban maggotry.

	Trinity leads Neo from the stairwell down the hall of the
	thirteenth floor.  They stop outside room 1313.

					TRINITY
			This is it.

	Neo can hear his own heart pounding.

					TRINITY
			Let me give one piece of advice.
			Be honest.  He knows more than you
			can possibly imagine.


	INT.  ROOM 1313

	Across the room, a dark figure stares out the tall
	windows veiled with decaying lace.  He turns and his
	smile lights up the room.

					MORPHEUS
			At last.

	He wears a long black coat and his eyes are invisible
	behind circular mirrored glasses.

	He strides to Neo and they shake hands.

					MORPHEUS
			Welcome, Neo.  As you no doubt
			have guessed, I am Morpheus.

					NEO
			It's an honor.

					MORPHEUS
			Please.  Come.  Sit.

	He nods to Trinity.

					MORPHEUS
			Thank you, Trinity.

	She bows her head sharply and exits through a door to an
	adjacent room.

	They sit across from one another in cracked, burgundy-
	leather chairs.

					MORPHEUS
			I imagine, right now, you must be
			feeling a bit like Alice, tumbling
			down the rabbit hole?

					NEO
			You could say that.

					MORPHEUS
			I can see it in your eyes.  You
			have the look of a man who accepts
			what he sees because he is
			expecting to wake up.

	A smile, razor-thin, curls the corner of his lips.

					MORPHEUS
			Ironically, this is not far from
			the truth.  But I'm getting ahead
			of myself.  Can you tell me, Neo,
			why are you here?

					NEO
			You're Morpheus, you're a legend.
			Most hackers would die to meet
			you.

					MORPHEUS
			Yes.  Thank you.  But I think we
			both know there's more to it than 
			that.  Do you believe in fate, Neo?

					NEO
			No.

					MORPHEUS
			Why not?

					NEO
			Because I don't like the idea that
			I'm not in control of my life.

					MORPHEUS
			I know exactly what you mean.

	Again, that smile that could cut glass.

					MORPHEUS
			Let me tell you why you are here.
			You are here because you have the
			gift.

					NEO
			What gift?

					MORPHEUS
			I've watched you, Neo.  You do not
			use a computer like a tool.  You
			use it like it was part of
			yourself.  What you can do inside
			a computer is not normal.  I know.
			I've seen it.  What you do is
			magic.

	Neo shrugs.

					NEO
			It's not magic.

					MORPHEUS
			But it is, Neo.  It is.  How else
			would you describe what has been
			happening to you?

	He leans forward.

					MORPHEUS
			We are trained in this world to
			accept only what is rational and
			logical.  Have you ever wondered
			why?

	Neo shakes his head.

					MORPHEUS
			As children, we do not separate
			the possible from the impossible
			which is why the younger a mind is
			the easier it is to free while a
			mind like yours can be very
			difficult.

					NEO
			Free from what?

					MORPHEUS
			From the Matrix.

	Neo locks at his eyes but only sees a reflection of
	himself.

					MORPHEUS
			Do you want to know what it is,
			Neo?

	Neo swallows and nods his head.

					MORPHEUS
			It's that feeling you have had all
			your life.  That feeling that
			something was wrong with the
			world.  You don't know what it is
			but it's there, like a splinter in
			your mind, driving you mad,
			driving you to me.  But what is
			it?

	The LEATHER CREAKS as he leans back.

					MORPHEUS
			The Matrix is everywhere, it's all
			around us, here even in this room.
			You can see it out your window, or
			on your television.  You feel it
			when you go to work, or go to
			church or pay your taxes.  It is
			the world that has been pulled
			over your eyes to blind you from
			the truth.

					NEO
			What truth?

					MORPHEUS
			That you are a slave, Neo.  That
			you, like everyone else, was born
			into bondage...
			... kept inside a prison that you
			cannot smell, taste, or touch.  A
			prison for your mind.

	Outside, the WIND BATTERS a loose PANE of glass.

					MORPHEUS
			Unfortunately, no one can be told
			what the Matrix is.  You have to
			see it for yourself.

					NEO
			How?

					MORPHEUS
			Hold out your hands.

	In Neo's right hand, Morpheus drops a red pill.

					MORPHEUS
			This is your last chance.  After
			this, there is no going back.

	In his left, a blue pill.

					MORPHEUS
			You take the blue pill and the
			story ends.  You wake in your bed
			and you believe whatever you want
			to believe.

	The pills in his open hands are reflected in the glasses.

					MORPHEUS
			You take the red pill and you stay
			in Wonderland and I show you how
			deep the rabbit-hole goes.

	Neo feels the smooth skin of the capsules, with the
	moisture growing in his palms.

					MORPHEUS
			Remember that all I am offering is
			the truth.  Nothing more.

	Neo opens his mouth and swallows the red pill.  The
	Cheshire smile returns.

					MORPHEUS
			Follow me.

	He leads Neo into the other room, which is cramped with
	high-tech equipment, glowing ash-bliie and electric green
	from the racks of monitors.

	Trinity, Apoc and Cypher look up as they enter.

					CYPHER
			Shit.

					TRINITY
			I knew he would.

	Cypher saddles up to Morpheus, talking in a hushed tone
	away from, Neo.

					CYPHER
			Morpheus, I know what you believe
			but I think this is a mistake.
			We're rushing him.  He's old.  I'm
			afraid he might pop.

					MORPHEUS
			Haven't I always told you, Cypher,
			not to let fear control your life.
			Apoc, are we on-line?

	Neo recognizes the large man from the El train.

					APOC
			Almost.

	He and Trinity are working quickly, hardwiring a complex
	system of monitors, modules and drives.

					NEO
			Apoc?  You wrote the Four Horsemen
			Virus.

					APOC
			That's right.

					MORPHEUS
			Neo, time is always against us.
			Will you take a seat there?

	In the center of the room sits a chair.  Near the chair
	is an old oval dressing mirror that is cracked.

					MORPHEUS
			I imagine you know sonething about
			virtual reality.

	Neo sits and Trinity begins gently fixing white electrode
	disks to his head, arns, and the back of his neck.

					NEO
			A little.

					MORPHEUS
			Tell me about it.

					NEO
			Essentially, it's a hardware
			system that uses an apparatus;
			headgear, gloves and whatever to
			make you feel that you are in a
			computer program.

					MORPHEUS
			If the virtual reality apparatus,
			as you called it, was wired to all
			of your senses and controlled them
			completely, would you be able to
			tell the difference between the
			virtual world and the real world?

					NEO
			You might not, no.

					MORPHEUS
			No, you wouldn't.

	Neo whispers to Trinity.

					NEO
			You did all this?

	She nods, placing a set of headphones over his ears.
	They are wired to an old hotel phone.

					MORPHEUS
			The pill you took is part of a
			trace program.  It's going to make
			things feel a bit strange.

	Distantly, through the ear phones, he hears Apoc POUNDING
	on a KEYBOARD.  Sweat beads his face.  His eyes blink and
	twitch when he notices the mirror.

	Wide-eyed he stares as it begins to heal itself, a
	webwork of cracks that slowly run together as though the
	mirror were becoming liquid.

					NEO
			Shit...

	Cypher works with Apoc checking reams of phosphorescent
	data.  Trinity monitors Neo's electric vital signs.

	Neo reaches out to touch the mirror and his fingers
	disappear beneath the rippling surface.

	Quickly, he tries to pull his fingers out but the mirror
	stretches in long rubbery strands like mirrored-taffy
	stuck to his fingertips.

					NEO
			What is this?  Mescaline?

					MORPHEUS
			Just relax, Neo.

	The strands thin like rubber cement as he pulls away,
	until the fragile wisps of mirror thread break.

	With the TINKLING of GLASS, shimmering snowflakes
	of electric-blinking mercury fall, hit the ground, and
	fade.

	He looks at his hand; fingers distended into mirrored
	icicles that begin to melt rapidly, dripping, running
	like wax down his fingers, spreading across his palms
	where he sees his face reflected.

					NEO
			Uh-oh...

					TRINITY
			It's going into replication.

					MORPHEUS
			Apoc?

					APOC
			Still nothing.

	Morpheus takes out a cellular phone and dials a number.

					MORPHEUS
			Tank, we're going to need the
			signal soon.  Stay calm, Neo.

	The mirror gel seems to come to life, racing, crawling up
	his arns like hundreds of insects.

					NEO
			It's cold.

	The mirror creeps up his neck as Neo begins to panic,
	tipping his head as though he were sinking into the
	mirror, trying to keep his mouth up.

					NEO
			It's all over me --

	Morpheus is right next to him, with the phone.

					TRINITY
			I got a fibrillation!

					CYPHER
			I knew it, I knew it...

					MORPHEUS
			Shit!  Apoc?

	Streams of mercury run from Neo's nose.

					APOC
			Targeting... almost there.

	An ALARM, on Trinity's monitor ERUPTS.

					TRINITY
			He's going into arrest!

					CYPHER
			He's gonna pop!

					APOC
			Lock!  I got him!

					MORPHEUS
			Now, Tank now!

	His eyes tear with mirror, rolling up and closing as a
	high-pitched ELECTRIC SCREAM ERUPTS in the headphones --

	It is a piercing SHRIEK like a computer calling to
	another computer --

	Neo's body arches in agony and we are pulled like we were
	pulled into the holes of the phone

	Sucked into his SCREAM and swallowed by darkness.


	INT.  POWER PLANT - CLOSE ON MAN'S BODY

	Floating in a womb-red amnion.

	His body spasms, fighting against the thick gelatin.

	Metal tubes, surreal versions of hospital tubes, obscure
	his face.  Other lines like IVs are connected to limbs
	and cover his genitals.

	He is struggling desperately now.  Air bubbles into the
	Jell-O but does not break the surface.

	Pressing up, the surface distends, stretching like a red
	rubber coccon.

	Unable to breathe, he fights wildly to stand, clawing at
	the thinning elastic shroud --

	Until it ruptures, a hole widening around his mouth as he
	sucks for air.  Tearing himself free, he emerges from the
	cell.

	It is Neo.

	He is bald and naked, his body slick with gelatin.
	Dizzy, nauseous, he waits for his vision to focus.

	He is standing in an oval capsule of clear alloy filled
	with red gelatin, the surface of which has solidified
	like curdled milk.

	The IVs in his arms are plugged into outlets that appear
	to be grafted to his flesh.

	He feels the weight of another cable and reaches to the
	back of his head where he finds an enormous coaxial
	plugged and locked into the base of his skull.

	He tries to pull it out but it would be easier to pull
	off a finger.

	To either side he sees other tube-shaped pods filled with
	red gelatin; beneath the wax-like surface, pale and
	motionless, he sees other human beings.

	Fanning out in a circle, there are more.  All connected
	to a center core, each capsule like a red, dimly glowing
	petal attached to a black metal stem.

	Above him, level after, level, the stem rises seemingly
	forever.  He moves to the foot of the capsule and looks
	out.

	The image assaults his mind.

	Towers of glowing petals spiral up to incomprehensible
	heights, disappearing down into a dim murk like an
	underwater abyss.

	His sight is blurred and warped, exaggerating the
	intensity of the vision.  The sound of the PLANT is like
	the sound of the ocean heard from inside the belly of
	Leviathan.

	Below Neo, a petal detaches from the stem, bearing away
	the body of an old man like an automated barge even as a
	new pod rises up and plugs itself into the empty space.

	Inside the new capsule, its surface more translucent and
	pinkish in color, Neo sees a small baby.

	From above, a machine drops directly in front of Neo.

	He swallows his scream as it seems to stare at him.

	It is almost insect-like in its design; beautiful
	housings of alloyed metal covering organic-like systems
	of hard and soft polymers.

	A black particle beam washes over Neo, he reacts in pain
	as the scanner seems to expose the nervous system wired
	to the coaxial cable at his cerebral cortex.

	At the back of the neck, the cable lock spins and opens,
	disengaging.

	The cable pulls itself free, a long clear plastic needle
	and cerebrum-chip slides from the anterior of Neols skull
	with an ooze of blood and spinal fluid.  The other
	connective hoses snap free and snake away as --

	The back of the unit opens and a tremendous vacuum, like
	an airplane door opening, sucks the gelatin and then Neo
	into a black hole.


	INT.  WASTE LINE

	The pipe is a waste disposal system and Neo falls,
	sliding with the clot of gelatin.

	Banking through pipe spirals and elbows, flushing up
	through grease traps clogged with cily clunps of
	cellulite.

	Neo begins to drown when he is suddenly snatched from the
	flow of waste.

	The metallic cable then lifts, pulling him up into the
	belly of the futuristic flying nachine, hovering inside
	the sewer main line.


	INT.  HOVERCRAFT

	The metal harness opens and drops the half-conscious Neo
	onto the floor.

	Human hands and arms help him up as he finds himself
	looking straight at Morpheus.

	Trinity and Apoc.  And others, dressed in bizarre, high-
	tech combat gear.

	Morpheus smiles.

					MORPHEUS
			Welcome to the real world, Neo.

	Neo passes out.

									FADE TO BLACK.

	We have no sense of time.  We hear VOICES whispering.

					MAN (O.S.)
			Do you think Morpheus is right?
			Do you think he could be the One?

					WOMAN (O.S.)
			It doesn't matter now.  But if
			he's wrong...

	FADE IN:

	NEO'S POV

	Neo's eyes flutter open.  We see Trinity's face above us,
	angelic in the fluorescent glow of a light stick.


	ANGLE ON NEO

					NEO
			... am I dead?

					TRINITY
			Far from it.

									FADE TO BLACK.


	FADE IN:


	ANGLE ON NEO

	He opens his eyes again, something tingling through him.
	He focuses and sees his body pierced with dozens of
	acupuncture-like needles wired to a strange device.

					DOZER
			He needs a lot of work.

					MORPHEUS
			I know.

	Dozer and Morpheus are operating on Neo.

					NEO
			What are you doing?

					MORPHEUS
			Your muscles have atrophied.
			We're rebuilding them.

	Fluorescent light sticks burn unnaturally bright.

					NEO
			Why do my eyes hurt?

					MORPHEUS
			You've never used them before.

	Morpheus takes his sunglasses off and puts them on Neo.
	Neo lays back.

					MORPHEUS
			Rest, Neo.  The answers are
			coming.


	INT.  NEO'S ROOM

	Neo wakes up from a deep sleep, feeling better.  He is
	wearing a black tank top and shorts.

	He begins to examine himself.  There is a futuristic IV
	plugged into the jack in his forearm.  He pulls it out,
	staring at the grafted outlet.

	He feels his bald head.  His fingers find and explore the
	large outlet in the base of his skull.

	Just as he starts to come unglued, Morpheus opens the
	door.

					NEO
			Morpheus, what's happened to me?
			What is this place?

					MORPHEUS
			More important than what is when?

					NEO
			When?

					MORPHEUS
			You believe the year is 1997 when
			in fact it is much closer to 2197.
			I can't say for certain what year
			it is because we honestly do not
			know.

	The wind is knocked from Neo's chest.

					NEO
			That's not possible.

					MORPHEUS
			I promised you the truth, Neo, and
			the truth is that the world you
			were living in was a lie.

					NEO
			How?

					MORPHEUS
			I'll show you.


	INT.  HOVERCRAFT

	Like a sleepwalker, Neo follows Morpheus through the ship.

					MORPHEUS
			This is my ship, the
			Nebuchadnezzar.  It's a
			hovercraft.  Small like a
			submarine.  It's dark.  It's
			cramped and cold.  But it's home.

	They climb a ladder up to the main deck.


	INT.  MAIN DECK

	Everyone is there.

					MORPHEUS
			This is the main deck.  You know
			most of my crew.

	Trinity smiles and nods.

					MORPHEUS
			The ones you don't know.  That's
			Mouse and Switch.  The two big
			guys are Tank and Dozer.

	The names and faces wash meaninglessly over Neo.

					MORPHEUS
			And this, this is the Core.  This
			is where we broadcast our pirate
			signal and hack into the Matrix.

	It is a swamp of bizarre electronic equipment.  Vines of
	coaxial hang and snake to and from huge monolithic
	battery slabs, a black portable satellite dish and banks
	of little systems and computer monitors.

	At the center of the web, there are six ectoskeleton
	chairs made of a poly-alloy frame and suspension harness.

	Near the circle of chairs is the control console and
	operator's station where the network is monitored.

					MORPHEUS
			Help him, Trinity.

	Neo allows himself to be helped into one of the chairs.

					MORPHEUS
			Do you remember when I asked you
			about an apparatus that could turn
			a virtual reality into reality?

	Neo nods.

					MORPHEUS
			It's right here.

	He touches Neo's head.

					MORPHEUS
			And it's accessed here.

	Neo feels Morpheus guiding a coaxial line into the jack
	at the back of his neck.  The cable has the same kind of
	cerebellum chip we saw inside the plant.

					MORPHEUS
			This will feel a little weird.

	There are several disturbing NOISES as he works the
	needle in.

	We MOVE IN as Neo's shoulders bunch and his face tightens
	into a grimace until a loud CLICK fires and his ears pop
	like when you equalize them underwater.

	He relaxes, opening his eyes as we pull back to a feeling
	of weightlessness inside another place --


	INT.  CONSTRUCT

	Neo is standing in an empty, blank-white space.

					MORPHEUS
			This is the Construct.

	Startled, Neo whips around and finds Morpheus now in the
	room with him.

					MORPHEUS
			It is our loading program.  We can
			load anything from clothes, to
			weapons, to training simulations.
			Anything we need.

	Morpheus walks past Neo and when Neo turns he sees the
	two leather chairs from the hotel set up in front of a
	large-screen television.

					MORPHEUS
			Sit down.

	Neo stands at the back of the chair as Morpheus sits.

					NEO
			Right now, we're inside a computer
			program?

					MORPHEUS
			Wild, isn't it?

	Neo's hands run over the cracked leather.

					NEO
			This isn't real?

					MORPHEUS
			What is real?  How do you define
			real?  If you're talking about
			your senses, what you feel, taste,
			smell, or see, then all you're
			talking about are electrical
			signals interpreted by your brain.

	He picks up a remote control and clicks ON the
	TELEVISION.  We drift through the Windy City circa 1996.

					MORPHEUS
			This is the Chicago you know.
			Chicago as it was at the end of
			the twentieth century.  This
			Chicago exists only as part of a
			neural-interactive simulation that
			we call the Matrix.

	We GLIDE AT the television as he changes the channel.

					MORPHEUS
			You have been living inside
			Baulliaurd's vision, inside the
			map, not the territory.  This is
			Chicago as it exists today.

	The sky is an endless sea of black and green bile.  The
	earth, scorched and split like burnt flesh, spreads out
	beneath us as we ENTER the television.

					MORPHEUS
			'The desert of the real.'

	In the distance, we see the ruins of a future Chicago
	protruding from the wasteland like the blackened ribs of
	a long-dead corpse.

					MORPHEUS
			We are, right now, miles below the
			earth's surface.  The only place
			humans can survive outside the
			Matrix is underground.

	Still MOVING, we TURN and find Neo and Morpheus; the
	chairs now sitting in the middle of the black desert.
	Dizzy, Neo holds onto the chair.

					NEO
			What happened?

					MORPHEUS
			It started early in the twenty-
			first century, with the birth of
			artificial intelligence, a
			singular consciousness that
			spawned an entire race of
			machines.

	In his sunglasses, we see storm clouds gather.

					MORPHEUS
			At first all they wanted was to be
			treated as equals, entitled to the
			same human inalienable rights.
			Whatever they were given, it was
			not enough.

	In the circular window of the glasses, EXPLOSIONS light
	up a bloody battle field.

					MORPHEUS
			We don't know who struck first.
			Us or them.  But sometime at the
			end of the twenty-first century
			the battle was joined.

	We MOVE INTO his glasses and the war surrounds us.

					MORPHEUS
			The war raged for generations and
			turned the face of our planet from
			green and blue to black and red.

	At last we see the Sentinels; killing machines that are
	at once terrifying and beautiful.  They have an organic
	architecture like a microbiotic organism, that is
	perpetually in motion.

	The Sentinel cracks the body armor of a soldier,
	splitting open the soft, stearing meat inside.

					MORPHEUS
			It scorched and burned the sky.
			Without the sun, the machines
			sought out a new energy source to
			survive.

	The Sentinel locks up, as heat lightning of black ink
	bursts against the sky, spreading into a permanent cloud
	of stain.

					MORPHEUS
			They discovered a new form of
			fusion.  All that was required to
			initiate the reaction was a small
			electric charge.  Throughout human
			history we have been dependent on
			machines to survive.  Fate, it
			seems, is not without a sense of
			irony.

	We return to the power plant that Neo escaped from where
	we see human beings looking almost blissful in their
	gelatin cocoons.

					MORPHEUS
			The human body generates more bio-
			electricity than a 120-volt
			battery and over 25,000 B.T.U.'s
			of body heat.

	Outside, spreading all around the power plant, beneath a
	breathing greenhouse, are the growing fields.

					MORPHEUS
			We are, as an energy source,
			easily renewable and completely
			recyclable, the dead liquified and
			fed intravenously to the living.

	Huge farm-like reapers are harvesting the crop.

					MORPHEUS
			All they needed to control this
			new battery was something to
			occupy our mind.

	We see inside a clear tubular husk.  Floating in viscous
	fluid, there is a human fetus; its soft skull already
	growing around the brain-jack.

					MORPHEUS
			And so they built a prison out of
			our past, wired it to our brains
			and turned us into slaves.

	We PULL BACK to find the image is now on the television
	and we are again inside the white space of the Construct.

					NEO
			No!  I don't believe it!  It's not
			possible!

					MORPHEUS
			I didn't say that it would be
			easy, Neo.  I just said that it
			would be the truth.

	The room without walls begins to spin.

					NEO
			Stop!  Let me out!  I want out!


	INT.  MAIN DECK

	His eyes snap open and he thrashes against the chair,
	trying to rip the cable from the back of his neck.

					NEO
			Get this thing out of me!

					TRINITY
			Easy, Neo.  Easy.

	Dozer holds him while Trinity unlocks it.  Once it's out,
	he tears away from them, falling as he trips free of the
	harness.

					NEO
			Don't touch me!  Get away from me!

	On his hands and knees, he reels as the world spins.
	Sweat pours off him as a pressure builds inside his skull
	as if his brian had been put into a centrifuge.

					CYPHER
			He's going to pop!

	Vomiting violently, Neo pitches forward and blacks out.


	INT.  NEO'S ROOM

	He blinks, regaining consciousness.  The room is dark.
	Neo is stretched out on his bed.

					NEO
			I can't go back, can I?

	Morpheus sitting like a shadow on a chair in the far
	corner.

					MORPHEUS
			No.  But if you could, would you
			really want to?

	Neo isn't sure of that answer.

					MORPHEUS
			I feel that I owe you an apology.
			There is a rule that we do not
			free a mind once it reaches a
			certain age.  It is dangerous.
			They have trouble letting go..
			Their mind turns against them.
			I've seen it happen.  I broke the
			rule because I had to.

	He stares into the darkness, confessing as much to
	himself as Neo.

					MORPHEUS
			When the Matrix was first built
			there was a man born inside that
			had the ability to change what he
			wanted, to remake the Matrix as he
			saw fit.  It was this man that
			freed the first of us and taught
			us the secret of the war; control
			the Matrix and you control the
			future.

	He pauses.

					MORPHEUS
			When he died, the Oracle at the
			temple of Zion prophesied his
			return and envisioned an end to
			the war and freedom for our
			people.  That is why there are
			those of us that have spent our
			entire lives searching the Matrix,
			looking for him.

	Neo can feel his eyes on him.

					MORPHEUS
			I did what I did, because I
			believe we have been brought here
			for a reason, Neo.  You are here
			to serve a purpose, just as I am
			here to serve mine.

					NEO
			I told you I don't believe in
			fate.

	Morpheus smiles, leaning towards hin.

					MORPHEUS
			But I do, Neo.  I do.

	He stands up.

					MORPHEUS
			Get some rest.  You're going to
			need it.

					NEO
			For what?

					MORPHEUS
			Your training.



	INT.  HOVERCRAFT

	There is no morning; there is only darkness and then the
	fluorescent light sticks flicker on.


	INT.  NEO'S ROOM

	Neo is awake in his bed, staring up at the lights.  The
	door opens and TA.NK steps inside.

					TANK
			Morning.  Did you sleep?

					NEO
			No.

					TANK
			You will tonight.  I guarantee it.
			I'm Tank.  I'll be your operator.

	He offers his hand and Neo shakes it.  He notices that
	Tank doesn't have any jacks.

					NEO
			You don't have...

					TANK
			Any holes?  Nope.  Me and my
			brother Dozer, we are 100 percent
			pure, old fashioned, home-grown
			human.  Born free.  Right here in
			the real world.  Genuine child of
			Zion.

					NEO
			Zion?

					TANK
			Zion is the place, man.  You'll
			see it one day.  Last human city.
			All we got left.

	Tank smiles.

					TANK
			Goddamn, I got to tell you I'm
			fairly excited to see what you are
			capable of.  I mean if Morpheus is
			right and all.  We're not supposed
			to talk.about any of that, but if
			you are, well then this is an
			exciting time.  We got a lot to do
			so let's get to it.


	INT.  MAIN DECK

	Neo is plugged in, hanging in one of the suspension
	chairs.

					TANK
			We're supposed to load all these
			operations programs first, but
			this is some major boring shit.
			Why don't we start something a
			little fun?

	Tank smiles as he plops into his operator's chair.  He
	begins flipping through a tall carousel loaded with micro
	discs.

					TANK
			How about sore combat training?

	Neo reads the label on the disk.

					NEO
			Jiujitsu?  I'm going to learn
			jujitsu?

	Tank slides the disk into Neo's supplement drive.

					NEO
			No way.

	Smiling, Tank punches the "load" code.

	His body jumps against the harness as his eyes clamp
	shut.  The monitors kick wildly as his heart pounds,
	adrenaline surges, and his brain sizzles.

	An instant later his eyes snap open.

					NEO
			Holy shit!

					TANK
			Hey, Mikey, he likes it!  Ready
			for more?

					NEO
			Hell yes!


	INT.  MAIN DECK - CLOSE ON COMPUTER MONITOR - LATER

	as grey pixels slowly fill a small, half-empty box.  It
	is a meter displaying how much download time is left.

	The title bar reads:  "Combat Series 10 of 12," file
	categories flashing beneath it:  Savate, Jujitsu, Ken Po,
	Drunken Boxing...

	Morpheus walks in.

					MORPHEUS
			How is he?

	Tank looks at his watch, rubs his eyes.

					TANK
			Ten hours straight.  He's a
			machine.

	Neo's body spasms and relaxes as his eyes open, breath
	hissing from his lips.  He looks like he just orgasmed.

	He locks at Morpheus.

					NEO
			This is incredible.  I know Kung
			Fu.

	Morpheus sits in the drive chair next to hin.  He nods to
	Tank.

					MORPHEUS
			Show me.


	INT.  DOJO

	They are standing in a very sparse japanese-style dojo.

					MORPHEUS
			This is a sparring program,
			similar to the programmed reality
			of the Matrix.  Consider this your
			first lesson.

	He assumes a fighting stance.

					MORPHEUS
			Attack me.

	Neo assumes a similar stance, cautiously circling until
	he gives a short cry and launches a furious attack.

	It is like a Jackie Chan movie at high speed, fists and
	feet striking from every angle as Neo presses his attack
	--

	But each and every blow is blocked by effortless speed.


	INT.  MAIN DECK

	While their minds battle in the programmed reality, the
	two bodies appear quite serene, suspended in the drive
	chairs.

	Tank monitors their life systems noticing that Neo is
	wildly and chaotically lit up as opposed to the slow and
	steady rhythm of Morpheus.


	INT.  MESS HALL

	Dinner is up.  Everyone is eating bowls of single-cell
	protein.  It has a cottage cheese consistency.

	MOUSE bursts in the room.

					MOUSE
			Morpheus is fighting Neo!

	All at once they bolt for the door.


	INT.  DOJO

	Neo's face is knotted, teeth clenched, as he hurls
	himself at Morpheus.

					MORPHEUS
			Good.  Adaption.  Improvisation.
			But your weakness isn't your
			technique.

	Morpheus attacks him and it is like nothing we have seen.
	His feet and fists are everywhere taking Neo apart.  For
	every blow Neo blocks, five more hit their marks until --

	Neo falls.

	Panting, on his hands and knees, blood spits fror, his
	mouth speckling the white floor of the Dojo.

					MORPHEUS
			How did I beat you?

					NEO
			You -- You're too fast.

					MORPHEUS
			Do you think my being faster,
			stronger has anything to do with
			my muscles in this place?

	Neo is frustrated, still unable to catch his breath.

					MORPHEUS
			Do you believe that's air you are
			breathing now?

	Neo squints at him.

					MORPHEUS
			If you can free your mind, the
			body will follow.

	Neo stands, nodding.

					MORPHEUS
			Again.

	Their fists fly with  pneumatic speed.


	INT.  MAIN DECK

	Everyone is gathered behind Tank, watching the fight,
	like watching a game of Mortal Combat.

					CABLE
			Jeezus Keerist!  That boy is fast!

					MOUSE
			You ever seen anyone that fast
			that soon, Tank?

					TANK
			Never.

					APOC
			Morpheus is right.  He's got to be
			the one.


	INT.  DOJO

	The speed of the blows rises like a drum solo that seems
	impossible to sustain.  Neo's face sheds its mask of calm
	with a scream.

	He wants to beat Morpheus bad.

	Finally a single blow catches Morpheus on the side of the
	head, knocking his glasses off.


	INT.  MAIN DECK

	There are several gasps.

					MOUSE
			I don't believe it!


	INT.  DOJO

	Morpheus rubs his face.

					MORPHEUS
			You are angry with me.

	Neo pants.

					NEO
			I, uh... maybe.

					MORPHEUS
			It's all right.  It's natural.

					NEO
			I feel better.

					MORPHEUS
			Good, good.  Anger is a gift, Neo,
			but it's a heavy one.

	Morpheus smiles.

					MORPHEUS
			Tank, load the jump program.

	Neo straightens as the dojo DISSOLVES away like a curtain
	lifting, leaving the two men now standing on a building
	rooftop in a city skyline.

					MORPHEUS
			You have to learn to let go of
			that anger.  You must let go of
			everything.

	A WIND HOWLS, whipping Morpheus' long coat to the side.

					MORPHEUS
			You must empty yourself to free
			your mind.

	Morpheus spins, running hard at the edge of the rooftop.
	And jumps.  He sails through the air, his coat billowing
	out behind him like a cape --

	Somersaults once and lands on the rooftop across the
	street.

					NEO
			Shit.

	Neo looks down at the street twenty floors below, then at
	Morpheus an impossible fifty feet away.

					NEO
			Okie dokie.

	He takes a deep breath.

					NEO
			Yeah.  Free my mind.  Right.  No
			problem.

	He concentrates.  Runs.


	INT.  MAIN DECK

	They are transfixed.

					CABLE
			He's gonna make it.

					APOC
			No way.  Not possible.

					MOUSE
			No one's ever made their first
			jump.

					SWITCH
			What if he does?

					APOC
			He won't.

					TANK
			It's never been done.

	Trinity stares at the screen, her fists clenching as she
	whispers.

					TRINITY
			Come on.


	EXT.  ROOFTOP

	Summoning every ounce of strength in his legs, Neo
	launches himself into the air in a single maniacal shriek
	--

	But comes up drastically short.

	His eyes widen as he plummets.  Stories fly by, the
	ground rushing up at him, but as he hits --

	The ground gives way, stretchinp like a trapeze net.

	He bounces and flips, slowly coming to a rest, flat on
	his back.

	He laughs, a bit unsure, wiping the wind-blown tears from
	his face.

	Morpheus exits the building and helps him to his feet.

					MORPHEUS
			Everyone falls the first time.

	Neo nods quietly.

					MORPHEUS
			If you never know failure, how can
			you know success?


	INT.  MAIN DECK

	They break up.

					MOUSE
			What does it mean?

					CABLE
			It doesn't mean anything.

					CYPHER
			Everyone falls, right, Trinity?

	But Trinity has left.

	Neo's eyes open as Tank eases the plug out.  He tries to
	move and groans, cradling his ribs.

	While Tank helps Morpheus, Neo spits blood into his hand.

					NEO
			I thought it wasn't real.

	Neo stares at the blood.

					NEO
			If you are killed in the Matrix,
			you die here?

					MORPHEUS
			The body cannot live without the
			mind.


	INT.  NEO'S ROOM

	Trinity enters from the hall, carrying a try of food.

					TRINITY
			Neo, I saved you some dinner --

	She sees him passed out on the bed.  She sets the tray
	down and pulls the blanket over him.

	She pauses, her face close to his, then inhales lightly,
	breathing in the scent of him, before slowly pulling away.

	It seems the moment she closes the door, he wakes with a
	start, unsure of where he is.  After a moment, he gets
	out of bed.


	INT.  HALL

	The ship is quiet and dark.  Everyone is asleep.


	INT.  MAIN DECK

	The core glows with monitor light.  Cypher is in the
	operator's chair as Neo cones up behind him.

					CYPHER
			Whoa!  Shit, Neo, you scared the
			bejeezus out of ne.

					NEO
			Sorry.

					CYPHER
			No, it's all right.

					NEO
			What are you doing?

					CYPHER
			Midnight watch.

	Neo's eyes light up as he steps closer to the screens
	that seem alive with a constant flow of data.

					NEO
			Is that... ?

					CYPHER
			The Matrix?  Yeah.

	The monitors are packed with bizarre codes and equations.

					CYPHER
			You want a drink?

	He pours Neo a drink from a large plastic jug.

					CYPHER
			I'll tell you, I feel for you,
			man.  I really do.  Most of us
			were still young, just punks, when
			Morpheus jacked us.  But you, you
			had a real life.

	Neo takes a sip and it almost kills him.  Cypher pounds
	on his back.

					CYPHER
			Good shit, huh?  Dozer makes it.
			It's good for two things:
			degreasing engines and killing
			brain cells.

	Red-faced, Neo finally stops coughing.

					CYPHER
			Did he tell you why he did it?

	Neo nods.

					CYPHER,
			I'll be the didn't tell you that
			this wasn't the first time he
			thought he found the One.

	Neo shakes his head as Cypher fills his cup and laughs.

					CYPHER
			Let me give you a piece of advice.
			Between you and me, if Morpheus
			says you can fly, I wouldn't go
			jumping out any windows to find
			out if he's right.  Understand?

	Cypher raises his drink.  Neo swallows another throat-
	scorching mouthful.

					CYPHER
			Welcome to the real world!


	INT.  RESTAURANT (MATRIX) - NIGHT

	CHAMBER MUSIC and the ambiance of wealth soak the room as
	we watch a serrated knife saw through a thick, gorgeous
	steak.

					CYPHER
			That's what he said to me nine
			years ago.

	The meat is so perfect, charred on the outside, oozing
	red juice from the inside, that it could be a dream.

					CYPHER
			The real world.  Ha, what a joke.

	We recognize the grating voice, the insidious laugh.

					CYPHER
			You know what real is?  I'll tell
			you what real is.

	A fork stabs the cube of meat and we FOLLOW it UP TO the
	face of Cypher.

					CYPHER
			Real is just another four-letter
			word.

	He laughs, shoving the steak into his mouth.

	The restaurant is located on the top floor of a Chicago
	skyscraper where the view is breathtaking and the menu
	has no prices.

	Sitting across from Cypher is Agent Smith.

					AGENT SMITH
			Do we have a deal, Mr. Reagan?

	Cypher chews the steak loudly, smacking it between his
	teeth.

					CYPHER
			Mmm, so, so fucking good.

	Smith watches him shovel another hunk of meat into his
	mouth.

					CYPHER
			You know, I know that this steak
			doesn't exist.  I know when I put
			it in my mouth, the Matrix is
			telling my brain that it is juicy
			and delicious.  After nine years,
			do you know what I've realized?

	Pausing, he examines the meat skewered on his fork.  He
	pops it in, eyes rolling up, savoring the tender beef
	melting in his mouth.

					CYPHER
			Ignorance is bliss.

					AGENT SMITH
			Then we have a deal?

					CYPHER
			I don't want to remember nothing.
			Nothing!  You understand?  And I
			want to be rich.  Someone
			important.  Like an actor.  You
			can do that, right?

					AGENT SMITH
			Whatever you want, Mr. Reagan.

	Cypher takes a deep drink of wine.

					CYPHER
			All right.  You get my body back
			in a power plant, reinsert me into
			the Matrix and I'll get you what
			you want.

					AGENT SMITH
			Access codes to Zion.

					CYPHER
			I told you, I don't know them.
			But I can give you the man who
			does.

					AGENT SMITH
			Morpheus.


	INT.  MAIN DECK

	Sweat dapples his lip as Neo snaps out of the construct
	coma.

					NEO
			Jeez, I was wondering about that.

					TANK
			What?

					NEO
			Why I was bald here but not in the
			Matrix.

					TANK
			R.S.I.

					NEO
			Residual self image.

					TANK
			Good.  Now what's this?

	He points to one of Neo's monitors.

					NEO
			Life systems monitor, glucose
			levels.

					TANK
			What's that?

					NEO
			Main power supply to the core.

	He follows Tank to the operator's station where he points
	to a red key-switch.

					TANK
			How about this?

					NEO
			Mainframe self-destruct.  Uses all
			remaining power to generate an...
			E.M.P?

					TANK
			Electromagnetic pulse.  Our best
			weapon against the machines.  The
			problem is if someone is still in
			the Matrix when that thing goes
			off, they're not coming back.

	Neo nods as Morpheus comes up behind them.

					MORPHEUS
			How's he doing?

					TANK
			We just finished the operation
			programs and he's showing great
			retention.

					MORPHEUS
			Good.  I want everyone alerted to
			12-hour stand-by.  We're going in.
			Neo, it's time for you to know why
			you're here.

	Morpheus walks away.

					NEO
			What's he talking about?

					TANK
			He's taking you into the Matrix to
			see her.

					NEO
			See who?

					TANK
			The Oracle.

	Neo looks down at the monitor teeming with Matrix data
	that seems to coalesce, equations giving way to images as
	a METAL SCREAM RISES BECOMING --


	EXT.  CHICAGO (MATRIX) - DAY

	An El train.


	INT.  HOTEL LAFAYETTE (MATRIX) - DAY

	The room is empty, heavy curtains covering windows.  It
	looks as if it hasn't been touched in years.  In the
	bedroom with the cracked oval mirror an old black PHONE
	begins to RING.

	In the mirror, we first glimpse them and as we keep
	TURNING, the room fills with equipment and the team.

	Morpheus answers the phone.

					MORPHEUS
			We're in.

	He hangs up.

					MORPHEUS
			Mouse and Cable hold the exit.
			Let's go.


	INT.  STAIRWELL (MATRIX) - DAY

	Neo follows the others down the stairwell that winds
	around an antique elevator shaft.

					NEO
			Did you have to do this?

					TRINITY
			Yeah.

					NEO
			What did she tell you?

					TRINITY
			Lots of things.

					NEO
			Any of them true?

	Trinity looks at him, then looks away.

					TRINITY
			Some of them.

					GIZMO
			Were they good or bad?

					TRINITY
			There's no point in worrylng.
			Whatever is going to happen is
			going to happen.

	They cross the old lobby.  Switch and Apoc stop at the
	doors.

					MORPHEUS
			We should be back in an hour.


	EXT.  HOTEL LAFAYETTE (MATRIX) - DAY

	Neo squints into the sun that seems unnaturally bright.
	He is the only one without sunglasses.

					MORPHEUS
			Do you now understand what it
			means when we say, if you're not
			one of us, you're one of them?

					NEO
			The agents.  They're sentient
			programs.  They can commandeer any
			software hardwired to the
			mainframe.

					MORPHEUS
			Anyone that is still in a power
			plant.  That is why we try to be
			invisible in the Matrix.

					NEO
			The best hacking is always
			traceless.

	Cypher and Trinity move away from them, securing the
	perimeter.  As Cypher passes a garbage can, he
	surreptitiously drops something inside.

	It is a cellular phone and we watch the blue display as
	the LINE CONNECTS.

	An early 1970s, black Lincoln Continental emerges from a
	corrugated roll-up garage.  Morpheus and Neo get in.


	INT.  LINCOLN CONTINENTAL (MATRIX) - DAY

	An enormous man is waiting for them.  A wad of chewing
	tobacco bulges his cheek.  He spits into a Coke can.

					MOJO
			Morpheus, been a long time coming.

					MORPHEUS
			You're looking well, Mojo.

	Mojo coughs a brown, cankerous laugh, juice speckling his
	chin and shirt.  He stares at Neo.

					MOJO
			You bringing us geriatrics now.
			Morpheus?

	He spits and laughs again.

					MOJO
			Guess you are locking for a
			miracle.


	EXT.  BAR (MATRIX) - DAY

	The Continental pulls up to a bar in the kind of
	neighborhood where every corner has a pair of eyes.


	INT.  BAR (MATRIX) - DAY

	A lightless, lower-class bar.  No one enters that is not
	expected.

	The front doors open in a brilliant burst of sunlight as
	Mojo leads Morpheus and Neo inside.  Neo looks around,
	his eyes adjusting to the darkness.

	Mojo talks to the bartender, then looks over.

					MOJO
			All right, it's cool.  Go on back.

	They weave their way to the back of the bar, the STICKY
	FLOOR SNAPPING under their FEET.

	A monolith of a man rises from his stool as they walk up.

					REX
			You're late.

	He moves to the side, opening the heavy iron door behind
	him.  They descend the basement staircase toward the
	single bare bulb at the bottom, hanging above the only
	door.


	INT.  BASEMENT (MATRIX) - DAY

	A high-tech laptop and modem are set up on a stack of
	milk crates.  Neo waits as Morpheus types in a series of
	access codes.  After a moment the screen blinks, "Welcome
	Morpheus."

	Morpheus walks back to the same door they entered, but it
	now leads into --


	INT.  TEMPLE OF ZION (MATRIX) - DAY

	The walls and floors are polished marble.  Neo follows,
	his mouth agape.

					NEO
			What -- what happened?

					MORPHEUS
			This is the temple.  It is a part
			of Zion's mainframe.  It's hidden
			inside the Matrix so that we can
			access it.

	Two PRIESTESSES are waiting in the antechamber.

					PRIESTESS
			Hello, Morpheus.  We've been
			expecting you.

					MORPHEUS
			Okay, you're on your own.  Go with
			them.

	They take Neo by the arm, leading him down a hall into
	another room.

					PRIESTESS
			Wait here.  Among the other
			Potentials.


	INT.  ROOM OF POTENTIALS (MATRIX) - DAY

	Neo enters and finally understands the attention given to
	his age.  The Potentials are all little children.

	The room feels at once like a Buddhist temple and a
	kindergarten class.  The children's heads are either
	shaved or thick with dreadlocks.  Some are playing,
	others meditating or practicing their gift.

	Neo watches a little girl levitate wooden alphabet
	blocks.  A skinny BOY holds a SPOON which sways like a
	blade of grass as he bends it with his rnind.

	Neo crosses to him, sits.

	The Boy smiles as Neo picks up a spoon and tries to
	imitate him.  Despite his best efforts, Neo cannot make
	it bend.

					SPOON BOY
			Your spoon does not bend because
			it is just that, a spoon.  Mine 
			bends because there is no spoon,
			just my mind.

	Neo watches as it curls into a knot.

					SPOON BOY
			Link yourself to the spoon.
			Become the spoon and bend
			yourself.

	Neo nods, again holding up his spoon.

					NEO
			There is no spoon.  Right.

	He concentrates.  The spoon begins to bend just as the
	Priestess touches his shoulder.

					PRIESTESS
			The Oracle will see you now.

	Spoon Boy smiles.


	INT.  SHRINE (MATRIX) - DAY

	Neo enters nervously.  Beneath his feet is a path of the
	zodiac leading to marbled stairs that rise to a dais and
	a three-legged throne.

	The throne is empty.

					NEO
			Hello?

	A DISTANT FEMALE VOICE calls to him and he follows it up
	the stairs.  At the top of the dais, he smells something
	cooking.

	Following the scent, he moves behind the pillars where he
	finds an open door.

					VOICE (O.S.)
			Just come on in.

	He walks through a vestibule where he sees a fabulous
	moonstone headdress and velvet robes.  A second door
	leads into --


	INT.  ORACLE'S CHAMBERS (MATRIX) - DAY

	It looks like a suburban tract house.

	There is a lot of cozy furniture, a dining roon hutch
	filled with china, shelves and tables crowded with
	doilies, knick-knacks and ceramic brick-a-brack.

	Neo follows the plastic carpet runner to the kitchen.

	A WOMAN is huddled beside the oven, peering inside
	through the cracked door.

					NEO
			Hello?

					ORACLE (WOMAN)
			I know.  You're Neo.  Be right
			with you.

					NEO
			You're the Oracle?

					ORACLE
			Bingo.  I got to say I love seeing
			you non-believers.  It's really a
			relief.  All that pomp and
			circumstances just plain tucker me
			out.  Almost done.  Smell good,
			don't they?

					NEO
			Yeah.

					ORACLE
			I'd ask you to sit down, but
			you're not going to anyway.  And
			don't worry about the vase.

					NEO
			What vase?

	He turns to look around and his elbow knocks a VASE from
	the table.  It BREAKS against the linoleum floor.

					ORACLE
			The vase.

					NEO
			Shit, I'm sorry.

	She pulls out a tray of chocolate chip cookies and turns.
	She is an older woman, wearing big oven mitts,
	comfortable slacks and a print blouse.  She looks like
	someone's grandma.

					ORACLE
			I said don't worry about it.  I'll
			get one of my kids to fix it.

					NEO
			How did you know...?

	She sets the cookie tray on a wooden hot-pad.

					ORACLE
			What's really going to bake your
			noodle later on is, would you
			still have broken it if I hadn't
			said anything.

	Smiling, she lights a cigarette.

					ORACLE
			You're cuter than I thought.  I
			see why she likes you.

					NEO
			Who?

					ORACLE
			Not too bright, though.

	She winks.

					ORACLE
			You know why Morpheus brought you
			to see me?

					NEO
			I think so.

					ORACLE
			So? What do you think?  You think
			you're the one?

					NEO
			I don't know.

	She gestures to a wooden plaque, the kind every grandma
	has, except that the words are in Latin.

					ORACLE
			You know what that means?  It's
			Latin.  Means, 'Know thyself.'

	She puts her cigarette down.

					ORACLE
			Well, let's have a look at you.

	She widens his eyes, checks his ears, then feels the
	glands in his neck.

					ORACLE
			Open your mouth.  Say, 'ahhh.'

	She nods then looks at his palms.

					ORACLE
			Hmmm.  You sure got the gift, but
			it's tricky.  I'd say the bad news
			is, you're not the one.  Still got
			a lot to learn.  Maybe next life.

					NEO
			What's the good news?

					ORACLE
			Same as the bad news, you're not
			the one.

					NEO
			Is that it, then?

					ORACLE
			No.  Here.

	She picks up the tray of cooling cookies.

					ORACLE
			You better take a cookie.  Got a
			big day ahead of you.

	He eyes her, then takes a cookie.

					ORACLE
			Make a believer out of you yet.


	INT.  ANTECHAMBER (MATRIX) - DAY

	Morpheus rises from a bench as the Priestess escorts Neo
	out.  When they are alone, Morpheus puts his hand on
	Neo's shoulder.

					MORPHEUS
			You don't have to tell me
			anything, Neo, because I already
			know what she said.

					NEO
			You do?

					MORPHEUS
			I brought you so that you could
			hear it for yourself.  I knew it
			would help.

	Neo finishes his cookie.

					MORPHEUS
			No one will ever ask you because
			it is a gift from her.  It is for
			you and you alone.


	EXT.  CITY STREET (MATRIX) - DAY

	Storm clouds shroud the streets as the sky turns
	jaundice.

	Cypher nervously glances down the surrounding streets.
	He notices several unmarked white vans.

	He mops the sweat from his forehead, when Trinity sees
	the black Lincoln.

					TRINITY
			Here they come.


	INT.  MAIN DECK

	In the hovercraft, we see the sweat rolling down Cypher's
	face and neck.

	Tank is typing rapidly at the keyboard.

					TANK
			Weird.  This area never has this
			much activity.


	EXT.  HOTEL LAFAYETTE (MATRIX) - DAY

	Apoc opens the side door and they enter the hotel.


	INT.  ROOM 1313 (MATRIX) - DAY

	Mouse's CELLULAR RINGS.

					MOUSE
			Welcome to Movie-Phone.

					TANK (V.O.)
			They're on their way.

					MOUSE
			Right.

	The phone flips shut as he jumps up.

					MOUSE
			Let's get to work.


	INT.  HOTEL LAFAYETTE (MATRIX) - DAY

	Light filters down the throat of the building through a
	caged skylight at the top of the open elevator shaft.
	Four figures glide up the dark stairs that wind around
	the antique elevator.

	Neo notices a black cat, a yellow-green-eyed shadow that
	slinks past them and pads quickly down the stairs.

	A moment later, Neo sees another black cat that looks and
	moves identically to the first one.

					NEO
			Whoa.  Deja vu.

	Those words stop the others dead in their tracks.


	INT.  MAIN DECK

	The monitors suddenly glitch as though the Matrix had an
	electronic seizure.

					TANK
			Oh, shit!  Oh, shit!


	INT.  HOTEL LAFAYETTE (MATRIX) - DAY

	Trinity turns around, her face tight.

					TRINITY
			What did you just say?

					NEO
			Nothing.  Just had a little deja
			vu.

					TRINITY
			What happened?  What did you see?

					NEO
			A black cat went past us and then
			I saw another that looked just
			like it.

					TRINITY
			How much like it?  Was it the same
			cat?

					NEO
			It might have been.  I'm not sure.

	Trinity looks at Morpheus, who listens quietly to the
	rasping breath of the old building.

					NEO
			What is it?

					TRINITY
			A deja vu is usually a glitch in
			the Matrix.  It happens when they
			change something.

	She also listens as the staccato BEAT of HELICOPTER
	BLADES GROW ominously LOUDER.


	INT.  MAIN DECK

	Tank sees what was changed.

					TANK
			It's a trap!


	INT.  STAIRCASE (MATRIX) - DAY

	Morpheus looks up the stairs as a helicopter shadow
	passes over the clouded glass.

					MORPHEUS
			Come on!


	INT.  ROOM 1313 (MATRIX) - DAY

	Cable goes to the draped windows.

					CABLE
			Did you just feel something weird?

					MOUSE
			Yeah...

	The CELLULAR RINGS.


	INT.  BASEMENT (MATRIX) - DAY

	Heavy bolt-cutters snap through the main phone cable.


	INT.  ROOM 1313 (MATRIX) - DAY

	Mouse answers the phone.

					MOUSE
			What's going on?

					TANK (V.O.)
			They cut the hard-line!  It's a
			trap!  Get out!

	Cable yanks open the curtain.

					CABLE
			Oh, no.

	The windows are bricked up.


	INT.  HALL (MATRIX) - DAY

	The door to the roof explodes open as heavily-armed rnen
	rush towards room 1313.


	INT.  MAIN DECK

	Tank watches helplessly.

					TANK
			No, no, no.


	INT.  ROOM 1313 (MATRIX) - DAY

	The door slams open and the police force pours in, dozens
	of assault rifles surrounding Mouse and Cable who are
	armed with only handguns.

					CABLE
			Morpheus!  It's a trap --


	INT.  STAIRS (MATRIX) - DAY

	Morpheus stops as the scream is drowned by the REPORT of
	MACHINE GUNS filling the building with a terrible fury.

					TRINITY
			Oh, God.


	INT.  MAIN DECK

	Mouse's body thrashes against its harness as --


	INT.  ROOM 1313 (MATRIX) - DAY

	BULLETS POUND him against the blood-splattered brick
	window.  Gun smoke thickens the room, Cable blasting and
	moving until --

	The HAMMER CLICKS empty.  He screams as a DOZEN GUNS OPEN
	FIRE, ripping him apart.


	INT.  MAIN DECK

	Blood spits from Cable's mouth, his body spasming, then
	lying perfectly still.

	The flat-line ALARM softly cries out from the life
	MONITORS of the two dead men.


	EXT.  HOTEL LAFAYETTE (MATRIX) - DAY

	More police cars arrive as cops break open the lobby
	doors.


	INT.  STAIRWELL (MATRIX) - DAY

	Flying downstairs, Morpheus stops, hearing the police
	swarming below.  He turns and rushes down the hall of the
	eighth floor.  At the end of it, he finds the bricked-up
	windows.

					CYPHER
			That's what they changed.  We're
			trapped.  There's no way out.

	The sound of heavy BOOT-STEPS close around them with the
	mechanical sureness of a vice.

					MORPHEUS
			Give me your phone.

					TRINITY
			They'll be able to track it.

					MORPHEUS
			We have no choice.


	INT.  MAIN DECK

	Tank answers the call.

					MORPHEUS (V.O.)
			Tank, find a structural drawing of
			this building and find it fast.

	His fingers pound the keyboard.


	INT.  LAFAYETTE (MATRIX) - DAY

	Flashlights probe the rotting darkness as the police
	search every floor.


	INT.  MAIN DECK

	The diagram windows onto the screen.

					TANK
			Got it.

					MORPHEUS (V.O.)
			I need the main wet-wall.


	INT.  HALL (MATRIX) - DAY

	Agent Smith pauses, his hand going to his earpiece.


	INT.  ROOM 808 (MATRIX) - DAY

	Morpheus is guided by Tank.

					TANK (V.O.)
			Now left and that's it in front of
			you.

					MORPHEUS
			Good.

	He cuts off the phone.


	INT.  HALL (MATRIX) - DAY

	Agent Smith hears the LINE CLICK dead.

					AGENT SMITH
			Eighth floor.  They're on the
			eighth floor.


	INT.  HALL (MATRIX) - DAY

	Agent Brown hears Smith on his earphone.

					AGENT BROWTJ
			Eighth floor!  Move!


	INT.  STAIRWELL (MATRIX) - DAY

	Cops flood the eighth floor, rushing everywhere.


	INT.  ROOM 808 (MATRIX) - DAY

	Several cops sweep through the room.  It is empty.  As
	they pass the bathroom, we see a man-sized hole smashed
	through the plaster and lathe.


	INT.  WALL (MATRIX) - DAY

	They are inside the main plumbing wall, slowly worming
	their way down the greasy, black stack pipes.

	Above them, light fills the hole they made to get inside.

	INT.  HALL (MATRIX) - DAY

	Brown turns to Smith.

					AGENT BROWN
			Where are they?


	INT.  ROOM 608 (MATRIX) - DAY

	The cops search in silence, straining for a clue, when
	one hears SOMETHING STRANGE near the bathroom.


	INT.  WALL (MATRIX) - DAY

	Cypher has slipped and is wedged between the wall and
	several thick supply pipes.


	INT.  ROOM 608 (MATRIX) - DAY

	The Cop leans in, his ear almost against the thin
	membrane of plaster separating them.  He can hear
	WHISPERS, HISSES and a GRUNT when --

	The WALL suddenly bulges, SHATTER-CRACKING as the Cop
	realizes --

					COP
			They're in the walls!


	INT.  WALL (MATRIX) - DAY

	Neo pulls Cypher free just as the Cop OPENS FIRE --

	BULLETS PUNCHING shafts of light like swords into the box
	of soot-black space.


	INT.  ROOM 608 (MATRIX) - DAY

	The Cop keeps FIRING, his flashlight strapped to his gun
	barrel, lighting up the wall until --

	A BULLET spits out his forehead.  Agent Smith watches the
	BODY fall with a THUD.

					AGENT SMITH
			Are orders that hard to follow?
			I'll say it again.  Morpheus must
			be taken alive.  Understand?


	INT.  WALL (MATRIX) - DAY

	They're almost falling, they're climbing so fast.

	Above them, plaster is smashed open as crunbling bits
	shower down on them, filling the crawlway with dust.


	INT.  ROOM 608 (MATRIX) - DAY

	Agent Smith looks into the open wall, at the exposed
	intestines of the building, and realizes where they are
	going.

					AGENT SMITH
			How like a rodent.


	INT.  WALL (MATRIX) - DAY

	Just below, a RIFLE-BUTT SMASHES open the WALL, light
	raking across the lathe.

					COP
			I got him!  I got him!

	Trinity finds her gun first.  BULLET-HOLES POP out the
	WALL as she STRAFES the room, sending cops diving for
	cover.

	They continue, Trinity exposed for a roment, when a
	creeping cop smashes a fist through and grabs a fistful
	of her hair.

	He starts to yank her out when Neo kicks, his boot
	bursting through plaster and splintering lathe, knocking
	the Cop out.

	They then quickly sink out of sight.


	INT.  BASEMENT (MATRIX) - DAY

	This part of the basement, a dark concrete cavern, was
	the main mechanical room.  There are four enormous
	boilers, dinosaur-like technology that once pumped hot
	water like arteries.

	Black and bloody, they squeeze out from the ceiling into
	the tangled web of pipes.

	Their enemies are waiting for them.

	Blinding lights cut open the darkness as gas-masked
	figures FIRE GRENADE LAUNCHERS.

	Smoke blossoms from the green-metal canisters.

	Morpheus never stops moving.  Searching the floor, he
	finds what.he needs; the cover of the catch basin.

	Cypher watches him pry open the grate, when a gas can
	bounces near him.

					MORPHEUS
			Come on!

	Cypher seems to trip as the cloud envelops him.


	INT.  MAIN DECK

	Cypher's body begins to shiver uncontrollably.

					TANK
			Nerve gas.


	INT.  BASEMENT (MATRIX) - DAY

	Morpheus watches Cypher disappear into the smoke then
	follows the others down the wet-black hole.


	INT.  CATCH BASIN (MATRIX) - DAY

	They crawl through greasy black water in a three foot
	diameter pipe that feeds into the sewer main.


	INT.  BASEMENT (MATRIX) - DAY

	Gas-masked apparitions find the open hole.


	EXT.  HOTEL LAFAYETTE (MATRIX) - DAY

	Cypher is carried out, hand-cuffed, his body still
	shaking, mucus bubbling out his nose.  As he is led past
	Agent Smith, it almost seems that both men smile.

					AGENT SMITH
			We have them now.


	INT.  SEWER MAIN (MATRIX) - DAY

	Neo punches out the screen and then spills down into the
	main water trough.

	Oily water forms around them as they wade across the man-
	made underground river, towards the service catwalk.

	Neo is about to pull himself out when he sees them coming.

	Flashlights and laser sites sweep at them as cops in
	helmets and heavy armor, looking more nachine than human,
	fill both ends of the tunnel.

	There is a single manhole cover above them.

	Morpheus whispers to Trinity.

					MORPHEUS
			You have to get Neo out.
			Understand?  That's all that
			matters now.

					TRINITY
			Morpheus, don't --

					MORPHEUS
			He must get out.  Do you
			understand me?

	She nods.

	A font of water erupts as Morpheus leaps for the manhole
	ladder, his coat flying open like the wings of a manta
	ray.

					COPS
			There he is!  That's him!

	Pools of light wash over him as he hauls himself to the
	surface.

					COP
			He's heading for the street!

	Trinity urges the others to follow her.  Grabbing Neo,
	they wade quietly away from the chaos.


	EXT.  STREET (MATRIX) - DAY

	Morpheus shoots out of the sewer but the police are
	waiting for him.  The closest cop is armed with a
	tranquilized gun.  He fires --

	But Morpheus' is too fast, using the manhole cover as a
	shield, blocking the darts, then --

	Frisbee-ing it into the cop's armored chest, knocking him
	off his feet.

	The cops lunge at him but every part of his body is a
	deadly weapon moving with impossible speed.

	It seems he might fight his way out when he throws a
	spinning back fist that is caught by --

	Agent Smith.

					AGENT SMITH
			So, we meet at last.

					MORPHEUS
			And you are?

					AGENT SMITH
			Smith.  I am Agent Smith.

					MORPHEUS
			You all look the same to me.

					AGENT SMITH
			I've been waiting for this noment.

	Faster than a snake spits, Morpheus cracks Smith with a
	jaw-breaking right.

				MORPHEUS
			Oh, so have I.

	Agent Smith smiles.


	INT.  SEWER MAIN (MATRIX) - DAY

	Trinity leads the others, fading into the darkness of the
	tunnel, lit only with shafts of lights streaming through
	the street drains as we RISE TOWARDS them --

	THROUGH a grate INTO the fight.


	EXT.  STREET (MATRIX) - DAY

	Smith and Morpheus exchange a furious serious of blows
	that is witnessed but not believed by the surrounding
	police.

	Agent Smith delivers a punishing kick that staggers
	Morpheus.

					AGENT SMITH
			You can't win.

	Morpheus smiles.

					MORPHEUS
			I already have.

	He stands up and drops his fists; a steely resolve in his
	eyes.

					AGENT SMITH
			Take him.

	Cops swarm over Morpheus.


	INT.  MAIN DECK

	Tank reaches out to the screen as if reaching for
	Morpheus.

					TANK
			No!


	EXT.  HOTEL LAFAYETTE (MATRIX) - DAY

	Cuff ed and beaten, Morpheus is thrown into a caged
	transport vehicle.  The DOOR CLANGS shut.

	Agent Jones finds Agent Smith.

					AGENT JONES
			The others were lost.

					AGENT SMITH
			You've taken care of Reagan?

	Agent Jones nods.

					AGENT SMITH
			Then the others do not matter.


	EXT.  STREET (MATRIX) - DAY

	A manhole cover cracks open.  Two eyes peek out just as a
	TRUCK RATTLES over it.  The THUNDER DOPPLERS AWAY and the
	cover opens.

	Neo, Trinity, Switch and Apoc climb out.  Trinity pulls a
	water-logged phone from her pocket.

					TRINITY
			We need a phone.


	INT.  MAIN DECK

	Tank is again at the monitors, searching the Matrix.

					TANK
			We gotta find the others.  They're
			still alive.

	The PHONE RINGS.

					TANK
			Operator.

					CYPHER (V.O.)
			I need an exit!  Fast!

					TANK
			Cypher?  I thought they had you?


	EXT.  STREET (MATRIX) - DAY

	Cypher is standing at a public phone.  Across the street
	is the burning paddy wagon that appears to have collided
	witli an oncoming car.

					CYPHER
			There was an accident.  A fucking
			car accident.  All of a sudden.
			Boom.  They're all dead.  I still
			got the shakes but, Jesus,
			someone's going to make a believer
			out of me.


	INT.  MAIN DECK

	Dozer spots the wreck.

					DOZER
			There he is.

					TANK
			I got you.

					CYPHER (V.O.)
			Just get me outta here.


	EXT.  STREET (MATRIX) - DAY

					TANK (V.O.)
			Nearest exit is Franklin and Erie.
			An old appliance store.

	Cypher hangs up and smiles as the fire trucks arrive.

					CYPHER
			An actor.  Definitely.


	INT.  MAIN DECK

	The PHONE RINGS.  Tank answers.

					TANK
			Operator.

					TRINITY (V.O.)
			Tank, it's me.


	EXT.  STREET (MATRIX) - DAY

	They are outside a pawn shop.  Trinity has a new cellular.

					TRINITY
			We need an exit!

					TANK (V.O.)
			Gotcha.  You're not far from
			Cypher.

					TRINITY
			Cypher, I thought --

					TANK (V.O.)
			So did we.  That boy's got nine
			lives.  I sent him to Franklin and
			Erie.

					TRINITY
			Got it.

	She hangs up.


	EXT.  STREET (MATRIX) - DAY

	Running, Cypher turns onto Erie.


	INT.  APPLIANCE STORE (MATRIX) - DAY

	Dead machines, eviscerated and shrouded with dust lay on
	metal shelves like bodies in a morgue.

	Plywood covering a small window is ripped off and Cypher
	crawls inside.

	Deep in the back room, a PHONE that has not rung in years
	begins to RING.


	INT.  MAIN DECK

	Tank punches the emit command.

					TANK
			Got him.

	Cypher's body twitches in its harness, jerking itself
	awake.  His eyes blink open.  Dozer unplugs him.

					DOZER
			System check looks fine.

	Cypher stands, a raspy cough spewing from his lungs.


	EXT.  STREET (MATRIX) - DAY

	Trinity sees the appliance shop.


	INT.  MAIN DECK

	Cypher holds his chest.

					DOZER
			You okay?

					CYPHER
			Goddamn gas.  My lungs are killing
			me.

	He crosses to an overhead bin.

					CYPHER
			We got any pain killers?

					DOZER
			The first aid kit's over here.

	As Dozer stoops for a cabinet, Cypher pulls back a heavy
	blanket exposing a plasma rifle.


	INT.  APPLIANCE STORE (MATRIX) - DAY

	Neo crawls through the window that Cypher opened.


	INT.  MAIN DECK

	Tank finishes loading the exit programs as Cypher rises
	behind him, swinging the weapon at his back.

	He looks over as Dozer turns with the first aid kit, a
	look of frozen disbelief crossing his face --

					DOZER
			No!

	Tank spins as red hot wads of PLASMA EXPLODE through his
	chair and into his back.  Diving, a second BURST tears up
	his side --

	As Dozer shoots a look at the monitor where Tank was
	working.  He stabs the enter command activating the exit
	sequence and ducks under a BARRAGE of PLASMA FIRE-


	INT.  APPLIANCE STORE (MATRIX) - DAY

	The PHONE begins to RING as the others crawl in.

					SWITCH
			God, I love that sound.


	INT.  MAIN DECK

	Dozer rolls up, grabbing a heavy crowbar from a box of
	tools.

	Cypher circles the drive chairs as the sights of the
	plasma rifle find Dozer's face.

	Dozer charges, screaming, and the PLASMA RIFLE SCREAMS
	back.


	INT.  APPLIANCE STORE (MATRIX) - DAY

	The PHONE is still RINGING.

					TRINITY
			You first,.Neo.

	Neo answers the phone when there is a CLICK.  There is no
	signal.  Nothing but silence.

					TRINITY
			What happened?

					NEO
			I don't know.  It just went dead.

	Trinity listens to the dead line and takes out the
	cellular.


	INT. MAIN DECK

	The operator PHONE begins to RING- Cypher steps over the
	body of Tank and looks at the monitor.


	INT.  APPLIANCE STORE (MATRIX) - DAY

	Trinity can almost feel him watching them.  Every
	unanswered RING wrings her gut a little tighter, until --

					CYPHER (V.O.)
			Hello, Trinity.

					TRINITY
			Cypher?  Where's Tank?

					CYPHER (V.O.)
			He had an accident.

					TRINITY
			An accident?  What about Dozer?
			Is Dozer there?


	INT.  MAIN DECK

	He walks over to Trinity's body, staring down at it
	hanging in its coma-like stillness.

					CYPHER
			You know, for a long time, I
			thought I was in love with you,
			Trinity.  I used to dream about
			you...

	He nuzzles his face against hers, feeling the softness of
	it.

					CYPHER
			You are a beautiful woman.  Too
			bad things had to work out like
			this.

	We INTERCUT BETWEEN the appliance store and the main
	deck.

					TRINITY
			You killed them.

					APOC
			What?!

					SWITCH
			Oh God.

	Wearing Tank's operator headgear, Cypher moves among the
	silent bodies.

					CYPHER
			In a way you're very lucky.  Most
			people never know why they die.
			One minute they're alive, the next
			they're dead.  No warning.
			Nothing.  That's why I thought
			maybe I should tell you.  It
			seemed the least I could do.

	He stands over the body of Morpheus, as his anger boils
	up out of him.

					CYPHER
			You see, the truth, the real,truth
			is that the war is over.  It's
			been over for a long time.  And
			guess what?  We lost!  Did you
			hear that?  We lost the war!

					TRINITY
			What about Zion?

					CYPHER
			Zion?  Zion is a part of this
			delusion.  More of this madness.
			That's why this has to be done.
			It has to end.  Now and forever.

	She suddenly sees the entire dark plan.

					TRINITY
			Oh rny God.  This is abzut Zion.
			You gave them Morpheus for the
			access codes to Zion.

	Cypher walks away from Morpheus and bends down next to
	Apoc's body.

					CYPHER
			You see, Trinity, we humans have a
			place in the future.  But it's not
			here.  It's in the Matrix.

					TRINITY
			The Matrix isn't real!

					CYPHER
			Oh, I disagree, Trinity.  I
			disagree.  I think the Matrix is
			more real than this world.  I
			mean, all I do is pull a plug
			here.  But there, you watch a man
			die.

	He grabs hold of the cable in Apoc's neck, twists it and
	yanks it out.

					CYPHER
			You tell me which is more real.

	Apoc seems to go blind for an instant, a scream caught in
	his throat, his hands reaching for nothing, and then
	falls dead.  Switch screams.

					CYPHER
			Welcome to the real world, right?

	He laughs.

					TRINITY
			Somehow, some way, you're going to
			pay for this.

					CYPHER
			Pay for it?  I'm not even going to
			remember it.  It'll be like it
			never happened.  The tree falling
			in the forest.  It doesn't make a
			sound.

	His hand slides around the neck of Switch as he takes
	hold of her plug.

	She suddenly feels her body severed from her mind as she
	is murdered.

					TRINITY
			Goddamn you, Cypher!

					CYPHER
			Don't hate me, Trinity.  I'm just
			the messenger.  And right now I'm
			going to prove that the message is
			true.

	He stands over Neo.

					CYPHER
			If Morpheus was right, then
			there's no way I can pull this
			plug, is there?

	She turns to Neo, eyes wide with fear, and he knows he is
	next.

					CYPHER
			If he is the One, then in the next
			few seconds there has to be some
			kind of miracle to stop me.
			Because if he dies like the others
			that means Morpheus was wrong.
			How can he be the One if he's
			dead?

	He takes hold of the cord when --

	She hears an EXPLOSION and a scream.

	Cypher is on the ground, his left leg blown off at the
	knee.  He rolls over and finds Tank on the ground, and
	the sights of the plasma rifle.

					TANK
			How's it feel, Cypher?  Knowing
			you're about to die?

					NEO
			It's Tank!  He's alive.

	Cypher lunges for Neo's plug just as Tank BLOWS his head
	off.


	INT.  APPLIANCE STORE (MATRIX) - DAY

	They're both listening, trying to figure out what is
	happening when the store PHONE starts to RING.

	Trinity smiles, tears moistening her eyes as Neo throws
	his arms around her.  For a moment, it looks as if they
	might kiss before Trinity lets go.

					TRINITY
			We should, we should hurry.

					NEO
			Yeah.  Right.


	INT.  MAIN DECK

	Trinity's eyes open, a sense of relief surging through
	her at the sight of the ship.  As Tank unplugs her, she
	sees his charred wounds.

					TRINITY
			Tank, you're hurt.

					TANK
			I'll be all right.

					TRINITY
			Dozer?

	Tank's face tightens.

					TRINITY
			I'm sorry, Tank.


	EXT.  NIKO HOTEL (MATRIX) - DAY

	A Japanese luxury hotel in downtown Chicago.

	A military helicopter sets down on the roof.  Heavily
	armed Marines begin to deploy.

	Agent Jones gets out of the helicopter, flanked by
	columns of Marines.  They open the roof access door
	and enter the top-floor maintenance level of the hotel.


	INT.  TOP FLOOR (MATRIX) - DAY

	They get in the elevator.  At every door, at least two
	Marines stop and post guard.


	INT.  HALL (MATRIX) - DAY

	They exit the elevator and walk to the Presidential
	suite; the final two Marines post guard.


	INT.  PRESIDENTIAL SUITE (MATRIX) - DAY

	Inside, he finds Agent Smith.

					AGENT JONES
			There is a problem.  Reagan has
			failed to secure the hardware.

	Agent Smith stares out the window.

					AGENT SMITH
			Never send a human to do a
			machine's job.

					AGENT JONES
			But if Reagan has failed, why
			haven't they pulled the plug?

					AGENT SMITH
			Haven't you learned by now, that
			it is impossible to understand why
			they do the things they do?

	He turns.

					AGENT SMITH
			Continue as planned.  Trace his
			signal to locate their position
			and deploy an extermination unit.

	Morpheus is handcuffed to a chair, stripped to the waist.
	He is bleeding from numerous wounds and is pumped full of
	serum, alternately shivering and sweating.  He is hooked
	up to various monitors with white disk electrodes.

	Agent Brown begins running a trace program.


	INT.  MAIN DECK

	Neo looks at Morpheus whose body is covered with a cold
	sweat.

					NEO
			What are they doing to him?

					TANK
			They're cracking his mind.

					NEO
			How?

					TANK
			They inject virus-like serums to
			break down the system.  It's like
			cracking a computer.  All it takes
			is time.

					NEO
			How much time?

					TANK
			Depends on the mind.  But
			eventually, it will crack and his
			alpha pattern will change from
			this to this.

	Tank punches several commands on Morpheus' personal unit.
	The monitor waves change from a chaotic pattern to an
	orderly symmetrical one.

					TANK
			When it does, Morpheus will tell
			them anything they want to know.

					NEO
			The access codes to Zion.

					TANK
			If an agent got inside Zion's
			mainframe he could do anything.
			Disable the defense system. It
			would be the end of us.

	He looks up at Trinity who is pacing relentlessly.

					TANK
			We can't let that happen.  We have
			to do it, Trinity.  Zion has to be
			protected.

	Trinity sees Cypher's dead body.  Rage overtakes her and
	she starts kicking hin.

					TRINITY
			Goddamnit!  Goddamnit!

					TANK
			We have to pull the plug.

					TRINITY
			No!

					TANK
			We don't have any other choice.

	Those words are like using gasoline to put out a fire and
	we watch the pain in her eyes burn into a blaze.  She
	walks past him and gets into her chair.

					TANK
			Trinity, what are you doing?

					TRINITY
			I'm going in after him.

					TANK
			Morpheus could conform at any
			minute --

					TRINITY
			If he does I'm sure you'll do what
			has to be done.

					TANK
			You saw that place.  It's suicide.

	She glares at him.

					TANK
			I know what Morpheus means to
			you --

					TRINITY
			No.  No, I don't think you do.  If
			you did, then you would know that
			I'm not letting him go.  Not
			without a fight, Tank.

	She yanks her harness tight.

					TRINITY
			Not without a fight.


	INT.  PRESIDENTIAL SUITE (MATRIX) - DAY

	Agent Smith stands in the bedroon of the enormous suite,
	staring out the windows at the city, below, shimmering
	with brilliant sunlight.

					AGENT SMITH
			Have you ever stood and stared at
			it, Morpheus?  Marveled at its
			beauty.  Its genius.  Billions of
			people just living out their 
			lives... oblivious.

	Agent Brown sucks a serum from a glass vial, filling a
	hypodermic needle.

					AGENT SMITH
			Did you know that the first Matrix
			was designed to be a perfect human
			world?  Where none suffered, where
			everyone would be happy.  It was a
			disaster.  No one would accept the
			program.  Entire crops were lost.

	Agent Brown jams the needle into Morpheus' shoulder, and
	plunges down.

					AGENT SMITH
			Some believed we lacked the
			programming language to describe
			your perfect world.  But I believe
			that, as a species, human beings
			define their reality through
			suffering and misery.

	Agent Brown studies the screens as the life signs react
	violently to the injection.

					AGENT SMITH
			The perfect world was a dream that
			your primitive cerebrum kept
			trying to wake up from.  Which is
			why the Matrix was re-designed to
			this:  the peak of your
			civilization.

	He turns from the window.

					AGENT SMITH
			I say 'your civilization' because
			as soon as we start thinking for
			you, it really becomes our
			civilization, which is, of course,
			what this is all about.

	He sits down directly in front of Morpheus.

					AGENT SMITH
			Evolution, Morpheus.  Evolution.

	He lifts Morpheus' head.

					AGENT SMITH
			Like the dinosaur.  Look out that
			window.  You had your time.

	Morpheus stares hard at him, trying hard not to show the
	pain racking his mind.

					AGENT SMITH
			The future is our world, Morpheus.
			The future is our time.


	INT.  MAIN DECK

	Neo goes to his chair and begins strapping in.

					TRINITY
			What do you think you're doing?

					NEO
			You need help.  I'm coming with
			you.

					TRINITY
			No.  No way.  Morpheus sacrificed
			himself so you could escape.
			There's no way you're going back
			in.

					NEO
			Morpheus did what he did because
			he believed that I'm something
			that I'm not.

					TRINITY
			What?

					NEO
			I'm not the One, Trinity.  The
			Oracle told me.

	Trinity is stunned.

					NEO
			She said I had a gift but I still
			had a lot to learn.  She told me
			maybe next life.

					TRINITY
			Did you tell Morpheus?

					NEO
			Why?  It wouldn't mean anything.
			He'd still believe what he wanted
			to believe.  But Morpheus is the
			one that matters.  He's more
			important than me and we both know
			it.

	He straps in.

					NEO
			I may not be what Morpheus thinks
			I am, but if I don't try to help
			him, then I'm not even what I
			think I am.

					TRINITY
			What are you?

					NEO
			His friend.

	INT.  PRESIDENTIAL SUITE (MATRIX) - DAY

	Agent Smith sits casually across from Morpheus who is
	hunched over, his body leaking and twitching.

					AGENT SMITH
			I'd like to share a revelation
			that I've had during my time here.
			It came to me when I tried to
			classify your species.  I've
			realized that you are not actually
			mammals.

	The life signs continue their chaotic patterns.

					AGENT SMITH
			Every mammal on this planet
			instinctively develops a natural
			equilibrium with the surrounding
			environment.  But you humans do
			not.  You move to an area and you
			multiply and multiply until every
			natural resource is consumed and
			the only way you can survive is to
			spread to another area.

	He leans forward.

					AGENT SMITH
			There is another organism on this
			planet that follows the same
			pattern.  Do you know what it is?
			A virus.

	He smiles.

					AGENT SMITH
			Human beings are a disease, a
			cancer of this planet.  You are a
			plague.  And we are... the cure.


	INT.  MAIN DECK

	Trinity and Neo hang motionless in the suspension unit.
	Tank is at the operations station.

					TANK
			Okay.  Store's open.  What do you
			need?

					TRINITY (V.O.)
			Guns.  Lots of guns.

					TANK
			Coming right up.

	He loads the weapons disk.


	INT.  CONSTRUCT

	Racks of weapons appear and Neo and Trinity arm
	themselves.

					TRINITY
			No one has ever done anything like
			this.

					NEO
			Yeah?

	He snap cocks an Uzi.

					NEO
			That's why it's going to work.

	INT.  PRESIDENTIAL SUITE (MATRIX) - DAY

	Agent Smith is again at the window.

					AGENT SMITH
			Why isn't the serum working?

					AGENT BROWN
			Perhaps we are asking the wrong
			questions.

					AGENT JONES
			Or he doesn't know.

					AGENT SMITH
			Of course he knows.  He's
			resisting.

					AGENT BROWN
			How?

					AGENT SMITH
			I don't know.  If I knew...

	Agent Smith hides his knotting fist.  He is becoming
	angry.  It is something that isn't supposed to happen to
	agents.

					AGENT SMITH
			Leave me with him.

	Agent Brown and Jones look at each other.

					AGENT SMITH
			Now!

	INT.  MAIN DECK

	Tank sits down beside Morpheus whose face is ashen like
	someone near death.  He takes hold of his hand.

					TANK
			Hold on, Morpheus.  They're coming
			for you.  They're coming.


	EXT.  NIKO HOTEL (MATRIX) - DAY

	A dark wind blows.


	INT.  NIKO HOTEL (MATRIX) - DAY

	In long, black coats, Trinity and Neo push through the
	revolving doors.

	Neo is carrying a duffel bag.  Trinity has a large metal
	suitcase.  They cut across the lobby drawing nervous
	glances.

	Dark glasses, game faces.

	Several plainclothes cops try to stop them.  They are met
	by the MUTED SPIT of a SILENCED GUN and the RAZORED
	WHISTLE of THROWING STARS.

	The cops slump down to the marbled floor while Neo and
	Trinity do not even break stride.


	INT.  PRESIDENTIAL SUITE (MATRIX) - DAY

	Agent Smith leans close to Morpheus, whispering to him.

					AGENT SMITH
			Can you hear me, Morpheus?  I'm
			going to be honest with you.

	He removes his earphone, letting it dangle over his
	shoulder.

					AGENT SMITH
			I hate this place.  This zoo.
			This prison.  This reality,
			whatever you want to call it, I
			can't stand it any longer.  It's
			the smell, if there is such a
			thing.  I feel saturated by it.  I
			can taste your stink and every
			time I do, I fear that I've
			somehow been infected by it.

	He wipes sweat from Morpheus' forehead, coating the tips
	of his fingers, holding them to Morpheus' nose.

					AGENT SMITH
			Repulsive, isn't it?

	He lifts Morpheus' head, holding it tightly with both
	hands.

					AGENT SMITH
			I must get out of here, I must get
			free.  In this mind is tlie key.
			My key.

	Morpheus sneers through his pain.

					AGENT SMITH
			Once Zion is gone, there's no
			need for me to be here.  Do you
			understand?  I need the codes.  I
			have to get inside Zion.  You have
			to tell me how.

	He begins squeezing, his fingers gouging into his flesh.

					AGENT SMITH
			Tell me!  Tell me!

	The skull is about to shatter when Agents Jones and Brown
	burst into the room.  Agent Smith releases Morpheus.

					AGENT BROWN
			What were you doing?

	Agent Smith recovers, replacing his ear piece.

					AGENT JONES
			You don't know.

					AGENT SMITH
			Know what?

	Agent Smith listens to his earphone, not believing what
	he is hearing.


	INT.  ELEVATORS (MATRIX) - DAY

	They get in.  Trinity immediately drops and opens the
	suitcase, wiring a plastique and napalm bomb.

	Beneath their trench coats is an arsenal of weapons slung
	from climbing harnesses.

	Neo hits the emergency stop.  He pulls down part of the
	false ceiling and finds the elevator shaft access panel.


	INT.  PRESIDENTIAL SUITE (MATRIX) - DAY

	Agent Jones looks at Morpheus.

					AGENT JONES
			I think they're trying to save
			him.


	INT.  ELEVATOR SHAFT (MATRIX) - DAY

	Neo ratchets down a clamp onto the elevator cable.  Both
	of them lock on.  He looks up the long, dark throat of
	the building and takes a deep breath.

					NEO
			There is no spoon.

	Neo whips out his gun and presses it to the cable, lower
	than where they attached themselves.

	BOOM!  The CABLE SNAPS.

	The counter-weights plummet, yanking Trinity and Neo up
	through the shaft as --

	The elevator falls away beneath them, distending space,
	filling it with the sound of WHISTLING METAL as they soar
	to the top.


	INT.  LOBBY (MATRIX) - DAY

	The ELEVATOR hits the botton.

	BA-BOOM!

	The massive EXPLOSION blows open the doors, fire clouds
	engulfing the elevator section of the lobby.


	INT.  PRESIDENTIAL SUITE (MATRIX) - DAY

	The Agents hear the BLAST AND FIRE ALARMS.

					AGENT JONES
			Lower level --

					AGENT BROWN
			They are actually attacking.


	INT.  ELEVATOR SHAFT (MATRIX) - DAY

	Hanging by a rope, Trinity hot-wires the panel for the
	door.


	INT.  TOP FLOOR (MATRIX) - DAY

	Nervous, the Marines watch as the ELEVATOR "DINGS" softly
	and slides open.

	Black smoke rises out of the exposed shaft.

	The nearest Marine eases to the edge, peering down at the
	churning blaze engulfing the lower levels.

	He does not see Trinity and Neo above him until it is too
	late.

	Krack!  Neo kicks, knocking the Marine flying down into
	the shaft.

	Before the others can react, Trinity flips out into the
	hall, decking the nearest Marine.  Neo cracks another.

	The fight is over before it begins.


	INT.  PRESIDENTIAL SUITE (MATRIX) - DAY

	An enormous EXPLOSION THUNDERS above them, shaking the
	building.  The ALARM SOUNDS, emergency sprinklers begin
	showering the room.

	Agent Smith smashes a table.

					AGENT SMITH
			Find them and destroy them!

	Agent Jones nods and touches his ear piece.


	EXT.  ROOF (MATRIX) - DAY

	The roof-access tower is now engulfed in flames as Neo
	and Trinity lay waste to a dozen more Marines.

	Guns and knives, like extensions of their bodies used
	with the same deadly precision as their feet and their
	fists.

	Across the roof, the pilot inside the army helicopter
	watches the ferocious onslaught.

					PILOT
			I repeat, we are under attack!

	Suddenly his face, his whole body dissolves, consumed by
	spreading locust-like swarm, of STATIC as --

	Agent Jones emerges.

	Just as she drops the last Marine, Trinity sees what's
	coming.

	Neo sees her, the fear in her face, and he knows what is
	behind him.

	Screaming, he whirls, GUNS filling his hands with
	thought-speed.

	Fingers PUMPING, SHELLS ejecting, dancing up and away, we
	look through the sights and gun smoke at --

	The Agent blurred with motion --

	Until the HAMMERS CLICK against empty metal.

					NEO
			Trinity!

	Agent Jones charges.

					NEO
			... help.

	His GUN BOOMS as we enter the liquid space of --

	Bullet-time.

	The AIR SIZZLES with wads of lead-like angry flies as Neo
	twists, bends, ducks just between them.

	Agent Jones still running, narrows the gap, the BULLETS
	coming faster until --

	Neo bent impossibly back, one hand on the ground as a
	spiraling gray ball shears open his shoulder.

	He starts to scream as another digs a red groove across
	his thigh.

	He has only time to look up, to see the barrel when Agent
	Jones, standing over him, pulls the TRIGGER the final
	time.

	CLICK.  Empty.

	Neo rolls, reaching for another gun when around-house
	kick snaps his jaw.  Agent Jones grabs the gun and levels
	it at Neo.

					AGENT JONES
			Only human...

	Suddenly Agent Jones stops.  Something is wrong.  He
	scans the roof.  Trinity is gone.

	Immediately, he whirls around and turns straight into the
	muzzle of her .45 --

	Jammed right into his head.

					TRINITY
			Dodge this, motherfucker!

	BOOM!  BOOM!  BOOM!  The body flies back with a flash of
	mercurial light and when it hits the ground --

	It is the pilot.

	Trinity helps Neo up.

					NEO
			Thanks.

					TRINITY
			You're hit --

					NEO
			I'm fine.

	Neo is already looking at the helicopter.

					NEO
			Can you fly that thing?

					TRINITY
			Not yet.

	She pulls out a cellular phone.


	INT.  HOVERCRAFT

	Tank is back at the controls.

					TANK
			Operator.

					TRINITY (V.O.)
			Tank, I need a pilot program for a
			military M-109 helicopter.

	Tank is immediately searching the disk drawers.

					TRINITY (V.O.)
			Hurry!

	His fingers flash over the gleaming laser disks, finding
	one that he feeds into Trinityls supplement drive,
	punching the "load" cormands on her keyboard.


	EXT.  ROOF (MATRIX) - DAY

	Trinity's eyes flutter as information surges into her
	brain, all the essentials of flying a helicopter absorbed
	at light-speed.

					TRINITY
			Let's go.


	INT.  HALL (MATRIX) - DAY

	Marines, trying to communicate with the men on the roof,
	are beginning to panic when Agent Jones comes around the
	corner.

					SERGEANT
			Sir!  Sir!  There was gunfire --
			we've lost communication with the
			roof!

					AGENT JONES
			Remain at your posts.

					SERGEANT
			But, sir -- the fire -- we should
			evacuate!

					AGENT JONES
			You will do as you are ordered!

					SERGEANT
			Yes, sir.

	Agent Jones marches into the Presidential Suite.


	INT.  PRESIDENTIAL SUITE (MATRIX) - DAY

	Agent Jones throws open the bedroom door and enters,
	walking through the puddles pooling in the carpet.

	Over the RUSHING WATER and the ALARMS, Agent Smith hears
	a SOUND and understands the seriousness of the attack.

	He turns to the wall of windows as the helicopter drops
	INTO VIEW --

	Neo is in the back bay, aiming the mounted .50 machine
	gun.

					AGENT SMITH
			No.

	The GUN jumps and BULLETS EXPLODE through the WINDOW in a
	cacophony of CRASHING GLASS --

	As the Agents go for their weapons.

	But Neo is too close, the .50 CALIBER too fast and
	BULLETS are everywhere, perforating the room.

	Agent Smith is hit first, his body jack-knifing back,
	blood arcing out with a sudden flash of light --

	Then Agent Brown, his GUN still FIRING as his body falls.

	And finally Agent Jones.

	Neo stares at Morpheus, trying to will him into action.

					NEO
			Get up, Morpheus!  Get up!

	Morpheus sits unmoving, his head still down.

	Neo grabs the climbing rope just as marines burst into
	the adjoining room.

	He attaches only one end to his harness when they OPEN
	FIRE.

	Quickly he swings the GUN, SPRAYING the other room,
	WINDOWS SHATTERING, FURNITURE EXPLODING, marines diving
	for cover.


	INT.  HALL (MATRIX) - DAY

	Just outside the Presidential Suite, three marines
	blister with snow-static.


	INT.  PRESIDENTIAL SUITE (MATRIX) - DAY

	Morpheus lifts his face into the room's rain.  His eyes,
	still white, begin to blink, twitch, then close.

	And when he opens them, they are again dark and flashing
	with fire.

	The Agents knife into the room, FIRING even as Neo's
	BULLET TRAILS chase them.

	Morpheus strains at his handcuffs.

	The Agents and the marines turn the tide, BLASTING LEAD,
	RICOCHETING, POCK-MARKING the COPTER.

	FIRING wildly, Neo turns to see Morpheus rising, snapping
	the handcuffs, starting for the window.

	Agent Smith stops and sees Morpheus run past the open
	bedroom door.

					AGENT SMITH
			Nooo!

	He FIRES, sweeping across the sheetrocked wall in a
	perfect line.

	For an instant, we see the BULLETS SHRED, PUNCTURING the
	WALL, searing through the wet air with jet trails of
	chalk.

	And as Morpheus starts to dive for the window, a bullet
	buries itself in his leg --

	Knocking him off balance.

					NEO
			He won't make it.

	Morpheus lunges, out of control --

	As Neo spins, every move a whip crack --

	Snapping the other rope-end onto a bolted bar.

	Morpheus begins to fall when Neo hurls himself into the
	wide blue empty space --

	Flying for a moment.

	The rope snaking out behind him; an umbilical cord
	attached to a machine.

	As their two bodies, set in motion, rushing at each other
	on a seemingly magnetic course until --

	They collide.

	Almost bouncing free of each other, arms, legs,
	scrambling, hands searching in furious desperation,
	finding hold and clinging.

	Until the line ends, snapping taut, cracking their
	fragile embrace.  Morpheus tumbles, legs flipping over,
	falling down --

	The ground deliriously distant --

	As Neo snatches hold of his mentor's still handcuffed
	wrist.

					NEO
			Gotcha!

	Trinity is already pulling the copter up and away.

	As Agent Smith grabs the M-16 from the nearest marine.

	He'll bring them all down.  Targeting the helicopter, he
	aims at something only he can see: the oil line.

	PONK.  PONK.  PONK.  The rear HULL is PUNCHED full of
	holes and smoke and oil pours out like black blood.

					TRINITY
			Shit-shit-no!

	Neo is pulling Morpheus up to him when he hears the
	HELICOPTER BEGIN TO DIE.

					NEO
			Oh fuck.

	Trinity throws the helicopter towards the roof of the
	nearest building.

	Morpheus and Neo cling to one another as they and the
	machine above them begin to fall.

	The ENGINE GRINDS, the CHOPPING BLADES start to slow
	while --

	The Agents stand in the open shattered window, watching
	the helicopter disappear behind taller buildings.

	Carried by its nomentum, Trinity guides the parabolic
	fall over the nearest roof where --

	Neo and Morpheus drop safely, rolling free as the rope
	goes slack.  Neo gets to his feet, trying to detach
	himself but --

	The helicopter is falling too fast, arcing over the roof
	like a setting sun --

	The coils of slack snap taught --

	Yanking Neo off his feet, dragging him with ferocious
	speed towards the edge even as --

	Trinity lunges for the back door, her gun in one hand,
	grabbing for the rope with the other --

	Neo flies like a skipping stone, hurtling straight AT us,
	when his feet hit the rain gutter --

	A fulcrum that levers him up just as --

	Trinity FIRES, severing the cord from the HELICOPTER,
	falling free of it as it SMASHES, blades first into a 
	glass skyscraper.

	Holding onto the rope she swings, connected to Neo, who
	stands on the building's edge watching her arc beneath
	him as the HELICOPTER EXPLODES --

	She bounces against a shatterproof window that spider-
	cracks out while FLAMES ERUPT behind her.


	INT.  MAIN DECK

	Tank stares at the screen, his mouth agape.

					TANK
			He's the One.  He's got to be...


	EXT.  ROOFTOP (MATRIX) - DAY

	Neo pulls Trinity up into his arms.  Both shaking, they
	hold each other again.

					MORPHEUS
			I knew it!  I goddamn knew it!

					TRINITY
			Morpheus!

	She runs at him, throwing her arms around him.

					MORPHEUS
			Do you believe me now?  He's the
			One!  Who else could have done
			this?

					NEO
			Morpheus, I know you won't believe
			me but the Oracle told ne I'm not
			the One.

					MORPHEUS
			It doesn't matter if I don't
			believe you --

	His eyes light up.

					MORPHEUS
			What matters is that you don't
			believe her.


	INT.  MAIN DECK

	The PHONE RINGS.

					TRINITY (V.O.)
			Tank, get us out of here.

					TANK
			Got one ready.  An underground El
			station.  State and Balbo.

					TRINITY (V.O.)
			See ya soon.

	LINE GOES DEAD.  Tank looks at the bodies and smiles.

					TANK
			See ya soon.


	EXT.  ROOFTOP (MATRIX) - DAY

	The rope is all that remains.  Agent Smith can barely
	control his anger.

					AGENT BROWN
			The trace was completed.

					AGENT JONES
			We have their position.

					AGENT BROWN
			The extermination unit is in
			place.

					AGENT JONES
			Order the strike.

	Agent Smith can't stand listening to them.  He moves to
	the edge of the building, looking out at the surrounding
	city.

					AGENT SMITH
			They're not out yet.


	INT.  "EL" STATION (MATRIX) - DAY

	A metal gate is locked, the sign reading, "Station
	Closed."  Neo looks around, takes out a GUN and BLOWS OFF
	the LOCK.

	In the moist underground distance they hear the MUTED
	RING of a TELEPHONE.

	The PHONE is RINGING inside a graffiti-covered booth.

	Across from it, sitting hunched against the red concrete
	wall, is an OLD MAN.  He stares at the RINGING PHONE,
	taking a final pull off his T-bird.  No one is around.
	It continues to RING.

	Determined, he stands and walks to the booth.  He is
	about to answer the phone, when Neo sees him.

					NEO
			Don't!

	The Old Man stops, Neo rushes at hin, gliding smoothly
	over the turnstiles.

					OLD MAN
			I'm sorry -- I didn't mean!

	The Old Man is shaking, terrified.  Neo looks at his gun.
	He glances over his shoulder, then eases back the hammer.

					NEO
			Get outta here.  Okay?  Run!  Go!

	The Old Man nods, turns and hurries deeper into the urban
	cave, disappearing into the shadows as Trinity and
	Morpheus arrive.

					TRINITY
			What happened?  Was that --

					NEO
			It was nobody.

	Neo turns to the RINGING BOOTH.

					NEO
			Let's go!  You first, Morpheus.

	Morpheus gets in and answers the phone.

	Lost in the shadow, the Old Man turns back and watches as
	Morpheus disappears, the phone dropping, dangling by its
	cord.

	His eyes grow wide, glowing white in the dark.


	EXT.  ROOFTOP (MATRIX) - DAY

	Agent Smith stares, his face twisted with hate.  He will
	never be free of the Matrix.

	He starts to turn from the edge of the building when he
	suddenly hears it, his head whipping back around,
	staring --


	INT.  "EL" STATION (MATRIX) - DAY

	As the Old Man stares.

	Trinity hangs up the phone.  She turns to Neo, standing
	close enough to kiss him.

					TRINITY
			Morpheus is right, you know.  It
			doesn't matter what he believes or
			even what the Oracle believes.
			What matters is what you believe.

					NEO
			I believe...

	He stares at the fullness of her lips.

					NEO
			I want to kiss you.

	She smiles.

					TRINITY
			I want to kiss you too...

	The PHONE begins to RING.

					TRINITY
			But I want it to be real.

	She pulls herself away and gets into the booth when
	something catches Neo's eye and he looks to where the Old
	Man had been.

	She hears him SCREAM and sees Agent Smith emerge as if
	formed by congealing darkness, charging with a fistful of
	metal.

	The GUN FIRES, the BULLET flying at her, BURSTING through
	the plastic WINDOW just as --

	Trinity disappears.

	The handset hanging in the air as the BULLET HITS,
	SHATTERING the EAR-PIECE.


	INT.  HOVERCRAFT

	Trinity blinks, shivering as her conscious exits the
	Construct.

					TRINITY
			Neo!

					TANK
			What the hell just happened?

					TRINITY
			An Agent!  You have to send me
			back!

					TANK
			I can't!


	INT.  "EL" STATION (MATRIX) - DAY

	GUN REPORT THUNDERS through the underground, both men
	BLASTING, moving at impossible speed.

	For a blinking noment we enter BULLET-TIME.

	Gun flash tongues curl from Neols gun, bullets float
	forward like a plane noving across the sky, cartridges
	cartwheel into space.

	An instant later they are nearly on top of each other,
	rolling up out of a move that is almost a mirrored
	reflection of the other --

	Each jamming their gun tight to the other's head.

	They freeze in a kind of embrace; Neo sweating, panting,
	Agent Smith machine-calm.

	Agent Smith smiles.

					AGENT SMITH
			You're empty.

	Neo pulls the TRIGGER.  CLICK.

					NEO
			So are you.

	The smile falls.  Agent Smith yanks his TRIGGER.

	CLICK.

	Agent Smith's face warps with rage and he attacks, fist
	flying at furious speed, blows and counters, Neo
	retreating as --

	A knife-hand opens his forearm, and a kick sends him
	slamming back against a steel column.

	Stunned, he ducks just under a punch that crunches into
	the beam, STEEL CHUNKS EXPLODING like shrapnel.

	Behind him, Neo leaps into the air, delivering a neck-
	snapping reverse round-house.  Agent Smith's glasses fly
	off and he glares at Neo; his eyes, ice blue.

					AGENT SMITH
			You can't win.

					NEO
			I already have.

	He attacks with a vicious series of blows but the Agent
	seems to absorb them, waiting for his opening.

	And this time Agent Smith's attack is too much, an
	unrelenting fury, fists pounding like jackhammers.


	INT.  HOVERCRAFT

	Trinity watches Neo as his body jerks, mouth coughing
	blood, his life signs going wild.

					TRINITY
			Jesus, he's killing him!


	INT.  "EL" STATION (MATRIX) - DAY

	Agent Smith grabs hold of him, lifting him into the air,
	hurling him against the curved wall of the train tunnel,
	where he falls inches from the electrified third-rail.

	The Agent is about to jump down, and press his attack
	when he hears sonething.  From deep in the tunnel, like
	an animal cry; a burst of high-speed METAL GRINDING
	against METAL.

	The sound of an ON-COMING TRAIN.


	INT.  HOVERCRAFT

	Tank is trying to find another entrance.

					TRINITY
			Send me back, Tank!  Anywhere!

					TANK
			I'm looking, Trinity!  I'm
			looking!

	From the cockpit, an ALARM sounds.  Morpheus hurries to
	the front console, typing, bringing up the radar.

	Trinity follows him.

					TRINITY
			What is it... oh no.

	In every pipe surrounding them, they see the
	Extermination Unit.

					TRINITY
			Sentinels.


	INT.  SEWER MAIN

	The killing machine we saw in the History Program blister
	by us like tracer bullets shot down the throat of the
	abyss.


	INT.  "EL" STATION (MATRIX) - DAY

	Neo tries to get up.  Agent Smith jumps down onto the
	tracks and drop-kicks him in the face.

	The world begins to shake, RUMBLING as the TRAIN NEARS.

					AGENT SMITH
			Do you hear that, Mr. Anderson?

	Agent Smith grabs Neo in a choke-hold, forcing him to
	look down the tracks, the train's headlight burning a
	hole in the darkness.

					AGENT SMITH
			That is the sound of
			inevitability.

	Neo sees it coming and he starts to fight.

					AGENT SMITH
			It is the sound of your death.

	There is another METAL SCREECH, MUCH LOUDER, closer, as
	Agent Smith tightens his hold.  Neo is unable to breathe.

					AGENT SMITH
			Goodbye, Mr. Anderson.

	The TRAIN ROARS at them, swallowing Agent Smith's words.

	The veins bulge in Neo's head, as he grits through the
	pain.

	He is not ready to die.

					NEO
			My name is Neo.

	Impossibly, he hurls himself straight up, smashing Smith
	against the concrete ceiling of the tunnel.

	They fall as the sound and fury of the TRAIN EXPLODES
	INTO the station.

	Neo back-flips up off the tracks just as --

	The train barrels over Agent Smith.

	Neo stands, knees shaking, when the train slams on its
	emergency brake.  With an ear-splitting SHRIEK of
	TORTURED RAILS, the train slows, part of it still in the
	station.

	Neo turns, limping, starting to run, racing for the
	escalator --

	As the train comes to a stop and the doors of the last
	car open; Agent Smith bursts out in furious pursuit, his
	glasses again intact.


	INT.  HOVERCRAFT

	Morpheus checks the ship's self destruct key.

					TRINITY
			You can't use that until Neo is
			out!

					MORPHEUS
			I know.  Don't worry, he'll make
			it.


	EXT.  CITY STREET (MATRIX) - DAY

	A man sits in his Mercedes, talking on his car phone when
	his door is thrown open.  Neo yanks him out and jumps in.

	Further down the street, Agent Smith slows, calmly
	touching his ear-piece.

	Neo throws the car across traffic, rocketing down a side-
	street.


	INT.  CAR (MATRIX) - DAY

	Driving like a demon with one hand, he grabs the car
	phone and dials long distance.

	INT.  HOVERCRAFT

	Tank answers.

					TANK
			Operator.

					NEO (V.O.)
			Mr. Wizard, Get me the fuck out
			of here!


	INT.  CAR (MATRIX) - DAY

	Looking over his shoulder, watching the mirrors, Neo
	drives almost unconsciously.

					NEO
			Hurry, Tank!  I got some serious
			pursuit!


	INT.  HOVERCRAFT

	The keyboard clicking, Tank searches for an exit.
	Trinity screams into the headset.

					TRINITY
			Neo, you better get your ass back
			here!


	INT.  CAR

					NEO
			I'm trying, Trinity.  I'm trying.

					TANK (V.O.)
			I got one!

	Neo glances to his right and sees Agent Brown, now
	driving the car beside his.  Agent Brown swerves,
	slamming into him.

					TANK (V.O.)
			Wabash and Lake.  A hotel.

	Neo fights the steering wheel as Agent Brown pushes the
	car up over the median.

					TANK (V.O.)
			Room 303.

	Neo drops the phone as his car bucks into the opposing
	lane --

	Directly into the charging path of an enormous truck
	driven by Agent Smith.

	Neo dives from the Mercedes as the truck plows into it,
	rending metal and GLASS, crushing through, totaling other
	cars, as it EXPLODES.

	Neo is up and running even as orange and black clouds
	billow up behind hin.


	EXT.  CITY STREET (MATRIX) - DAY

	Three figures silhouette by the burning wreckage become
	the three agents.

	Further down the street, Neo hauls his broken, bleeding
	ass.

	Agents Brown and Smith slow, touching their ear-pieces as
	Agent Jones continues chasing full-bore.

	Neo spins around a corner, racing toward a hotel called:
	the Heart of Chicago Hotel.

	Only Agent Jones is behind him now.

	Neo dives into the alley.  At the far end he sees Agent
	Brown charging.  Neo leaps for the fire escape and begins
	to climb.


	INT.  SEWER MAIN

	Sentinels open and shift like killer kaleidoscopes as
	they ready their weapons, swarming around the
	Nebuchadnezzar.


	INT.  HOVERCRAFT

	The hovercraft booms as machines drop onto it.

					TANK
			I'm going to make the call.

					MORPHEUS
			Do it!


	INT.  "HEART OF CHICAGO" HOTEL (MATRIX) - DAY

	Agent Snith is in the elevator when he hears the DISTANT
	RING of a PHONE.


	EXT.  ALLEY (MATRIX) - DAY

	The agents chase him, FIRING, BULLETS SPARKING and
	RICOCHETING even as Neo jumps for the third-floor
	platform.

	Neo kicks in the window, jumping into the hall.  The
	doors count backwards:  310...  309...


	INT.  HOVERCRAFT

	Morpheus grabs the biggest gun he can find.  The lasers
	begin to slice through the hull.

					TRINITY
			Where is he?

					TANK
			Almost there.

					MORPHEUS
			He's going to make it.

					TRINITY
			Hurry, Neo.


	INT.  HALL (MATRIX) - DAY

	Neo can hear the PHONE RINGING.

	305...  304...

	Agent Brown reaches the broken window behind him just as
	Neo grabs the handle of 303, throwing open the door to
	find --

	Agent Sniith, waiting, .45 cocked.

	Neo can't move -- can't think --

	BOOM.


	INT.  HOVERCRAFT

	Neo's body jerks, and everyone hears it as the life
	monitors snap flat-line.

	Trinity screams.  Morpheus is frozen in disbelief.


	INT.  HALL (MATRIX) - DAY

	Three holes in his chest, Neo falls to the blue shag
	carpeting, blood smearing down the wallpaper.

	Agent Smith stands over him, still aiming, taking no
	chances.

					AGENT SMITH
			Check him.


	INT.  HOVERCRAFT

	Through the lasered opening, Morpheus screams, blasting
	away at the machines; comet-wads of plasma burning holes
	in their armored housings.

	Trinity collapses onto Neo's body.

					TRINITY
			No-no-no!  Neo, you're not dead!
			You can't be dead!


	INT.  HALL (MATRIX) - DAY

	Kneeling beside him, Agent Brown checks his vital signs.

					AGENT BROWN
			He's gone.

	Agent Smith smiles, standing over him.

					AGENT SMITH
			I told you, you couldn't win.


	INT.  HOVERCRAFT

	Tank is hit, a laser bolt knocking him to the ground.
	They can't hold them off any longer.  Morpheus lunges for
	the self destruct --

	As Trinity whispers in Neo's ear.

					TRINITY
			You're right here.  I'm holding 
			you, Neo.  I'm not letting you go.
			Do you hear me?  I won't let you
			go.


	INT.  HALL (MATRIX) - DAY

	The agents walk to the elevator, leaving Neo's body
	behind.


	INT.  HOVERCRAFT

	Morpheus flicks the Plexiglas shield of the self-
	destruct.

					TRINITY
			Goddamnit, Neo!  Don't give it up!
			Not now!

	She pounds on his chest.

					TRINITY
			Not now!


	INT.  HOTEL HALL (MATRIX) - DAY

	The BLOW ECHOES deep in his mind.

	His eyes snap open.


	INT.  HOVERCRAFT

	Trinity screams as the monitors jump back to life.  Tank
	and Morpheus stare, unbelieving.

	It is a miracle.

					TRINITY
			Now get up!


	INT.  HALL (MATRIX) - DAY

	Neo struggles, holding his chest, sitting up.  Down the
	hall, he sees the elevator closing and --

	Agent Smith staring at him as if he were looking at a
	Cypher.

	Neo gives him the finger.

					AGENT SMITH
			Nooooo!

	Agent Smith pounds on the elevator door.


	INT.  HOVERCRAFT

	A sentinel BLOWS a hole in Morpheus' right arm and he
	screams, refusing to let go of the detonator.

	INT.  ROOM 303 (MATRIX) - DAY

	Neo dives for the RINGING PHONE.


	INT.  HOVERCRAFT

	Machines split open the craft, pouring in, lasers
	targeting everywhere.

	A beat finds the center of Morpheus' forehead and he
	screams, ready to die.

					TRINITY
			Now!

	He turns the key.


	INT.  OVERFLOW PIT

	A blinding shock of white lights flood the chamber;
	sentinels blink and fall instantly dead, filling the pit
	with their cold, metal carcasses.


	INT.  HOVERCRAFT

	In the still darkness, only the humans are alive.

					TRINITY
			Neo?

	His eyes open.  Tears pour from her smiling eyes as he
	reaches up to touch her.

	And she kisses hin; it seems like it might last forever.

									FADE TO BLACK.


	FADE IN:

	ON COMPUTER SCREEN

	as in the opening.  The cursor beating steadily, waiting.

	A PHONE begins to RING.

	It is answered and the screen fills instantly with the
	trace program.  After a long beat, we recognize Neo's
	voice.

					NEO (V.O.)
			Hi.  It's me.  I know you're out
			there.  I know you're working as
			fast as you can to catch me.

	We CLOSE IN ON the racing columns of numbers shimmering
	across the screen.

					NEO (V.O.)
			I thought I should call and let
			you know how things stand.

	We DIVE THROUGH the numbers, surging UP THROUGH the
	darkness, sucked TOWARDS a tight constellation of stars.

					NEO (V.O.)
			I know you're real proud of this
			world you've built, the way it
			works, all the nice little rules
			and such, but I've got some bad
			news.

	We realize that the constellation is actually the holes
	in the mouthpiece of a phone.  Seen from inside.

					NEO (V.O.)
			I've decided to make a few
			changes.

	We SHOOT THROUGH the holes as Neo hangs up the phone.

	He steps out of the phone booth and starts walking,
	wearing a long black coat and dark glasses.  He passes a
	mother dragging her little BOY, who cranes his neck as --

	Neo takes off, flying up into the air.

					BOY
			Mommy!  Mommy!

					MOMMY
			What?

					BOY
			That man!  That man flies!

					MOMMY
			Don't be silly, honey.  Men don't
			fly.

	There is a RUSH of AIR as the Boy stares up as Neo shoots
	overhead.  His coat billowing like a black leather cape
	as he soars up, up, and away.

										FADE OUT.





					THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)



