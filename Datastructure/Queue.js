// Queue is a data collection type whose base of operation 
// follows the FIFO(First In First Out) protocol 
class Queue{
    //Setting constructor default value
    constructor(array=[], length= array.length){
        this.collection = array
        this.count= length
    }

    //Return the queue| collection of data
    show = ()=>{
        return this.collection
    }

    //Add item to the end of the collection
    enqueue = (item)=>{
        this.collection[this.count] = item
    }

    //Remove and return the first item of the queue
    dequeue = ()=>{
        let result = this.collection.shift()
        return result
    }

    //Return the size of the queue
    size = ()=>{
        return this.count
    }

    //Return the first item of the collection
    front = ()=>{
        return this.collection[0]
    }

    //Returns the last item of the collection
    end = ()=>{
        let index = this.count -1
        return this.collection[index]
    }

    //Checks if collection is empty
    isEmpty = ()=>{
        if(this.count === 0){
            return true
        } 
        else {
            return false
        }
    }
}