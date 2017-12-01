
const ds = require('@google-cloud/datastore')({ namespace: 'bens-task-2' });

const kind = 'files';

function key(id) {
  return ds.key([kind, id]);
}

module.exports.get = async (id) => {
  const [data] = await ds.get(key(id));
  if (data && data.val) return `${data.val}`;
  return '0';
};

module.exports.post = async (id, val) => {
  const entity = {
    key: key(id),
    data: { name: id, val },
  }
  await ds.save(entity);
};

module.exports.put = async (id, val) => {
  const entity = {
    key: key(id),
    data: { name: id, val },
  }
  await ds.save(entity);
};


module.exports.delete = async(id) => {
  const [data] = await ds.delete(key(id));
  if(data.indexUpdates > 0) return 'ok';
  return '0';
}
