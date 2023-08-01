const technologies = {
  data: {
    data: [
      {
        id: 9,
        attributes: {
          name: "css ",
          category: "frontEnd",
          about:
            "jnklajd lknac lkasnc asjc oascnaca nsklalk adfasklcn lkac lkanc ko ccko p",
          createdAt: "2023-07-11T09:10:07.134Z",
          updatedAt: "2023-07-11T09:10:07.134Z",
          publishedAt: "2023-07-11T09:10:07.132Z",
        },
      },
      {
        id: 10,
        attributes: {
          name: "HTML5",
          category: "frontEnd",
          about:
            "HTML5 is the latest version of the Hypertext Markup Language used for structuring and presenting content on the web.",
          createdAt: "2023-07-11T09:14:53.857Z",
          updatedAt: "2023-07-11T09:14:53.857Z",
          publishedAt: "2023-07-11T09:14:53.854Z",
        },
      },
      {
        id: 11,
        attributes: {
          name: "javascrpit",
          category: "frontEnd",
          about: "nakldnkjpas lakldjc lasl ajsklcjascn aljc;as ",
          createdAt: "2023-07-11T10:10:23.145Z",
          updatedAt: "2023-07-11T10:10:23.145Z",
          publishedAt: "2023-07-11T10:10:23.142Z",
        },
      },
      {
        id: 12,
        attributes: {
          name: "Node.js",
          category: "backend",
          about:
            "\nNode.js is a powerful, open-source JavaScript runtime environment that allows developers to build server-side and networking applications using JavaScript, providing high performance and scalability.",
          createdAt: "2023-07-11T11:13:50.934Z",
          updatedAt: "2023-07-11T11:13:50.934Z",
          publishedAt: "2023-07-11T11:13:50.928Z",
        },
      },
    ],
  },
};

// Grouping the technologies by category
const groupedByCategory = technologies.data.data.reduce(
  (result, technology) => {
    const category = technology.attributes.category;
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(technology);
    return result;
  },
  {}
);

console.log(groupedByCategory);
