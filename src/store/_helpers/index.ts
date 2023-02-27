import { StoredDocuments } from 'store/types';

function getPayloadIds<T>(data: StoredDocuments<T>) {
  return Object.keys(data) as [];
}

export { getPayloadIds };
