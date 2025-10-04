/**
 * @file DSL for writing ER diagrams
 * @author GenericConfluent <m13power@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: 'erd',

  extras: $ => [
    /\s/,
    $.comment,
  ],

  rules: {
    document: $ => repeat(choice(
      $.entity_stmt,
      $.relate_stmt,
      $.isa_stmt
    )),

    entity_stmt: $ => seq(
      'entity',
      field('name', $.identifier),
      choice(
        $.attr_block,
        ';'
      )
    ),

    relate_stmt: $ => seq(
      optional('weak'),
      'relate',
      field('name', $.identifier),
      '(',
      commaSep1($.related_entity),
      ')',
      choice(
        $.attr_block,
        ';'
      )
    ),

    related_entity: $ => seq(
      field('modifier', optional(choice('require', 'single'))),
      field('entity', $.identifier)
    ),

    isa_stmt: $ => seq(
      'isa',
      field('parent', $.identifier),
      field('constraints', optional(seq(
        '(',
        commaSep1($.isa_constraint),
        ')'
      ))),
      commaSep1(field('child', $.identifier)),
      ';'
    ),

    isa_constraint: $ => choice(
      'cover',
      'overlap'
    ),

    attr_block: $ => seq(
      '{',
      repeat($.attr),
      '}'
    ),

    attr: $ => prec(1, seq(
      field('modifiers', repeat(choice('key', 'set'))),
      field('attributes', repeat1($.identifier))
    )),

    identifier: $ => choice(
      // Quoted identifier with spaces
      seq(
        '"',
        /[^"]+/,
        '"'
      ),
      // Regular identifier
      /[a-zA-Z_][a-zA-Z0-9_-]*/
    ),

    comment: $ => token(seq('#', /.*/))
  }
});

// Helper function for comma-separated lists with at least one element
function commaSep1(rule) {
  return seq(rule, repeat(seq(',', rule)));
}
