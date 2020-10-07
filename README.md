game wiki project store all game data(characters, screenshots, cheats, etc...)

ideas => 

	game score(from user)
	comment

DevOPS

Backend =>

	1.[ ] MongoDB server with mongoose
	2.[ ] Graphql Server with authentication 
	3.[ ] JWT for auth
	4.[ ] kubernetes and Docker for scale 

	Mongoose schemas => 
		game {
			name: string!B
			maincharacter: {name, icon}
			characters: {name, icon}
			!gamescore: number
			!comments: [{user, date, comment}]
		}
	Grahpql => 
		secure mutation with jwt


Frontend => 

	responsive design
	styled component


