microservice architecture
authenticaton
authorization

content management
user management
RBAC!!!
blob service
markdown support


content structure {
    id
    title
    createdAt
    comments(foreign ids)
    body(markdown?)
    notes
    resources
    author
    contributor
  }

comment structure {
    id
    body
    author
    like
    dislike
  }

user structure {
    name
    lastname
    birthdate
    email
    contents
    comments
    author point
    role
    following
    followers
  }

