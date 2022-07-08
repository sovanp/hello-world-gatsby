import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// add data prop to function definition
const BlogPage = ({ data }) => {
  return (
    //use .map() method to iterate over the nodes arary and render the filename for each post
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

// define and export page query. Query was built in GraphiQL
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
