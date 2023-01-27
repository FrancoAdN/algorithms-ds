class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(v1, v2) {
		if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
			this.adjacencyList[v1].push(v2);
			this.adjacencyList[v2].push(v1);
		}
	}

	removeEdge(v1, v2) {
		if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
			this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
			this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
		}
	}

	removeVertex(vertex) {
		while (this.adjacencyList[vertex] && this.adjacencyList[vertex].length) {
			const popped = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, popped);
		}

		delete this.adjacencyList[vertex];
	}

	DFSRecursive(startVertex) {
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;
		function dfs(vertex) {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);
			adjacencyList[vertex].forEach((nb) => {
				if (!visited[nb]) return dfs(nb);
			});
		}

		dfs(startVertex);

		return result;
	}

	DFSInterative(startVertex) {
		const stack = [startVertex];
		const result = [];
		const visited = {};
		visited[startVertex] = true;
		while (stack.length) {
			const current = stack.pop();
			result.push(current);

			this.adjacencyList[current].forEach((nb) => {
				if (!visited[nb]) {
					visited[nb] = true;
					stack.push(nb);
				}
			});
		}

		return result;
	}

	BFS(startVertex) {
		const queue = [startVertex];
		const result = [];
		const visited = {};
		visited[startVertex] = true;

		while (queue.length) {
			const current = queue.shift();
			result.push(current);
			this.adjacencyList[current].forEach((nb) => {
				if (!visited[nb]) {
					visited[nb] = true;
					queue.push(nb);
				}
			});
		}

		return result;
	}
}

module.exports = Graph;
