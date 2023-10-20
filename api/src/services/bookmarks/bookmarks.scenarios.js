export const standard = defineScenario({
  bookmark: {
    one: {
      data: {
        curhat: {
          create: {
            text: 'String',
            author: {
              create: {
                username: 'String',
                email: 'String8578128',
                password: 'String',
              },
            },
          },
        },
        user: {
          create: {
            username: 'String',
            email: 'String6887700',
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
                email: 'String8513414',
                password: 'String',
              },
            },
          },
        },
        user: {
          create: {
            username: 'String',
            email: 'String7888689',
            password: 'String',
          },
        },
      },
    },
  },
})
