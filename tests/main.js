import assert from "assert";

describe("cafeteria", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});

/*describe("Menu", function () {
  it("Item is added if its requested and authenticated  ", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });
  it("Item is not added if its requested and unauthenticated  ", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });
  it("Item is not removed if its  requested not authenticated  ", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });
  it("Item is  removed if its  requested and authenticated  ", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });
  it("Category is added if its requested and authenticated  ", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });
  it("Category is not added if its requested and unauthenticated  ", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });
  it("Category is not removed if its  requested not authenticated  ", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });
  it("Category is  removed if its  requested and authenticated  ", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });
  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
describe("User", function () {
  it("User is logged in if its requested and authenticated and registered ", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });
  it("User is not logged in if its requested and unauthenticated  ", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });
  });
describe("People count", function () {
  it("Count is shown if its requested and authenticated ", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });
  it("Count is shown if its requested and unauthenticated ", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "cafeteria");
  });
  });*/