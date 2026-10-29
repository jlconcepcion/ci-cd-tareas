const test = require("node:test");
const assert = require("node:assert");
const request = require("supertest");
const app = require("../src/app");

test("Get /health responde estatus ok", async () => {
    const response = await request(app).get("/health");
    assert.strictEqual(response.status, 200);
    assert.deepStrictEqual(response.body, { status: "ok" });
});

