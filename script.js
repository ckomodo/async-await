const { SSL_OP_NETSCAPE_CA_DN_BUG } = require("constants");

async function ajaxExample() {
    await $.ajax({
        method: "GET",
        url: "http://www.omdbapi.com/?apikey=trilogy&t=Joker",
    }).then(function (response) {
        console.log(response);
    });

    console.log("this will happen second");
}

ajaxExample()
