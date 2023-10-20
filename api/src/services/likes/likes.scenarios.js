export const standard = defineScenario({
  like: {
    one: {
      data: {
        curhat: {
          create: {
            text: 'String',
            author: {
              create: {
                username: 'String',
                email: 'String7072192',
                password: 'String',
              },
            },
          },
        },
        user: {
          create: {
            username: 'String',
            email: 'String7193910',
            password: 'String',
          },
        },
      },
    },
    two: {
      data: {
        curhat: {
          create: {
            text: 'String',
            author: {
              create: {
                username: 'String',
                email: 'String6314448',
                password: 'String',
              },
            },
          },
        },
        user: {
          create: {
            username: 'String',
            email: 'String404957',
            password: 'String',
          },
        },
      },
    },
  },
})
