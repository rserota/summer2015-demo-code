// what is it???
// why and where
// data flow

HTTP Request (and Response)
1. User enters a URL, clicks a link, submits a form...
2. Browser initiates an HTTP request to the server
  - hostname (localhost, 201.1.1.13, http://google.com, /about)
  - port (default: 80)
  - data (query string, post data)
3. Server receives request and sends back a response
  - response code (200, 304, 404, 500)
  - content type (image/jpeg, text/html, text/css, application/json)  "MIME types"
  - content
4. Browser renders the content based on its content type

How can we make an HTTP Request?
- Type in a url (page refresh)
- Click a link
- Submit a form
- Back/Forward
- script element (NO page refresh)
- link element
- src element
- video element
- iframe element

What is Ajax?!?
1. A javascript-initiated HTTP request
2. that does not refresh the page
  (the response is handled in Javascript)

Examples
- Gmail: Check for new emails
- Twitter: New tweet
- Chat room: Who is in the room?
- Facebook messaging (probably web sockets for real-time)
- Searching without refreshing the page
  - Autocomplete

