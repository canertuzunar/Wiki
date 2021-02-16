game wiki project store all game data(characters, screenshots, cheats, etc...)


feature => 
	game score(from user)
	comment


Backend =>
	Data Structure =>
	Game => { 
		url(Game Photo) => String 
		name => String,
		mainCharacter => String(Searchable?),
		category => String(Searchable?), 
		publisher => String(Searchable?),
		developers => String(Searchable?),
		engine => String(Searchable?),
		platforms => String(Searchable?),
		directors => String(Searchable?),
		series => String
		characters {
			name: String,
			status: String,
			imageURL: String
			*Maybe this part can be insert to document*imageURL: String
		} 
		content: String(Markdown)
	}

	1.[x] MongoDB server with mongoose
		1.[x] Engine
		2.[x] Game
		3.[x] Developer
		4.[x] User
	2.[x] Graphql Mutation Server with authentication 
		1.[x] create/login user
			1.[] create default user(admin)
		1.[x] hash the password with becrypt
		2.[x] verify the token	
	4.[ ] kubernetes and Docker for scale 
Frontend => 

	1.[x]SearchBar Focus
	2.[]Responsive Design
	4.[]Refactor the style code
	5.[]Change Design
	6.[]Module System


#
#
#
