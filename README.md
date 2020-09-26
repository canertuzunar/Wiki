game wiki project store all game data(characters, screenshots, cheats, etc...)

ideas => 

game score(from user)
comment


Backend => {
	[] MongoDB server with mongoose
	[] Graphql Server with authentication 
	[] JWT for auth
	[] kubernetes and Docker for scale 

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
}

Frontend => {
	responsive design
	styled component
}

