var Reader = require('./Reader')
var Processor = require('./Processor')
var Table = require('./Table')
var HtmlParser = require('./HtmlParser')

var leitor = new Reader();


async function main() {
    var data = await leitor.read("./users.CSV")
    var dadosProcessados = Processor.process(data)

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.parse(usuarios)

    console.log(html)
}

main()