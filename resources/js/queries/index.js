export const fetchStarsQuery = (
  cursor = null,
  direction = 'DESC',
  perPage = 50
) => {
  const cursorFilter = cursor ? `after:"${cursor}"` : 'after:null'
  return `query {
    viewer {
    starredRepositories(first: ${perPage}, orderBy: {field: STARRED_AT, direction: ${direction}},  ${cursorFilter}) {
        totalCount
        edges {
        node {
            id
            nameWithOwner
            description
            url
            databaseId
            isArchived
            defaultBranchRef {
            name
            }
            primaryLanguage {
            name
            }
            stargazers {
            totalCount
            }
            forkCount,
            releases(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {
                edges{
                    node {
                        tagName
                    }
                }
            }
        }
        cursor
        }
        pageInfo {
        startCursor
        endCursor
        hasNextPage
        }
    }
    }
  }`
}