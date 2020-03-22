import config from './config';

const inProduction = process.env.GATSBY_NODE_ENV === "production"
const testConfig = {
  sanity: {
    projectId: "hnz7n8t7",
    dataset: inProduction ? "production" : "develop",
    watchMode: true,
  }
}

describe('config', () => {
  it('should not change', () => {
    expect(testConfig).toEqual(config);
  })
})