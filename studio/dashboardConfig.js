export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dee601a605af3106f89fe91',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mzrzujnh',
                  apiId: '6e3eb0af-0c22-442b-914c-45e834a23f4d'
                },
                {
                  buildHookId: '5dee601afb9d92c637764b55',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gj1dkhkc',
                  apiId: '450dcdfd-b71c-4b0f-aba5-9a3a62d3888c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dheerajmpai/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gj1dkhkc.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
