export type PrimitiveType = string | number | boolean;

export const isString = (value: any): value is string => {
  return typeof value === 'string';
};

export const isFunction = (fn: any): fn is Function => typeof fn === 'function';


export const isNumber = (value: any): value is number => {
  return typeof value === 'number';
};

export const isBoolean = (value: any): value is boolean => {
  return typeof value === 'boolean';
};

export const isDate = (value: any): value is Date => {
  return value instanceof Date;
};

export const isPrimitive = (value: any): value is PrimitiveType => {
  return isBoolean(value) || isNumber(value) || isString(value);
};
