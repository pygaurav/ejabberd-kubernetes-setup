const xmpp = require("simple-xmpp");
const prompt = require("prompt");

prompt.start();

xmpp.on("online", (data) => {
  console.log("Hey you are online! ");
  console.log(`Connected as ${data.jid.user}`);
  send();
});

function send() {
  prompt.get(["message"], (err, { message }) => {
    console.log(`Message Sent by User is ${message}`);
    xmpp.send("admin@localhost", message);
  });
}
xmpp.on("error", (error) => console.log(`something went wrong!${error} `));

xmpp.on("chat", (from, message) => {
  console.log(`Got a message! ${message} from ${from}`);
  send();
});

xmpp.connect({
  jid: "user@localhost",
  password: "123",
  host: "localhost",
  port: 31734,
});
