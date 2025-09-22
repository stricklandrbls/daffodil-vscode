export interface Attribute<T> {
  attributeValue(): T
}

export interface AttributeApplicator<R> {
  apply<T>(attribute: Attribute<T>, to: R): any
}
