import handler from "../../../src/pages/api/hello";
import type { NextApiRequest, NextApiResponse } from "next";

describe("API: hello", () => {
  it("should return a name", async () => {
    const req = {} as unknown as NextApiRequest;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as NextApiResponse;

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ name: "John Doe" });
  });
});
