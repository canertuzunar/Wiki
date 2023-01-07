package controllers

import (
	"net/http"

	"github.com/canertuzunar/Wiki/db"
	"github.com/canertuzunar/Wiki/models"
	"github.com/gin-gonic/gin"
)

func CreateContent(c *gin.Context) {
	body := models.Content{}
	c.BindJSON(&body)
	insertStr := `insert into "Wiki"("Title") values($1)`
	db := db.CreateConnection()
	db.QueryRow(insertStr, &body.Title)
	c.JSON(http.StatusOK, "content is created")
}

func GetContent(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "content created"})
}

func DeleteContent(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "content created"})
}

func UpdateContent(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "content created"})
}
