# Serverless lambda starter

I've added some commented out config params in `serverless.yml` file (what I generally end up using).
The `handler.ts` is also has `middy` goodies to help you out with the not so fun `events` object.
Everything is pretty much stock. Comes with 4 scripts: `cz` (commitizen), `build`, `deploy` and `destroy`.

The build depends on `serverless-bundle` plugin. I've also added the `serverless-offline` plugin if you are into that.

Feel free to open a issue in case you have any suggestions or doubts.

## Useful links

- [Middy](https://github.com/middyjs/middy)
- [How to setup cors using middy](https://github.com/middyjs/middy/tree/main/packages/http-cors)
- [How to generate http errors](https://www.npmjs.com/package/http-errors)
- [How to handle common http error codes](https://github.com/middyjs/middy/tree/main/packages/http-error-handler)
- [How to parse JSON body from aws event](https://github.com/middyjs/middy/tree/main/packages/http-json-body-parser)
- [How to validate body against a JSON schema](https://github.com/middyjs/middy/tree/main/packages/validator)
