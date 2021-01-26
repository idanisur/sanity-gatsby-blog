export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '600f7921d3253045100dbda9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nr3iowdf',
                  apiId: 'a89233d2-c871-4d09-9892-8f0a256d19af'
                },
                {
                  buildHookId: '600f7921d5bbeb592702ac5e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4415skwj',
                  apiId: '9fdbd83d-0414-43fd-ae42-c14862818b37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/idanisur/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4415skwj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
