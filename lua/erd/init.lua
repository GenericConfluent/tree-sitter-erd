local M = {}

function M.setup()
    local parser_config = require("nvim-treesitter.parsers").get_parser_configs()
    parser_config.erd = {
        install_info = {
            url = "https://github.com/GenericConfluent/tree-sitter-erd",
            files = {"src/parser.c"},
            branch = "main",
            requires_generate_from_grammar = true,
            generate_requires_npm = false,
        },
        filetype = "erd"
    }
    vim.treesitter.language.register("erd", "erd")
end

return M
