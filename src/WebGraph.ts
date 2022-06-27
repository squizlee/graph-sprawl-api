// Webgraph represents a directed graph
class WebGraph 
{

	nodes : Array<GraphNode>
	adjacency_matrix : Object // id -> Array of 

	constructor() {
		this.nodes = []
		this.adjacency_matrix = []
	}

	add_node(id : String) {
		this.nodes.push(new GraphNode(id))
	}

	size() {
		return this.nodes.length
	}

}

class GraphNode {

	id : String // url
	external : boolean // if the link is an external link (hostname is different to root) 

	constructor(id : String) {
		this.id = id
		this.external = false
	}
}

export default WebGraph