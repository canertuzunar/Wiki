package main

import (
	"github.com/canertuzunar/Wiki/controllers"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.New()
	router.POST("/", controllers.CreateContent)
	router.Run(":3000")
}
