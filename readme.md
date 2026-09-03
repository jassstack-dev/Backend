Backend Basics — Notes
1. Node.js

Node.js JavaScript ko browser ke bahar, mainly server-side/backend par run karne ka environment hai.

Isse hum backend/server bana sakte hain.

2. npm init -y
npm init -y


Ye Node.js project ko initialize karta hai.

Iske baad package.json file create hoti hai.

package.json mein project ki information, dependencies aur scripts wagaira hoti hain.

3. Express

Express.js Node.js ke upar use hone wala web framework hai.

Iski help se server, routes aur APIs banana easy ho jata hai.

Install:

npm i express


Ye project mein Express package install karta hai aur package.json mein dependency add karta hai.

4. Server

Server ek aisa program/system hai jo client ki request receive karta hai aur uska response deta hai.

Basic flow:

Client
   ↓ Request
Server
   ↓ Response
Client

5. listen()

Example:

app.listen(3000);


listen() server ko ek particular port par requests sunne ke liye start karta hai.

⚠️ Ye yaad rakh:

listen() ka kaam code ko simply "chalana" nahi hai.
Ye server ko specified port par incoming requests listen karne ke liye start karta hai.

6. Port

Port ek number hota hai jo computer par kisi particular network service/application tak traffic pahunchane mein help karta hai.

Example:

app.listen(3000);


Yahan 3000 port hai.

Easy example:

IP Address = Ghar ka address 🏠
Port       = Ghar ka specific darwaza 🚪
Server     = Ghar ke andar service 🏠


Network communication roughly:

Client
   ↓
IP Address
   ↓
Port 3000
   ↓
Backend Server


Important: Port sirf internet ke liye nahi hota; network communication mein generally use hota hai.

7. req — Request

req ka matlab Request.

Client/frontend se backend ko jo request aati hai, uski information req object mein hoti hai.

app.get("/users", (req, res) => {
    console.log(req);
});


req mein request se related information mil sakti hai, jaise:

req.body
req.params
req.query


Simple:

Frontend → Backend = Request (req)

8. res — Response

res ka matlab Response.

Backend client/frontend ko jo response bhejta hai, uske liye res object use hota hai.

Example:

app.get("/users", (req, res) => {
    res.send("Users data");
});


Simple:

Backend → Frontend = Response (res)

Yaad rakh:

Frontend
   ↓
  req
   ↓
Backend
   ↓
  res
   ↓
Frontend

9. API

API = Application Programming Interface

API ek interface/set of rules hai jo different software applications ko aapas mein communicate karne deta hai.

Backend context mein:

Frontend aur Backend ke beech communication ke liye API ka use hota hai.

Example:

Frontend
   ↓ Request
   ↓
  API
   ↓
Backend
   ↓ Response
   ↓
Frontend

Important distinction

API ≠ Protocol

API communication ke liye rules/interface define kar sakti hai, jabki HTTP ek protocol hai jiske through web APIs commonly communicate karti hain.

10. HTTP

HTTP = HyperText Transfer Protocol

Ye ek communication protocol hai jo client aur server ke beech communication ke rules define karta hai.

HTTP mein different methods hote hain.

HTTP Methods
Method	Purpose
GET	Data lena
POST	Naya data create/bhejna
PUT	Existing data ko update/replace karna
PATCH	Existing data ka kuch part update karna
DELETE	Data delete karna

Example:

GET    /users
POST   /users
GET    /users/10
PATCH  /users/10
DELETE /users/10

11. REST API

REST = Representational State Transfer

REST koi programming language, package ya protocol nahi hai.

Ye API design karne ka architectural style hai.

Simple:

REST API = REST principles follow karke design ki gayi API, jo commonly HTTP methods ka use karti hai.

Example:

GET     /users       → saare users lao
POST    /users       → naya user create karo
GET     /users/5     → user 5 lao
PATCH   /users/5     → user 5 update karo
DELETE  /users/5     → user 5 delete karo

🧠 Abhi tak ka pura connection

Isko ek flow ki tarah yaad kar:

                 BACKEND
                    │
              Node.js + Express
                    │
              app.listen(3000)
                    │
                 Port 3000
                    │
Client ── Request ──→ Server
       (req)          │
                      │
Client ← Response ────┘
       (res)

       ↑
      API
       ↑
  REST API
       ↑
 HTTP Methods

Ekdum short revision
Node.js     → Backend ke liye JavaScript runtime

npm init    → Project initialize karta hai

npm i express → Express install karta hai

Express     → Node.js mein server/API banana easy karta hai

listen()    → Server ko port par requests listen karne ke liye start karta hai

Port        → Network traffic ko particular service tak pahunchane mein help karta hai

req         → Client → Backend request

res         → Backend → Client response

API         → Applications ke communication ka interface/rules

HTTP        → Communication protocol

GET/POST/
PUT/PATCH/
DELETE      → HTTP methods

REST        → API design karne ka architectural style

REST API    → REST principles follow karne wali API

