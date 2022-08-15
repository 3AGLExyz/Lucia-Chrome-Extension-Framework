/**
 * This is the counter example from the popup page.
 * You can safely delete this codeblock.
 * 
 * @return {void}
 */
Alpine.data('counter', () => 
({
    // Defines Variable integer
    count: 1,
    
    // Defines Function increment
    increment() { 
        this.count++ 
    } 
}))


/**
 * Initialize variables and functions
 * Everything you define here will be available
 * from the html tag on over the whole page.
 * 
 * @return {void}
 */
Alpine.data('lucia-html', () => 
({
    // Your code goes here
}))


/**
 * Initialize variables and functions
 * Everything you define here will be available
 * only in the header of the page.
 * 
 * @return {void}
 */
Alpine.data('lucia-head', () => 
({
    // Your code goes here
}))


/**
 * Initialize variables and functions
 * Everything you define here will be available
 * only in the body of the page.
 * 
 * @return {void}
 */
Alpine.data('lucia-body', () => 
({
    // Your code goes here
}))