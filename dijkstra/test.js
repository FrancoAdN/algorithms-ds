const WeightedGraph = require("./index");

describe("dijkstra", () => {
	let graph;
	beforeAll(() => {
		graph = new WeightedGraph();

		graph.addVertex("A");
		graph.addVertex("Z");
		graph.addVertex("C");
		graph.addVertex("D");
		graph.addVertex("E");
		graph.addVertex("H");
		graph.addVertex("Q");
		graph.addVertex("G");

		graph.addEdge("A", "Z", 7);
		graph.addEdge("A", "C", 8);

		graph.addEdge("Z", "Q", 2);

		graph.addEdge("C", "G", 4);

		graph.addEdge("D", "Q", 8);

		graph.addEdge("E", "H", 1);

		graph.addEdge("H", "Q", 3);

		graph.addEdge("Q", "C", 6);

		graph.addEdge("G", "Q", 9);
	});

	it("should return the shortest path from A to E", () => {
		expect(graph.Dijkstra("A", "E")).toEqual(["A", "Z", "Q", "H", "E"]);
	});
	it("should return the shortest path from A to Q", () => {
		expect(graph.Dijkstra("A", "Q")).toEqual(["A", "Z", "Q"]);
	});

	it("should return the shortest path from A to G", () => {
		expect(graph.Dijkstra("A", "G")).toEqual(["A", "C", "G"]);
	});

	it("should return the shortest path from A to D", () => {
		expect(graph.Dijkstra("A", "D")).toEqual(["A", "Z", "Q", "D"]);
	});
});
