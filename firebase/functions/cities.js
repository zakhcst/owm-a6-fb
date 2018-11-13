
const functions = require('firebase-functions');

// On OWM update of a city counter, increments counter 'u' updates for OWM stats
exports.onWriteUpdate = functions.database
.ref('/cities/{cityId}/u')
.onWrite((change, context) => {

  const ref = change.after.ref.root.child(`stats/u`);

  return ref.transaction(value => {
    return value ? value + 1 : 1;
  });
});

// On browser data request for OWM data, increments counter 'r' reads for OWM stats
exports.onWriteRead = functions.database
  .ref('/cities/{cityId}/r')
  .onWrite((change, context) => {

    const ref = change.after.ref.root.child(`stats/r`);

    return ref.transaction(value => {
      return value ? value + 1 : 1;
    });
  });

  // shell:
  // onWriteUpdate({before: {'owm': {'cid': { 'updated': false} } }, after: {'owm': {'cid': { 'updated': true} } } }, { params: { cityId : 5}})
