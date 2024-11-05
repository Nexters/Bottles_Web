export async function GET(request: Request) {
  return Response.json({
    applinks: {
      details: [
        {
          appIDs: ['82J7RU93V4.asia.bottles'],
          components: [
            {
              '/': '*',
            },
          ],
        },
      ],
    },
  });
} 
