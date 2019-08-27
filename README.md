# Droom (BackEnd)

API service for Droom App

>Link to API:  https://droom-app.herokuapp.com/

<h2>API Routes</h2> <br>

| DESCRIPTION                     | HTTP METHOD   | ROUTES                                        | ACCESS        |
| ---------------                 | --------------|-----------------------------------------------|---------------|
| User Register                   | POST          | api/droom/register                        | PUBLIC        |
| User Login                     | POST          | api/droom/login                          | PUBLIC        |
|User Logout                  | POST          | /api/droom/logout                             | PRIVATE       |



<pre>
<h3>Register Route </h3>
<code>
Access: Public
Method: POST
Route: /api/droom/register
Payload: {
    email: STRING (required)(unique),
    account: INTEGER (required),
    password: STRING (required)
</code>
</pre>

<pre>
<h3>Login Route </h3>
<code>
Access: Public
Method: POST
Route: /api/droom/login
Payload: {
    email: STRING (required),
    password: STRING (required)
}
</code>
</pre>

<pre>
<h3>Logout Route </h3>
<code>
Access: Public
Method: POST
Route: /api/droom/logout
* Session will end
</code>
</pre>