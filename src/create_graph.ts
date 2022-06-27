import puppeteer from "puppeteer"
import WebGraph from "./WebGraph"

// TODO: Go through and grab each address link
// TODO: Maybe structure this better
async function create_graph(start : string, depth : Number = 10) : Promise<WebGraph> {
	console.log("Creating graph")
	const graph = new WebGraph()
	const browser = await puppeteer.launch({headless: false})
	const page = await browser.newPage()

	await page.goto(start)
	await page.waitForTimeout(1000)
	await traverse(page, graph, 0, depth, [], start)
	await browser.close()

	return graph
}

async function traverse(page : puppeteer.Page, graph : WebGraph, depth : Number, max : Number, queue : Array<String>, location : string) : Promise<WebGraph> {
	/* TODO: Think about the structure of this function more */
	const host = new URL(location).hostname
	graph.add_node(location)
	const anchors = await page.evaluate(() =>
	{
		return Array.from(document.querySelectorAll("a"))
					.map(anchor => anchor.href)
					.filter(str => str.search(new RegExp(`${window.location.origin}/#|javascript`)) === -1)
	})

	queue.push(...anchors)
	queue.forEach((link) => {
		
	})

	return graph
}

export default create_graph