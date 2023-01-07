package models

import (
	"time"
)

type Content struct {
	Title     string    `json="title" binding="required"`
	CreatedAt time.Time `json="createdAt", omitempty, binding="required"`
	Author    string    `json="author", omitempty, binding="required"`
	Body      string    `json="body", omitempty, binding="required"`
}
