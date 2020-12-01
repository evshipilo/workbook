export default class Lodash {
    compact(array) {
        return array.filter((item) => !!item)
    }

    groupBy(array, prop) {
        let obj = {}
        array.forEach(it => {
            let key = prop instanceof Function ? prop(it).toString() : it[prop].toString()
            key in obj ? obj[key].push(it) : obj[key] = [it]
        })
        return obj
    }
}
