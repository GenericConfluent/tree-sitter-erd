vim.filetype.add({ extension = { erd = "erd" } })

vim.api.nvim_create_autocmd("FileType", {
	pattern = "erd",
	callback = function(event)
		vim.bo[event.buf].commentstring = "# %s"
	end,
})
