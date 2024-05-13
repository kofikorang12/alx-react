import { normalize, schema } from "normalizr";

export function courseNormalizer(data) {
  const course = new schema.Entity("course");
  const normalizedData = normalize(data, [course]);
  return normalizedData;
}
