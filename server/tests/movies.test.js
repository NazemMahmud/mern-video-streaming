import {app} from "../server.js";
import request from "supertest";
import {NOT_PERMITTED} from "../src/config/constants.js";

/**
 * describe() => is used for grouping together related tests
 * it() is an alias of test() => which runs the actual test.
 * expect() => tests a value using a set of matcher functions.
 */
let token = '';
let notAdminToken = '';
beforeAll(() => {
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiNjI4MGNkOWY1YTQyMDIyOWNmMDJhMTQxIiwiZW1haWwiOiJ0ZXN0dXNlcjFAZ21haWwuY29tIiwibmFtZSI6InRlc3QgdXNlciAxIiwiaXNBZG1pbiI6dHJ1ZX0sImlhdCI6MTY1MzE2MzEyMSwiZXhwIjoxNjUzMjQ5NTIxfQ.cxhR1axhQx5q4lADMbZ60T26a8WR7CiyuLmh-7YhhBo';
    notAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiNjI4MGQ0MWE4NDg0MDNhNzBmNzFiZmNhIiwiZW1haWwiOiJ0ZXN0dXNlcjJAZ21haWwuY29tIiwibmFtZSI6InRlc3QgdXNlciAyIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE2NTMxNjE4MjcsImV4cCI6MTY1MzI0ODIyN30.F5gmFcztTM1b9Tfx8vpXDr6iitztnwcR1BOEiCNKySo';
});

describe('Movie store test', () => {
    const API = '/api/movies';
    // Test 1: authenticate user
    it("Error: unauthenticated", async () => {
        const result = await request(app).post(API).send();
        expect(result.statusCode).toEqual(401);
        expect(result.body).toEqual({
            "data": null,
            "message": "Unauthenticated request",
            "status": "failed"
        });
    });

    // Test 2: is admin permission
    it("Error:  not admin permission", async () => {
        const result = await request(app).post(API)
            .set('Authorization', `Bearer ${notAdminToken}`)
            .send();
        expect(result.statusCode).toEqual(403);
        expect(result.body).toEqual({
            "data": null,
            "message": NOT_PERMITTED,
            "status": "failed"
        });
    });

    // Test 2
    it("Error: required field missing (multi error)", async () => {
        // const result = await request(app).post(API)
        //      .set('Authorization', `Bearer ${notAdminToken}`).send();
        // expect(result.statusCode).toEqual(401);
        // expect(result.body).toEqual({
        //     "data": null,
        //     "message": "Unauthenticated request",
        //     "status": "failed"
        // });
    });
    //     title: {
    //         type: String,
    //             required: [true, "Title is required"],
    //             unique: true
    //     },
    //     description: { type: String },
    //     img: { type: String },
    //     imageTitle: { type: String },
    //     imageSmall: { type: String },
    //     trailer: { type: String },
    //     video: { type: String },
    //     year: { type: String },
    //     limit: { type: Number },
    //     genre: { type: String },
    //     isMovie: { type: Boolean, default: true },
    // },
    // {
    //     timestamps: true
    // }

    // Test 2: required field empty
    // Test 3: required field not matching
    // Test 6: DB error for unique keys
    // Test 7: perfect store

})
