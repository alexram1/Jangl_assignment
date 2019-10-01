# Jangl_assignment
Here are the intructions with some comments that I have:

Create a script called "insertTrackedNumber.js" that follows these procedures in 
plain Javascript. (No JS Frameworks, jQuery, etc.)

1. Read the URL query string and parse a US phone number from the field "number".

    Ex: https://some.url/?number=15552223333


2. Replace all span instances with the class "tracked_number". The entire contents
   of the span should be replaced with the phone number in the URL. The replaced
   number should match the formatting of the existing text if possible. The default
   formatting if there is no match is (555) 222-3333.

    Ex: 1.888.552.6548 -> 1.555.222.3333
        number         -> (555) 222-3333


3. Replace the "href" attributes of all links with the class "tracked_number_link".
   The links should be formatted as:

    Ex: <a href="tel:1-555-222-3333">


4. Make sure that your code is inside a javascript closure and does not pollute the
   global namespace.
