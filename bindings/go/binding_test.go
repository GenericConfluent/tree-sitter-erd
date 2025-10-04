package tree_sitter_erd_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_erd "github.com/genericconfluent/tree-sitter-erd/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_erd.Language())
	if language == nil {
		t.Errorf("Error loading Erd grammar")
	}
}
