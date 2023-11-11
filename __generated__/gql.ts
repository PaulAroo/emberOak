/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tquery GetAllProducts {\n\t\tproducts {\n\t\t\tid\n\t\t\tdescription\n\t\t\tname\n\t\t\tstatus\n\t\t\tprice\n\t\t\tphoto {\n\t\t\t\tid\n\t\t\t\timage {\n\t\t\t\t\tpublicUrlTransformed\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetAllProductsDocument,
    "\n\tmutation CreateSingleProduct(\n\t\t$name: String!\n\t\t$description: String!\n\t\t$price: Int!\n\t\t$image: Upload\n\t) {\n\t\tcreateProduct(\n\t\t\tdata: {\n\t\t\t\tname: $name\n\t\t\t\tdescription: $description\n\t\t\t\tprice: $price\n\t\t\t\tstatus: \"AVAILABLE\"\n\t\t\t\tphoto: { create: { image: $image, altText: $name } }\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\tprice\n\t\t}\n\t}\n": types.CreateSingleProductDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetAllProducts {\n\t\tproducts {\n\t\t\tid\n\t\t\tdescription\n\t\t\tname\n\t\t\tstatus\n\t\t\tprice\n\t\t\tphoto {\n\t\t\t\tid\n\t\t\t\timage {\n\t\t\t\t\tpublicUrlTransformed\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetAllProducts {\n\t\tproducts {\n\t\t\tid\n\t\t\tdescription\n\t\t\tname\n\t\t\tstatus\n\t\t\tprice\n\t\t\tphoto {\n\t\t\t\tid\n\t\t\t\timage {\n\t\t\t\t\tpublicUrlTransformed\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateSingleProduct(\n\t\t$name: String!\n\t\t$description: String!\n\t\t$price: Int!\n\t\t$image: Upload\n\t) {\n\t\tcreateProduct(\n\t\t\tdata: {\n\t\t\t\tname: $name\n\t\t\t\tdescription: $description\n\t\t\t\tprice: $price\n\t\t\t\tstatus: \"AVAILABLE\"\n\t\t\t\tphoto: { create: { image: $image, altText: $name } }\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\tprice\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateSingleProduct(\n\t\t$name: String!\n\t\t$description: String!\n\t\t$price: Int!\n\t\t$image: Upload\n\t) {\n\t\tcreateProduct(\n\t\t\tdata: {\n\t\t\t\tname: $name\n\t\t\t\tdescription: $description\n\t\t\t\tprice: $price\n\t\t\t\tstatus: \"AVAILABLE\"\n\t\t\t\tphoto: { create: { image: $image, altText: $name } }\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\tprice\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;