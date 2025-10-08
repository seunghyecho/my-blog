import client from "../client";

// GET /api/users/me 
const me = () =>client.get('/api/users/me');

export { me };