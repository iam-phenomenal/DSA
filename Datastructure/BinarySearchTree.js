/**
 * Implementing a binary search tree
 */

//Creating a node
class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

//Creating Binary Search Tree
class BST{
    constructor(){
        this.root = null
    }

    insert(data){
        let node = new Node(data)
        if(this.root == null){
            this.root = node
        }else{
            this.findPositionAndInsert(this.root, node)
        }
    }
    
    findPositionAndInsert(currentNode, nextNode){
        if(nextNode.data < currentNode.data){
            if(currentNode.left == null){
                currentNode.left = nextNode
            }else{
                this.findPositionAndInsert(currentNode.left, nextNode)
            }
        }else{
            if(currentNode.right == null){
                currentNode.right = nextNode
            }else{
                this.findPositionAndInsert(currentNode.right, nextNode)
            }
        }
    }

    findMin(node = this.root){
        if (node.left == null){
            return node.data
        }else{
           return this.findMin(node.left)
        }
    }

    findMax(node = this.root){
        if(node.right == null){
            return node.data
        }else{
            return this.findMax(node.right)
        }
    }

    search(item, node = this.root){
        if(node == null) return false
        if(item == node.data) return true
        else if(item < node.data){
            return this.search(item, node.left)
        }else{
            return this.search(item, node.right)
        }
    }
}

/**
 * Testing
*/


//BST CLASS TEST

var myBST = new BST()
myBST.insert(6)
myBST.insert(8)
myBST.insert(3)
myBST.insert(8)
myBST.insert(3)
myBST.insert(89)
console.log(myBST.search(9))
