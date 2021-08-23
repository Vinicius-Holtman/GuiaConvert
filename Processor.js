

class Processor {

    static process(data) {
        var arrayData = data.split("\r\n")
        var rows = []

        arrayData.forEach(row => {
            var arr = row.split(";")
            rows.push(arr)
        })

        return rows
    }
}

module.exports = Processor;