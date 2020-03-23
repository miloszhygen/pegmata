import config from './config';

const inProduction = process.env.GATSBY_NODE_ENV === "production"
const testConfig = {
  sanity: {
    projectId: "",
    dataset: inProduction ? "production" : "develop",
    watchMode: true,
  }
}

describe('config', () => {
  it('should not change', () => {
    expect(testConfig).toEqual(config);
  })
})