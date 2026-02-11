import request from "supertest";
import app from "../src/app.js";

describe("GET /js", () => {
  it("should return javascript content type", async () => {
    const res = await request(app).get("/js");
    expect(res.header["content-type"]).toBe("text/javascript; charset=utf-8");
    expect(res.text).toBe("// nop");
  });
});

describe("GET /", () => {
  it("should return html content type", async () => {
    const res = await request(app).get("/");
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(res.text).toBe("");
  });
});

describe("GET /html", () => {
  it("should return html content type", async () => {
    const res = await request(app).get("/html");
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(res.text).toBe("<html></html>");
  });
});

describe("GET /image", () => {
  it("should return gif content type", async () => {
    const res = await request(app).get("/image");
    expect(res.header["content-type"]).toBe("image/gif");
    expect(res.header["content-length"]).toBe("43");
  });
});
