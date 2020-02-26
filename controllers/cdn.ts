const path = require("path");

export async function banner(req: any, reply: any) {
    reply.sendFile(path.resolve('../admin-console-api/cdn/gastrobanner.jpeg'));
}