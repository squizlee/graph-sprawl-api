import "dotenv/config"
import create_graph from "./create_graph"

async function main() {
	const res = await create_graph("https://www.commbank.com.au/")
	console.log("Res", res)
}
main()