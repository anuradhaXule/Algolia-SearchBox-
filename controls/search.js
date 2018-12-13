var client = algoliasearch('QPE5WRIKBF', 'e63104cb6de5c277578c7f296e43ea19');
      var index = client.initIndex('NZ Safety');

      autocomplete('#search-input', { hint: false }, [
        {
          source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
          displayKey: 'name',
          templates: {
            suggestion: function(suggestion) {
              return suggestion._highlightResult.name.value;
            }
          }
        }
      ]).on('autocomplete:selected', function(event, suggestion, dataset) {
        console.log(suggestion, dataset);
        
        alert('dataset: ' + dataset + ', ' + suggestion.name);
      });