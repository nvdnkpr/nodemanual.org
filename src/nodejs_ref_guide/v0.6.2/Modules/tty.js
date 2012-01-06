/**
 * class tty
 * 
 * This module controls printing to the terminal output. Use `require('tty')` to access this module.
 * 
 * #### Example
 * 
 * <script src='http://64.30.143.68/serve?repo=https%3A%2F%2Fgist.github.com%2F1564319&file=tty.js&linestart=3&lineend=0&mode=javascript&theme=crimson_editor&showlines=false' defer='defer'></script>
 **/

/**
 * tty.getWindowSize(fd) -> Array
 * - fd (Number):  The file descriptor to check
 * 
 * Returns an array of `[row, col]` for the TTY associated with the file descriptor.
 *
**/ 


/**
 * tty.isatty(fd) -> Boolean
 * - fd (Number):  The file descriptor to check
 * 
 * Returns `true` or `false` depending on if the file descriptor is associated with a terminal.
 * 
**/ 


/**
 * tty.setRawMode(mode) -> Void
 * - mode (Boolean): A boolean value indicating how to set the rawness
 * 
 * This sets the properties of the current process's stdin file descriptor to act either as a raw device (`true`) or default (`false`).
 * 
**/ 


/**
 * tty.setWindowSize(fd, row, col) -> Void
 * - fd (Number): The file descriptor to use
 * - row (Number): The number of rows
 * - col (Number): The number of columns
 * 
 * Defines the window size settings to the file descriptor.
 *
**/ 

