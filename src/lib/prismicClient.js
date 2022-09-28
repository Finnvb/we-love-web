import * as prismic from '@prismicio/client'

// Update your repository name here

const repositoryName = 'fdndtribe'

const createClient = (params) => {
  const client = prismic.createClient(repositoryName, params)
  return client
}

export default createClient