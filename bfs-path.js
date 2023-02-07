function findNeighbors(node, matrix) {
    let row = node[0]
    let col = node[1]

    let neighbors = []
    //UP

    if(matrix[row - 1]){
        neighbors.push([row - 1, col])
    }



    // LEFT
    if(matrix[0][col - 1]){
        neighbors.push([row, col - 1])
    }

    // RIGHT
    if(matrix[0][col+1]){
        neighbors.push([row, col + 1])
    }

    // DOWN
    if(matrix[row + 1]){
        neighbors.push([row + 1, col])
    }

    return neighbors
    // Your code here
}


function bfsPath(matrix, startNode, endValue) {
    // Your code here
    let queue = [[startNode]]
    let visited =  new Set()
    let visitedArr = []

    // if endValue is located at startNode
    if(matrix[startNode[0]][startNode[1]] == endValue){
        return [startNode]
    }

    while( queue.length > 0){
        let currentPath = queue.shift()
        let currentNode =  currentPath[currentPath.length - 1]

        // break down the coordinates to store easily as string for the visited Set
        let row = currentNode[0]
        let col = currentNode[1]
        let coordinates = `${row}, ${col}`

        if(!visited.has(coordinates)){
            visited.add(coordinates)

            //store visited coordinates in seperate array
            visitedArr.push([row, col])

            // if current coordinate is end Value return visited Array
            if(matrix[currentNode[0]][currentNode[1]] == endValue){
                return visitedArr
            }

            // find neighbors and add to queue
            let neighbors =  findNeighbors(currentNode, matrix)
            for(let i = 0; i < neighbors.length; i++){
                let value = neighbors[i]
                let copyPath = [...currentPath]
                copyPath.push(value)
                queue.push(copyPath)
            }
        }
    }
    return false
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
