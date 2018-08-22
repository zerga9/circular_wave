# Circular Wave Technical Assessment

## Approach

- I am led by the error-messages of the Chrome DevTools console

- Change var buttonHandler in function(because otherwise it is calling giving the anonymous function, not calling the function to be executed) and get rid of space in argument processRecords(All theRecords)

- Change this into btn(because this doesn't refer to btn and in strict mode, if this was not defined by the execution context, it remains undefined) for innerHTML and classList.toggle: The button changes now into loading... when clicking!

- console.log(ids)shows random selection ids in array

- recordId is not defined: make it an item of the array ids and console.log error or data. This gives the records in the console

- AllTheRecords is not defined at getRecords: Make it an array where you push the data to if no error

- No display records, because AllTheRecords is being called before filling up with records(you can see it after console.log(AllTheRecords)): make a count var to check if all records are in AllTheRecords

- Places records are shown, but undefined: get rid of undefined by getting rid of index and array in forEach. All records showing, but not sorted yet.

- Sorting records with .sort and parseInt(). Put "0" in date with single days. Ugly code, but works

- The totals not given correctly. After console.logging you can see there are some numbers in string: parseInt, now working correctly

- Refactoring count-check in function, deleting comments and console.logs

## Assignment

- For this assessment we'll need you to fix some broken code.

## What we are looking for

This assessment is all about your problem solving and grasp of JavaScript. You shouldn't need any libraries or frameworks, just vanilla JS (ECMAScript 5). We are not testing your knowledge of the latest and greatest ES6 - although if you want to use it you're welcome.

## Guidance

- You'll probably benefit from using a debugger. We recommend using Chrome and Chrome DevTools for this
- You won't need to touch any file except for `testfile.js`
- You can leave `index.html` alone - any classes / IDs you need are already referenced in `testfile.js` and you shouldn't need to do any extra DOM manipulation
- Don't go looking for clues in `server.js` - it's minified and won't help anyway.
- Use of libraries isn't necessary
- Feel free to use the internet if you get stuck

## What the app should do

On running `index.html` in a browser, the app should simply show a list of line items of employee shifts. On pressing the "Get next" button, the app should

1.  Change the text and style of the "Get next" button to "Loading..."
2.  Synchronously retrieve a random number of record IDs from a "server" (this is simulated and doesn't require an internet connection)
3.  Asynchronously retrieve the corresponding records from the "server", only proceeding when all records have been received
4.  Sort the records in date order, oldest first
5.  Render the records into the table
6.  Calculate total hours worked and render them into the table
7.  Reset the button to its original state

## What you need to fix

1.  Ensure the "Get data" button changes its appearance correctly
2.  Aggregate the "async" data returned from the server, only proceeding once all responses are received
3.  Sort the records according to date, oldest first
4.  Ensure the records render properly in the table
5.  Ensure the totals are correct
6.  Ensure the button returns to its starting "Get data" state

There is no time limit, although you can reckon on around 2 - 3 hours. You don't have to finish it all - we are looking for clear thinking and problem solving more than perfect code or JS knowledge. just get as far as you can. When you've finished, save the whole folder and email it to us at info@circularwave.co.uk along with how long you spent.

Thanks!
