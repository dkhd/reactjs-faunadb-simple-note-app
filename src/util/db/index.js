import faunadb from 'faunadb';

const client = new faunadb.Client({
  secret: process.env.REACT_APP_FAUNADB_KEY,
  domain: 'db.fauna.com',
  port: 443,
  scheme: 'https',
});

const q = faunadb.query;

const getAllNotes = async () => {
  return await client
    .query(q.Paginate(q.Match(q.Ref('indexes/note_index'))))
    .then((response) => {
      const expenseRef = response.data;
      const getAllDataQuery = expenseRef.map((ref) => {
        return q.Get(ref);
      });
      return client.query(getAllDataQuery).then((data) => data);
    })
    .catch((error) => console.error('Error: ', error.message));
};

const getNoteByID = async (id) => {
  return await client
    .query(q.Get(q.Ref(q.Collection('note_collection'), id)))
    .then((response) => {
      return response;
    })
    .catch((error) => console.error('Error: ', error.message));
};

const updateNote = async (id, title, contents) => {
  return await client
    .query(
      q.Update(q.Ref(q.Collection('note_collection'), id), {
        data: { title: title, contents: contents },
      })
    )
    .then((response) => {
      return response;
    })
    .catch((error) => console.error('Error: ', error.message));
};

const createNote = async (title, contents) => {
  return await client
    .query(
      q.Create(q.Collection('note_collection'), {
        data: {
          title: title,
          contents: contents,
        },
      })
    )
    .then((response) => {
      return response;
    })
    .catch((error) => console.error('Error: ', error.message));
};

const deleteNote = async (id) => {
  return await client
    .query(q.Delete(q.Ref(q.Collection('note_collection'), id)))
    .then((response) => {
      return response;
    })
    .catch((error) => console.error('Error: ', error.message));
};

export {
  client,
  q,
  getAllNotes,
  getNoteByID,
  updateNote,
  createNote,
  deleteNote,
};
