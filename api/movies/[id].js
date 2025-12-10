// api/movies/[id].js
const movies = [
  /* same movies array as above */
];

export default function handler(req, res) {
  const { id } = req.query;
  const nid = parseInt(Array.isArray(id) ? id[0] : id, 10);
  if (isNaN(nid)) return res.status(400).json({ error: 'invalid id' });

  const movie = movies.find(m => m.id === nid);
  if (!movie) return res.status(404).json({ error: 'not found' });
  return res.status(200).json(movie);
}