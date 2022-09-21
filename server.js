const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = 
"mongodb+srv://oscar:WQYZgciD9w9aSyvr@cluster0.jpes8nx.mongodb.net/papay?retryWrites=true&w=majority"

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
  (err, client) => {
   if (err) console.log("ERROR on connection MongoDB");
   else {
    console.log("MongoDB connection succed");

    module.exports = client;
    
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function () {
    console.log(`The server is running successful on port: ${PORT}, http://localhost:${PORT}`
    );
    });
   }
  }
);
