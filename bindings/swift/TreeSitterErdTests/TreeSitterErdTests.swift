import XCTest
import SwiftTreeSitter
import TreeSitterErd

final class TreeSitterErdTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_erd())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Erd grammar")
    }
}
