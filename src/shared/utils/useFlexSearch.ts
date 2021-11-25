import {useState, useEffect, useMemo} from 'react';
import {
  Document,
  IndexOptionsForDocumentSearch,
  DocumentSearchOptions,
} from 'flexsearch';

interface IFlexSearchResult<T extends Record<any, any>> {
  field: string;
  result: {
    doc: T;
    id: string;
  }[];
}

export const useFlexSearch = <T extends Record<any, any>>(
  query: string,
  store: T[],
  indexOptions: IndexOptionsForDocumentSearch<T>,
  searchOptions?: DocumentSearchOptions<boolean>,
) => {
  const [myIndex, setMyIndex] = useState<Document<T> | null>(null);

  useEffect(() => {
    const newIndex = new Document(indexOptions);
    setMyIndex(newIndex);
    store.forEach(searchVal => {
      if (myIndex)
        setMyIndex(prev => {
          if (prev) return prev.add(searchVal);
          else return prev;
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store]);

  return useMemo(() => {
    if (!query || !myIndex || !store) return [];

    const searchRes = myIndex.search(
      query,
      // @ts-ignore:next-line
      searchOptions,
    ) as unknown as IFlexSearchResult<T>[];
    return searchRes;
  }, [query, myIndex, store, searchOptions]);
};
