class MyStack {
    constructor (array= [], length= array.length){
        this.count = length
        this.collection = array
    }

    // Return items in the collection
    show = ()=>{
        return this.collection
    }

    //Push add item to the last position
    push = (element)=>{
        this.collection[this.count] = element
        this.count++
    }

    //Pop remove the return and remove the last item from the collection
    pop = ()=>{
        if (this.count == 0) return undefined
        this.count--
        var item = this.collection[this.count]
        delete this.collection[this.count]
        return item
    }

    //Size return the length of the collection
    size = ()=>{
        return this.count
    }

    //Peek return the last item of the collection
    peek = ()=>{
        if (this.count == 0) return undefined
        this.count--
        var item = this.collection[this.count]
        return item
    }
}

var test = new MyStack()
test.pop()
console.log(test.item())