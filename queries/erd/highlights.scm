; Keywords
[
  "entity"
  "relate"
  "weak"
  "isa"
] @keyword

[
  "key"
  "set"
] @keyword.modifier

[
  "require"
  "single"
  "cover"
  "overlap"
] @type.qualifier

; Identifiers and Names
(entity_stmt name: (identifier) @type.definition)
(relate_stmt name: (identifier) @function)
(isa_stmt parent: (identifier) @type)
(isa_stmt child: (identifier) @type)
(related_entity entity: (identifier) @type)

; Attributes
(attr (identifier) @variable)

; Punctuation
[
  "("
  ")"
  "{"
  "}"
] @punctuation.bracket

[
  ","
  ";"
] @punctuation.delimiter

; Comments
(comment) @comment

; String literals (quoted identifiers)
(identifier 
  "\"" @string
  (_) @string
  "\"" @string)
