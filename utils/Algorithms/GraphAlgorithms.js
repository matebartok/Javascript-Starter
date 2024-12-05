// Depth-First Search (DFS)

function dfs(graph, start, visited = new Set()) {
    if (visited.has(start)) return;
    console.log(start);
    visited.add(start);
    for (const neighbor of graph[start]) {
      dfs(graph, neighbor, visited);
    }
  }

  
// Breadth-First Search (BFS)

function bfs(graph, start) {
    const queue = [start];
    const visited = new Set();
    while (queue.length) {
      const node = queue.shift();
      if (!visited.has(node)) {
        console.log(node);
        visited.add(node);
        queue.push(...graph[node]);
      }
    }
  }
  