
const functions = require('firebase-functions');

// On OWM data update increments counter 'u' updates to cities
exports.onWrite = functions.database
  .ref('/owm/{cityId}/updated')
  .onWrite((change, context) => {

    const cityId = context.params.cityId;
    const ref = change.after.ref.root.child(`cities/${cityId}/u`);

    return ref.transaction(value => {
      return value ? value + 1 : 1;
    });
  });

  // shell:
  // owmOnWrite({before: {'owm': {'cid': { 'updated': false} } }, after: {'owm': {'cid': { 'updated': true} } } }, { params: { cityId : 5}})
