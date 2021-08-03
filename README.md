# Serverless lambda starter

I've added some commented out config params in `serverless.yml` file (what I generally end up using).
The `handler.ts` is also has `middy` goodies to help you out with the not so fun `events` object.
Everything is pretty much stock. Comes with 4 scripts: `cz` (commitizen), `build`, `deploy` and `destroy`.

The build depends on `serverless-bundle` plugin. I've also added the `serverless-offline` plugin if you are into that.

Feel free to open a issue in case you have any suggestions or doubts.
